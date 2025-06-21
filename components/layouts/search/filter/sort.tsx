import { Bars3Icon, Squares2X2Icon, StopIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { SortDropdown } from 'components/layouts/search/filter/sort-dropdown'

const views: {
  label: string
  slug: 'large' | 'grid' | 'list'
  icon: React.ReactNode
}[] = [
  {
    label: 'Large',
    slug: 'large',
    icon: <StopIcon className="h-6 w-6 fill-current" />,
  },
  {
    label: 'Grid',
    slug: 'grid',
    icon: <Squares2X2Icon className="h-6 w-6 fill-current" />,
  },
  {
    label: 'List',
    slug: 'list',
    icon: <Bars3Icon className="h-6 w-6 fill-current" />,
  },
]

export default function Sort({
  view,
  setView,
  sort,
  setSort,
  resultsLength,
  resultsText,
}: {
  view: string
  sort: string
  setSort: (sort: string) => void
  setView: (view: 'large' | 'grid' | 'list') => void
  resultsLength: number
  resultsText: string
}) {
  const currentView = view
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <span className="text-base text-black">
          {`${resultsLength} ${resultsText}`}
        </span>
      </div>
      <div className="flex items-center gap-5">
        <SortDropdown sort={sort} setSort={setSort} />
        <div className="inline-block h-10 min-h-[1em] w-0.5 self-stretch bg-neutral-100" />
        <ul className="list-none text-right flex gap-3 justify-end">
          {views.map((view) => (
            <li key={view.slug}>
              <button
                onClick={() => setView(view.slug)}
                className={clsx(
                  'h-6 w-6 cursor-pointer hover:text-black/70',
                  view.slug === currentView ? 'text-black' : 'text-black/50',
                )}
              >
                <span className="sr-only">{view.label} view</span>
                {view.icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
