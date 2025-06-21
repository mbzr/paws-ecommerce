import SearchResults from 'components/layouts/search/search-results'
import ApolloWrapper from 'lib/apollo/apollo-wrapper'
import { getClient } from 'lib/apollo/client-server'
import { getProductsSearchQuery } from 'lib/apollo/queries/search'
import { defaultSort, sorting } from 'lib/constants'

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.',
}

export const dynamic = 'force-dynamic'

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const {
    q: query,
    sort,
    minPrice,
    maxPrice,
  } = searchParams as {
    [key: string]: string
  }

  if (!query) {
    return (
      <div className="container">
        <div className="flex justify-center items-center py-12">
          <h1 className="text-2xl font-bold">Please enter a search term.</h1>
        </div>
      </div>
    )
  }

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort

  const { data } = await getClient().query({
    query: getProductsSearchQuery,
    variables: {
      query,
      sortKey,
      reverse,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
    },
  })

  return (
    <ApolloWrapper>
      <SearchResults query={query} initialServerData={data} />
    </ApolloWrapper>
  )
}
