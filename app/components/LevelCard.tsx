import Link from 'next/link';

interface LevelCardProps {
    level: string;
    title: string;
    description: string;
    color: string;
}

const LevelCard: React.FC<LevelCardProps> = ({
    level,
    title,
    description,
    color
}) => {
    return (
        <div className={`bg-gradient-to-br ${color} rounded-xl p-1 shadow-xl transform transition-transform hover:scale-105`}>
            <div className="bg-gray-900 rounded-xl p-6 h-full">
                <div className="text-center mb-6">
                    <div className="inline-block p-3 rounded-full bg-gray-800 mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                            <span className="text-2xl font-bold">
                                {level === 'easy' ? 'E' : level === 'medium' ? 'M' : 'H'}
                            </span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-400">{description}</p>
                </div>

                <Link href={`/game?level=${level}`}>
                    <button className={`w-full py-3 rounded-lg font-bold bg-gradient-to-r ${color} hover:opacity-90 transition-opacity`}>
                        SELECT
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LevelCard;