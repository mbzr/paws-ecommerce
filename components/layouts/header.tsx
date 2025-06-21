import CartModal from 'components/cart/modal'
import { AnnouncementBar } from 'components/layouts/navbar/announcement-bar'
import { MobileNav } from 'components/layouts/navbar/mobile-nav'
import { NavbarLinks } from 'components/layouts/navbar/nav-links'
import { Search, SearchSkeleton } from 'components/layouts/navbar/search'
import { PawsLogo } from 'components/logo'
import { getMenu } from 'lib/shopify'
import Link from 'next/link'
import { Suspense } from 'react'

const { SITE_NAME } = process.env

export const Header: React.FC = async () => {
  const menu = await getMenu('next-js-main-menu')
  const menuItems = menu.map((item) => {
    if (item.path.includes('/search/')) {
      return { ...item, path: item.path.replace('/search/', '/collections/') }
    }
    return item
  })

  return (
    <>
      <AnnouncementBar />
      <nav className="relative flex items-center justify-between py-4">
        <div className="container">
          <div className="block flex-none md:hidden">
            <Suspense fallback={null}>
              <MobileNav menu={menuItems} />
            </Suspense>
          </div>
          <div className="flex w-full items-center">
            <div className="flex w-full md:w-1/3">
              <Link
                href="/"
                prefetch={true}
                className="mr-2 flex flex-col w-full items-center justify-center md:w-auto lg:mr-6"
              >
                <PawsLogo />

                <div className="ml-2 flex-none text-sm text-brand-primary font-heading font-bold uppercase md:hidden lg:block">
                  {SITE_NAME}
                </div>
              </Link>
              <NavbarLinks menu={menuItems} />
            </div>
            <div className="hidden justify-center md:flex md:w-1/3">
              <Suspense fallback={<SearchSkeleton />}>
                <Search />
              </Suspense>
            </div>
            <div className="flex justify-end md:w-1/3">
              <CartModal />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
