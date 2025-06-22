import '../styles/globals.css'
import type { Metadata } from 'next'
import Background from './components/Background/Background'
import BuyMeCoffee from './components/BuyMeCoffee/BuyMeCoffee'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

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
      <body>
        <Background />
        <Navigation />
        {children}
        <Footer />
        <BuyMeCoffee />
      </body>
    </html>
  )
} 