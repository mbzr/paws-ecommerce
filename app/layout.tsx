import { CartProvider } from 'components/cart/cart-context'
import { Footer } from 'components/layouts/footer'
import { Header } from 'components/layouts/header'
import { WelcomeToast } from 'components/welcome-toast'
import { getCart } from 'lib/shopify'
import { baseUrl } from 'lib/utils'
import { Lato, Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

const { SITE_NAME } = process.env

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart()

  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="bg-white text-black">
        <CartProvider cartPromise={cart}>
          <Header />
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
