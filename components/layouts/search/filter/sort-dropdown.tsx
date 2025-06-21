'use client'

import { Field, Label, Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { sorting } from 'lib/constants'
import { createUrl } from 'lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export const SortDropdown = ({
  sort,
  setSort,
}: {
  sort: string
  setSort: (sort: string) => void
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [localSort, setLocalSort] = useState(searchParams.get('sort') || sort)

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentSort = searchParams.get('sort')
    const newSort = e.target.value

    setLocalSort(newSort)

    if (currentSort !== newSort) {
      setSort(newSort)
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.set('sort', newSort)

      const url = createUrl(pathname, newSearchParams)
      window.history.replaceState(null, '', url)
    }
  }

  return (
    <div className="w-full max-w-xs">
      <Field>
        <Label className="text-sm/6 font-medium text-black mb-3 sr-only">
          Sort by
        </Label>
        <div className="relative">
          <Select
            className={clsx(
              'block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-black',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black',
            )}
            data-testid="sort-dropdown"
            onChange={handleSortChange}
            value={localSort}
          >
            {sorting.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.title}
              </option>
            ))}
          </Select>
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  )
}
