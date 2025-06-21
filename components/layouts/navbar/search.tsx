'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Input } from 'components/ui/input'
import Form from 'next/form'
import { useSearchParams } from 'next/navigation'

export const Search: React.FC = () => {
  const searchParams = useSearchParams()

  return (
    <Form
      action="/search"
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <Input
        key={searchParams?.get('q')}
        type="text"
        name="q"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </Form>
  )
}

export const SearchSkeleton: React.FC = () => {
  return (
    <form className="relative w-max-[550px] w-full lg:w-80 xl:w-full">
      <Input placeholder="Search for products..." />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  )
}
