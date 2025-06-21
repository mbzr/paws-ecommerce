'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import * as Slider from '@radix-ui/react-slider'
import { createUrl } from 'lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function PriceRangeFilter({ priceRange, setPriceRange }: any) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchParamPriceRange = [
    searchParams.get('minPrice'),
    searchParams.get('maxPrice'),
  ]
  const [localRange, setLocalRange] = useState(
    searchParamPriceRange
      ? [
          parseFloat(searchParamPriceRange?.[0] || '0'),
          parseFloat(searchParamPriceRange?.[1] || '1000'),
        ]
      : priceRange,
  )

  return (
    <div className="w-full py-4">
      <div className="w-full">
        <Disclosure as="div" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-base font-medium text-black group-data-hover:text-black/80">
              Price
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-hover:fill-black/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
            <div className="mb-8">
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                value={localRange}
                onValueChange={setLocalRange}
                onValueCommit={(newVals) => {
                  if (!newVals) return
                  setPriceRange(newVals as [number, number])

                  const newSearchParams = new URLSearchParams(
                    searchParams.toString(),
                  )
                  newSearchParams.set('minPrice', newVals[0]?.toString() || '')
                  newSearchParams.set('maxPrice', newVals[1]?.toString() || '')
                  const url = createUrl(pathname, newSearchParams)
                  window.history.replaceState(null, '', url)
                }}
                min={0}
                max={1000}
                step={1}
                aria-label="Price range filter"
              >
                <Slider.Track className="bg-gray-300 relative grow rounded-full h-1.5">
                  <Slider.Range className="absolute bg-brand-primary rounded-full h-full" />
                </Slider.Track>

                <Slider.Thumb className="block w-5 h-5 bg-brand-primary shadow-lg rounded-full border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-150 ease-in-out hover:scale-110" />
                <Slider.Thumb className="block w-5 h-5 bg-brand-primary shadow-lg rounded-full border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-150 ease-in-out hover:scale-110" />
              </Slider.Root>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  )
}
