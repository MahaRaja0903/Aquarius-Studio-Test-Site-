import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tattoo Trends, Tips & Stories Blog | Aquarius Tattoo Studio',
  description: 'Read the latest articles on tattoo design inspiration, safety standards, piercing trends, and the personal stories behind the ink from our Jayanagar, Bangalore studio.',
  openGraph: {
    title: 'Tattoo & Piercing Blog | Aquarius Tattoo Studio',
    description: 'Tattoo trends, expert tips, safety standards, and stories behind the ink from Bangalore.',
    url: 'https://aquarius-tattoo-studio.com/blog',
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
