import React from 'react';

interface ShipProps {
    type: 'player' | 'enemy';
    position: { x: number; y: number };
    value?: number;
    hit?: boolean;
}

const Ship: React.FC<ShipProps> = ({ type, position, value, hit }) => {
    return (
        <div
            className={`absolute transition-transform duration-100 ${hit ? 'explosion' : ''}`}
            style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: `translate(-50%, -50%) ${type === 'enemy' ? '' : ''}`,
                width: type === 'player' ? '80px' : '80px',
                height: type === 'player' ? '80px' : '80px',
            }}
        >
            {hit ? (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full opacity-70"></div>
                </div>
            ) : (
                <>
                    <div className={`w-full h-full bg-center bg-no-repeat bg-contain ${type === 'player' ? 'ship-pulse' : 'enemy-pulse'}`}
                        style={{
                            backgroundImage: `url('/images/${type}-ship.png')`
                        }}
                    />
                    {type === 'enemy' && value !== undefined && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-10 h-10 flex items-center justify-center text-fuchsia-100 font-bold text-lg">
                            {value}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Ship;