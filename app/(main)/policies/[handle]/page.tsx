import type { Metadata } from 'next'

import { PageContent } from 'components/page-content'
import { getPage } from 'lib/shopify'
import { notFound } from 'next/navigation'

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>
}): Promise<Metadata> {
  const params = await props.params
  const page = await getPage(params.handle)

  if (!page) return notFound()

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article',
    },
  }
}

export default async function Page(props: {
  params: Promise<{ handle: string }>
}) {
  const params = await props.params
  const page = await getPage(params.handle)

  if (!page) return notFound()

  return (
    <PageContent
      page={page}
      showContainer={true}
      proseClassName="mb-8 max-w-none"
    />
  )
}
