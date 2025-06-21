import imageFragment from 'lib/shopify/fragments/image'
import seoFragment from 'lib/shopify/fragments/seo'

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    id
    handle
    title
    description
    image {
      ...image
    }
    seo {
      ...seo
    }
  }
  ${imageFragment}
  ${seoFragment}
`

export default collectionFragment
