import Prose from 'components/prose'

interface PageContentProps {
  page: {
    title: string
    body: string
    updatedAt: string
  }
  showContainer?: boolean
  showLastUpdated?: boolean
  proseClassName?: string
}

export const PageContent: React.FC<PageContentProps> = ({
  page,
  showContainer = true,
  showLastUpdated = false,
  proseClassName = 'mb-8',
}) => {
  const content = (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className={proseClassName} html={page.body} />
      {showLastUpdated && (
        <p className="text-sm italic">
          {`This document was last updated on ${new Intl.DateTimeFormat(
            undefined,
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          ).format(new Date(page.updatedAt))}.`}
        </p>
      )}
    </>
  )

  if (showContainer) {
    return <div className="container">{content}</div>
  }

  return content
}
