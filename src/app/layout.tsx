import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import { fontSans } from '@/styles/fonts'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Desafio 04 - Comunidade Codelândia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn('min-h-screen font-sans antialiased bg-white text-dark-10',
          fontSans.variable
        )}>
        {children}
      </body>
    </html>
  )
}
