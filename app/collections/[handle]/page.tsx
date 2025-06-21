import CollectionProducts from 'components/layouts/search/collection-products'
import ApolloWrapper from 'lib/apollo/apollo-wrapper'
import { getClient } from 'lib/apollo/client-server'
import { getCollectionSearchQuery } from 'lib/apollo/queries/search'
import { defaultSort, sorting } from 'lib/constants'
import Image from 'next/image'

export const metadata = {
  title: 'Collections',
  description: 'Search for products in the collection.',
}

export const dynamic = 'force-dynamic'

export default async function CollectionPage(props: {
  params: Promise<{ [key: string]: string | string[] | undefined }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const { sort, minPrice, maxPrice } = searchParams as {
    [key: string]: string
  }

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort

  const { data } = await getClient().query({
    query: getCollectionSearchQuery,
    variables: {
      handle: params.handle,
      sortKey,
      reverse,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
    },
  })

  return (
    <ApolloWrapper>
      {/* Hero with image and title */}
      <div className="relative h-[400px]">
        <h1 className="text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          {data.collection.title}
        </h1>
        {data.collection.image && (
          <Image
            src={data.collection.image.url}
            alt={data.collection.image.altText ?? 'Collection Image'}
            width={data.collection.image.width}
            height={data.collection.image.height}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Products */}
      <CollectionProducts
        handle={params.handle as string}
        initialServerData={data}
      />
    </ApolloWrapper>
  )
}
