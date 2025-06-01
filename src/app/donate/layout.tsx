import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Astrakit',
  description: "Support Astrakit's development and help us keep the platform free and open-source",
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 