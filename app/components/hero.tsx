import { Button } from 'components/ui/button'

export default function Hero() {
  return (
    <section className="relative">
      <div className="">
        <picture>
          <source
            srcSet="https://cdn.shopify.com/s/files/1/0941/7097/2233/files/hp-hero--desktop.jpg?v=1750470087"
            media="(min-width: 768px)"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0941/7097/2233/files/hp-hero--mobile.jpg?v=1750470086"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Welcome to PAWS
          </h1>
          <Button size="lg" url="/collections/summer-collection">
            Summer Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
