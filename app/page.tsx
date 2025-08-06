'use client';
import Link from 'next/link';
import styles from '@/styles/HomeScreen.module.css';
import Button from '@/components/Button';
import { useEffect } from 'react';
import { playBackgroundMusic } from '@/assets/sounds';
import Particles from './components/Background';

export default function Home() {
    useEffect(() => {
        playBackgroundMusic();
        return () => {
            const bgMusic = document.getElementById('bg-music') as HTMLAudioElement;
            if (bgMusic) bgMusic.pause();
        };
    }, []);

    return (
        <div className={styles.container}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.07}
                particleBaseSize={50}
                alphaParticles={false}
                disableRotation={false}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    MATH SPACESHIP
                </h1>

                <div className="mb-12">
                    <div className="pixel-animation inline-block">
                        <Link href="/level-selector">
                            <Button>START MISSION</Button>
                        </Link>
                    </div>
                </div>

                <div className="max-w-2xl text-center px-4">
                    <p className="text-xl mb-4 text-cyan-300">
                        Defend the galaxy by solving math problems!
                    </p>
                    <p className="text-lg text-gray-300">
                        Use ← → or A D to move and MOUSE BUTTON to shoot the correct answer
                    </p>
                </div>
            </div>

            <div className={styles.spaceships}>
                <div className={`${styles.ship} ${styles.ship1}`}></div>
                <div className={`${styles.ship} ${styles.ship2}`}></div>
                <div className={`${styles.ship} ${styles.ship3}`}></div>
            </div>

            <audio id="bg-music" loop>
                <source src="/sounds/background.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}