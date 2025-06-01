import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Tools',
  description: 'Powerful tools for content creators using Astrakit',
}

export default function CreatorToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 