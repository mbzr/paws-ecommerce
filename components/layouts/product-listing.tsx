'use client'

import { DocumentNode, useApolloClient, useQuery } from '@apollo/client'
import Loading from 'app/search/loading'
import clsx from 'clsx'
import Grid from 'components/grid'
import ProductGrid from 'components/layouts/product-grid'
import Sidebar from 'components/layouts/search/filter/sidebar'
import Sort from 'components/layouts/search/filter/sort'
import { defaultSort, sorting } from 'lib/constants'
import { useProductFilterStore } from 'lib/store/useProductFilterStore'
import { useEffect } from 'react'

interface ProductListingProps {
  type: 'search' | 'collection'
  initialData: any
  gqlQuery: DocumentNode
  variables: Record<string, any>
}

export default function ProductListing({
  type,
  initialData,
  gqlQuery,
  variables,
}: ProductListingProps) {
  const { sort, setSort, view, setView, priceRange, setPriceRange } =
    useProductFilterStore()
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort
  const client = useApolloClient()

  useEffect(() => {
    useProductFilterStore.persist.rehydrate()
  }, [])

  useEffect(() => {
    if (initialData) {
      console.log('writing to cache', initialData)
      const cacheData =
        type === 'collection'
          ? { collection: initialData.collection }
          : { search: initialData.search }

      console.log({ cacheData })
      console.log({ initialData })

      client.writeQuery({
        query: gqlQuery,
        variables: { ...variables, sortKey, reverse },
        data: cacheData,
      })
    }
  }, [])

  const { data, loading, error } = useQuery(gqlQuery, {
    variables: {
      ...variables,
      sortKey,
      reverse,
      minPrice: priceRange?.[0],
      maxPrice: priceRange?.[1],
    },
    fetchPolicy: 'cache-first',
  })

  const resultData =
    type === 'collection'
      ? data?.collection?.products || initialData?.collection?.products
      : data?.search || initialData?.search

  const products = resultData?.edges?.map((edge: any) => edge?.node) || []
  const resultsText = products.length > 1 ? 'results' : 'result'

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        {error && <div>Error loading products.</div>}
        <div className="flex gap-6">
          <Sidebar priceRange={priceRange} setPriceRange={setPriceRange} />
          <div className="w-full">
            <Sort
              view={view}
              setView={setView}
              sort={sort}
              setSort={setSort}
              resultsLength={products.length}
              resultsText={resultsText}
            />
            {loading ? (
              <Loading />
            ) : products.length > 0 ? (
              <Grid
                className={clsx(
                  view === 'grid' &&
                    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
                  view === 'list' && 'grid-cols-1',
                  view === 'large' && 'grid-cols-1 sm:grid-cols-2',
                )}
              >
                <ProductGrid products={products} />
              </Grid>
            ) : (
              <div>No products found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
