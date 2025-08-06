import type { Metadata } from 'next'
// import { Pixelify_Sans } from 'next/font/google'
import './globals.css'
import Crosshair from './components/MouseEffect'

// const pixelFont = Pixelify_Sans({
//     subsets: ['latin'],
//     display: 'swap',
// })

export const metadata: Metadata = {
    title: 'Math Spaceship Game',
    description: 'Retro arcade game with math challenges',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <body
                className={`bg-black text-white`}
            >
                    <Crosshair color='white' />
                    {children}
            </body>
        </html>
    )
}