import { Suspense } from 'react'

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  )
}
