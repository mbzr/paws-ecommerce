'use client'

import ProductListing from 'components/layouts/product-listing'
import { getProductsSearchQuery } from 'lib/apollo/queries/search'

export default function SearchResults({
  query,
  initialServerData,
}: {
  query: string
  initialServerData: any
}) {
  return (
    <ProductListing
      type="search"
      gqlQuery={getProductsSearchQuery}
      variables={{ query }}
      initialData={initialServerData}
    />
  )
}
