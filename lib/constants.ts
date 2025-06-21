export type SortFilterItem = {
  title: string
  slug: string
  sortKey: 'RELEVANCE' | 'PRICE'
  reverse: boolean
}

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: 'relevance',
  sortKey: 'RELEVANCE',
  reverse: false,
}

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: 'Price: Low to high',
    slug: 'price-asc',
    sortKey: 'PRICE',
    reverse: false,
  }, // asc
  {
    title: 'Price: High to low',
    slug: 'price-desc',
    sortKey: 'PRICE',
    reverse: true,
  },
]

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart',
}

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden'
export const DEFAULT_OPTION = 'Default Title'

export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2024-10/graphql.json'
