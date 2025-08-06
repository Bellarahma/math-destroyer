'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import GameDisplay from '@/components/GameDisplay';
import Button from '@/components/Button';
import { playBackgroundMusic, playVictorySound } from '@/assets/sounds';
import Particles from '@/components/Background';

export default function GameScreen() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const difficulty = searchParams.get('level') as 'easy' | 'medium' | 'hard' || 'easy';
    const [gameActive, setGameActive] = useState(true);

    useEffect(() => {
        playBackgroundMusic();
        return () => {
            const bgMusic = document.getElementById('bg-music') as HTMLAudioElement;
            if (bgMusic) bgMusic.pause();
        };
    }, []);

    const handleGameOver = (win: boolean, score: number) => {
        setGameActive(false);

        if (win) {
            playVictorySound();
            setTimeout(() => {
                router.push(`/winner?score=${score}&difficulty=${difficulty}`);
            }, 2000);
        } else {
            setTimeout(() => {
                router.push(`/loser?score=${score}&difficulty=${difficulty}`);
            }, 2000);
        }
    };

    return (
        <div className="w-screen h-screen overflow-hidden">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.07}
                particleBaseSize={100}
                alphaParticles={false}
                disableRotation={false}
                className='bg-gradient-to-b from-gray-900 to-black'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
                {gameActive ? (
                    <GameDisplay
                        difficulty={difficulty}
                        onGameOver={handleGameOver}
                    />
                ) : (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-20">
                        <div className="text-4xl font-bold mb-8 animate-pulse">
                            {difficulty === 'easy' ? 'Calculating Your Score' :
                                difficulty === 'medium' ? 'Checking Your Performance' :
                                    'Evaluating Your Skills'}
                        </div>
                        <div className="spinner">
                            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    </div>
                )}

                <div className="absolute bottom-4 left-4 z-10">
                    <Button
                        variant="secondary"
                        onClick={() => router.push('/')}
                    >
                        QUIT MISSION
                    </Button>
                </div>
            </div>

        </div>
    );
}