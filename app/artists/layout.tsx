import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elite Tattoo Artists in Bangalore | Aquarius Tattoo Studio',
  description: 'Meet our team of award-winning, certified tattoo artists and piercers in Bangalore. View profiles for Aravind, Aswin, and more, specializing in custom realism, geometric, and fine line designs.',
  openGraph: {
    title: 'Meet Our Elite Tattoo Artists | Aquarius Tattoo Studio',
    description: 'Connect with Bangalore\'s finest tattooists and view their award-winning portfolios.',
    url: 'https://aquarius-tattoo-studio.com/artists',
  }
}

export default function ArtistsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
