"use client"
import Link from 'next/link';
import Button from '@/components/Button';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { playExplosionSound } from '@/assets/sounds';
import Particles from '@/components/Background';

const difficultyNames = {
    easy: 'Cadet Training',
    medium: 'Officer Mission',
    hard: 'Elite Challenge'
};

export default function LoserScreen() {
    const searchParams = useSearchParams();
    const score = searchParams.get('score') || '0';
    const difficulty = searchParams.get('difficulty') as keyof typeof difficultyNames || 'easy';

    useEffect(() => {
        playExplosionSound();
    }, []);

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
                className='bg-gradient-to-b from-black to-red-900'
            />
            <div className="mx-auto text-center absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                    MISSION FAILED!
                </h1>

                <div className="mb-10">
                    <div className="text-2xl mb-2 text-gray-300">You were defeated on the</div>
                    <div className="text-4xl font-bold text-red-400 mb-6">{difficultyNames[difficulty]}</div>

                    <div className="inline-block bg-gradient-to-r from-red-500 to-red-700 p-1 rounded-full">
                        <div className="bg-black rounded-full px-8 py-4">
                            <div className="text-5xl font-bold text-red-400">{score}</div>
                            <div className="text-lg text-gray-300">POINTS</div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 p-4 bg-black bg-opacity-50 rounded-xl max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-yellow-300 mb-3">TRAINING TIPS</h3>
                    <ul className="text-left text-gray-300 space-y-2">
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">►</span>
                            Practice basic math operations daily
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">►</span>
                            Focus on accuracy before speed
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">►</span>
                            Use keyboard arrows for precise movement
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">►</span>
                            Start with easier levels to build confidence
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href={`/game?level=${difficulty}`}>
                        <Button variant="danger">TRY AGAIN</Button>
                    </Link>
                    <Link href="/level-selector">
                        <Button variant="secondary">NEW MISSION</Button>
                    </Link>
                    <Link href="/">
                        <Button>MAIN MENU</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}