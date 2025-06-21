import { gql } from '@apollo/client'
import collectionFragment from 'lib/apollo/fragments/collection'
import productFragment from 'lib/shopify/fragments/product'

export const getProductsSearchQuery = gql`
  query getProductSearch(
    $query: String!
    $sortKey: SearchSortKeys
    $reverse: Boolean
    $minPrice: Float
    $maxPrice: Float
  ) {
    search(
      query: $query
      first: 10
      types: [PRODUCT]
      sortKey: $sortKey
      reverse: $reverse
      productFilters: { price: { min: $minPrice, max: $maxPrice } }
    ) {
      edges {
        cursor
        node {
          ...product
        }
      }
      totalCount
    }
  }

  ${productFragment}
`

export const getCollectionSearchQuery = gql`
  query getCollectionSearch(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $minPrice: Float
    $maxPrice: Float
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      ...collection
      products(
        first: 10
        sortKey: $sortKey
        reverse: $reverse
        filters: { price: { min: $minPrice, max: $maxPrice } }
      ) {
        edges {
          cursor
          node {
            ...product
          }
        }
      }
    }
  }
  ${collectionFragment}
  ${productFragment}
`
