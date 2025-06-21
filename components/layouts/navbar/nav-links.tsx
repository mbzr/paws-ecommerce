import { Menu } from 'lib/shopify/types'
import Link from 'next/link'

export const NavbarLinks: React.FC<{ menu: Menu[] }> = ({ menu }) => {
  return menu.length ? (
    <ul className="hidden gap-6 text-sm md:flex md:items-center ml-4">
      {menu.map((item: Menu) => (
        <li key={item.title}>
          <Link
            href={item.path}
            prefetch={true}
            className="text-black text-lg underline-offset-4 hover:text-black/70"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  ) : null
}
