import { getCollections } from 'lib/shopify'
import Link from 'next/dist/client/link'
import Image from 'next/image'

export default async function OurCollections() {
  const collections = await getCollections()

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6 font-heading">
          Shop Our Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collections.map((collection) => (
            <div key={collection.handle} className="flex items-stretch">
              <Link
                href={`/collections/${collection.handle}`}
                className="relative block w-full h-full text-center group"
              >
                <div className="pt-[150%] relative overflow-hidden rounded-lg">
                  <Image
                    src={collection.image?.url}
                    alt={collection.title}
                    width={collection.image?.width}
                    height={collection.image?.height}
                    className="w-full h-full object-cover absolute top-0 left-0 block object-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">{collection.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
