'use client'

import { HttpLink } from '@apollo/client'
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/client-integration-nextjs'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from 'lib/constants'
import { setVerbosity } from 'ts-invariant'

if (process.env.NODE_ENV === 'development') {
  setVerbosity('debug')
  loadDevMessages()
  loadErrorMessages()
}

function makeClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}${SHOPIFY_GRAPHQL_API_ENDPOINT}`,
      headers: {
        'X-Shopify-Storefront-Access-Token':
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        'Content-Type': 'application/json',
      },
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
    },
  })
}

export default function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
