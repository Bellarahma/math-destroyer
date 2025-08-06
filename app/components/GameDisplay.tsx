/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Ship from './Ship';
import { MathProblem, Difficulty, generateMathProblem } from '@/lib/gameLogic';
import { playLaserSound, playExplosionSound } from '@/assets/sounds';

interface GameDisplayProps {
    difficulty: Difficulty;
    onGameOver: (win: boolean, score: number) => void;
}

const GameDisplay: React.FC<GameDisplayProps> = ({ difficulty, onGameOver }) => {
    const [playerPosition, setPlayerPosition] = useState(50);
    const [enemyShips, setEnemyShips] = useState<{ id: number; position: { x: number; y: number }; value: number; hit: boolean }[]>([]);
    const [mathProblem, setMathProblem] = useState<MathProblem | null>(null);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [timeLeft, setTimeLeft] = useState(10);
    const [questionCount, setQuestionCount] = useState(0);
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const shipIdCounter = useRef(0);
    const totalQuestions = 10;
    const generateNewProblem = useCallback(() => {
        const problem = generateMathProblem(difficulty);
        setMathProblem(problem);
        setTimeLeft(13);
        setQuestionCount(prev => prev + 1);
        const newEnemies = problem.options.map((value, index) => {
            shipIdCounter.current += 1;
            return {
                id: shipIdCounter.current,
                position: {
                    x: 15 + (index * 35),
                    y: 25
                },
                value,
                hit: false
            };
        });

        setEnemyShips(newEnemies);
    }, [difficulty]);

    useEffect(() => {
        generateNewProblem();
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                setPlayerPosition(prev => Math.max(10, prev - 5));
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                setPlayerPosition(prev => Math.min(90, prev + 5));
            } else if (e.key === ' ' || e.key === 'Enter') {
                fireLaser();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [generateNewProblem]);


    useEffect(() => {
        if (timeLeft <= 0 || questionCount > totalQuestions) return;

        const timer = setTimeout(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setLives(prevLives => {
                        const newLives = prevLives - 1;
                        if (newLives <= 0) {
                            onGameOver(false, score);
                        } else {
                            generateNewProblem();
                        }
                        return newLives;
                    });
                    return 10;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, questionCount, score, generateNewProblem, onGameOver]);


    useEffect(() => {
        if (questionCount > totalQuestions) {
            onGameOver(true, score);
        }
    }, [questionCount, score, onGameOver]);


    const fireLaser = () => {
        playLaserSound();


        const playerX = playerPosition;


        const targets = enemyShips
            .filter(enemy => !enemy.hit)
            .map(enemy => ({
                id: enemy.id,
                distance: Math.abs(enemy.position.x - playerX)
            }))
            .filter(target => target.distance < 30);


        if (targets.length > 0 && mathProblem) {
            const closestTarget = targets.reduce((closest, current) =>
                current.distance < closest.distance ? current : closest
            );

            const hitEnemy = enemyShips.find(e => e.id === closestTarget.id);
            if (hitEnemy) {
                if (hitEnemy.value === mathProblem.answer) {

                    setEnemyShips(prev => prev.map(e =>
                        e.id === hitEnemy.id ? { ...e, hit: true } : e
                    ));
                    setScore(prev => prev + 10 + Math.floor(timeLeft));


                    setTimeout(() => generateNewProblem(), 1000);
                } else {

                    playExplosionSound();
                    setLives(prev => {
                        const newLives = prev - 1;
                        if (newLives <= 0) {
                            onGameOver(false, score);
                        } else {

                            setTimeout(() => generateNewProblem(), 1000);
                        }
                        return newLives;
                    });
                }
            }
        }
    };


    const handleTouchMove = (e: React.TouchEvent) => {
        if (!gameAreaRef.current) return;

        const rect = gameAreaRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        setPlayerPosition(Math.max(10, Math.min(90, x)));
    };

    return (
        <div
            ref={gameAreaRef}
            className="relative w-full h-full overflow-hidden"
            onTouchMove={handleTouchMove}
            onClick={fireLaser}
        >

            {/* Game info overlay */}
            <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
                <div>
                    <div className="flex items-center space-x-4">
                        <div className="font-bold text-lg">SCORE: {score}</div>
                        <div className="flex items-center">
                            <span className="text-red-400 font-bold text-lg mr-2">LIVES:</span>
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-5 h-5 mx-1 ${i < lives ? 'bg-red-500' : 'bg-gray-700'} rounded-full`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold text-lg mr-4">
                        TIME: {timeLeft}s
                    </div>
                    <div className="text-cyan-400 font-bold text-lg">
                        Q: {questionCount}/{totalQuestions}
                    </div>
                </div>
            </div>

            {/* Math problem display */}
            {mathProblem && (
                <div className="my-4">
                    <h2 className="text-xl font-bold text-center mb-4 ">
                        SOLVE THE EQUATION
                    </h2>
                    <div className="text-2xl font-bold text-center text-white">
                        {mathProblem.equation} = ?
                    </div>
                </div>
            )}

            {/* Enemy ships */}
            {enemyShips.map(enemy => (
                <Ship
                    key={enemy.id}
                    type="enemy"
                    position={enemy.position}
                    value={enemy.value}
                    hit={enemy.hit}
                />
            ))}
            <div
                className="absolute w-2 bg-cyan-400 rounded-full transition-all duration-100"
                style={{
                    left: `${playerPosition}%`,
                    top: '90%',
                    height: '30%',
                    transform: 'translate(-50%, -100%)',
                    boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff',
                }}
            />
            {/* Player ship */}
            <Ship
                type="player"
                position={{ x: playerPosition, y: 90 }}
            />
        </div>
    );
};

export default GameDisplay;