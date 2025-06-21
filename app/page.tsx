import Hero from 'app/components/hero'
import OurCollections from 'app/components/our-collections'
// import { Carousel } from 'components/carousel'
// import { ThreeItemGrid } from 'components/grid/three-items'
import ScrollingText from 'components/ui/scrolling-text'

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurCollections />
      {/* <ThreeItemGrid /> */}
      {/* <Carousel /> */}
      <ScrollingText />
    </>
  )
}
