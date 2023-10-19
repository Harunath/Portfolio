import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Harunath eskuri portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <NavBar/> 
        <main className='h-[100%] w-full pt-10 overflow-y-scroll'>
          {children}
        </main>
      </body>
    </html>
  )
}
