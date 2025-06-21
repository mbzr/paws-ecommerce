'use client'

import ProductListing from 'components/layouts/product-listing'
import { getCollectionSearchQuery } from 'lib/apollo/queries/search'

export default function CollectionProducts({
  handle,
  initialServerData,
}: {
  handle: string
  initialServerData: any
}) {
  return (
    <ProductListing
      type="collection"
      gqlQuery={getCollectionSearchQuery}
      variables={{ handle }}
      initialData={initialServerData}
    />
  )
}
