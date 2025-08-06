'use client';

import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    variant = 'primary',
    ...props
}: ButtonProps) {
    const baseClasses =
        'px-5 py-2 text-xl font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95';

    const variantClasses = {
        primary:
            'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-b-4 border-blue-700 hover:from-cyan-600 hover:to-blue-700',
        secondary:
            'bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-b-4 border-indigo-700 hover:from-purple-600 hover:to-indigo-700',
        danger:
            'bg-gradient-to-r from-red-500 to-orange-600 text-white border-b-4 border-orange-700 hover:from-red-600 hover:to-orange-700',
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
            {children}
        </button>
    );
}
