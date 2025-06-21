import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/client-integration-nextjs'
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from 'lib/constants'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}${SHOPIFY_GRAPHQL_API_ENDPOINT}`,
      headers: {
        'X-Shopify-Storefront-Access-Token':
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        'Content-Type': 'application/json',
      },
    }),
  })
})
