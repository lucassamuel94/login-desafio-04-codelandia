import { Lexend_Deca as FontHeading, Inter as FontSans } from 'next/font/google'

export const fontSans = FontSans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
})

export const fontHeading = FontHeading({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
})