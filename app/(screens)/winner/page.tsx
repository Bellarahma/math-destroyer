"use client";
import Link from 'next/link';
import Button from '@/components/Button';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { playVictorySound } from '@/assets/sounds';
import Particles from '@/components/Background';

const difficultyNames = {
    easy: 'Cadet Training',
    medium: 'Officer Mission',
    hard: 'Elite Challenge'
};

export default function WinnerScreen() {
    const searchParams = useSearchParams();
    const score = searchParams.get('score') || '0';
    const difficulty = searchParams.get('difficulty') as keyof typeof difficultyNames || 'easy';

    useEffect(() => {
        playVictorySound();

        // Set high score in local storage
        const highScoreKey = `math-spaceship-highscore-${difficulty}`;
        const currentHighScore = parseInt(localStorage.getItem(highScoreKey) || '0', 10);
        if (parseInt(score, 10) > currentHighScore) {
            localStorage.setItem(highScoreKey, score);
        }
    }, [score, difficulty]);

    return (
        <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.07}
                particleBaseSize={100}
                alphaParticles={false}
                disableRotation={false}
                className='bg-gradient-to-b from-black to-purple-900 '
            />

            <div className="mx-auto text-center absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                    MISSION ACCOMPLISHED!
                </h1>

                <div className="mb-10">
                    <div className="text-2xl mb-2 text-cyan-300">You completed the</div>
                    <div className="text-4xl font-bold text-yellow-300 mb-6">{difficultyNames[difficulty]}</div>

                    <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 p-1 rounded-full">
                        <div className="bg-black rounded-full px-8 py-4">
                            <div className="text-5xl font-bold text-yellow-300">{score}</div>
                            <div className="text-lg text-gray-300">POINTS</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <Link href={`/game?level=${difficulty}`}>
                        <Button variant="primary">PLAY AGAIN</Button>
                    </Link>
                    <Link href="/level-selector">
                        <Button variant="secondary">NEW MISSION</Button>
                    </Link>
                    <Link href="/">
                        <Button>MAIN MENU</Button>
                    </Link>
                </div>

                <div className="mt-10 p-4 bg-black bg-opacity-50 rounded-xl">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">HIGH SCORES</h3>
                    <div className="flex justify-center gap-8">
                        {Object.entries(difficultyNames).map(([diff, name]) => {
                            const highScore = parseInt(localStorage.getItem(`math-spaceship-highscore-${diff}`) || '0', 10);
                            return (
                                <div key={diff} className="text-center">
                                    <div className="text-sm text-gray-400">{name}</div>
                                    <div className="text-2xl font-bold text-cyan-300">{highScore}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}