import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Astrakit',
    default: 'Astrakit - Discover The Future Of Chatting',
  },
  description: 'Astrakit is a free and open-source chat app designed by nerds. Enjoy secure, seamless communication with powerful features and complete transparency.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 