'use client';

import { Suspense } from 'react';
import Particles from '@/components/Background';
import GameContent from './Winner';

export default function WinnerScreen() {
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
            <Suspense fallback={<div className="text-white"></div>}>
                <GameContent />
            </Suspense>
        </div>
    );
}
