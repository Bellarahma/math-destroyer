"'use client';"
import Link from 'next/link';
import Button from '@/components/Button';
import LevelCard from '@/components/LevelCard';
import Particles from '@/components/Background';

export default function LevelSelector() {
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
                className='bg-gradient-to-t from-gray-900 to-black'
            />
            <div className="mx-auto text-center absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-12 mt-8">
                    SELECT DIFFICULTY
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <LevelCard
                        level="easy"
                        title="Cadet Training"
                        description="Addition and Subtraction"
                        color="from-green-500 to-emerald-600"
                    />
                    <LevelCard
                        level="medium"
                        title="Officer Mission"
                        description="Multiplication and Division"
                        color="from-yellow-500 to-amber-600"
                    />
                    <LevelCard
                        level="hard"
                        title="Elite Challenge"
                        description="Fractions and Percentages"
                        color="from-red-500 to-orange-600"
                    />
                </div>

                <div className="mt-8">
                    <Link href="/">
                        <Button variant="secondary">BACK TO HOME</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}