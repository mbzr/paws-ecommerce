import { ContactForm } from 'app/(main)/pages/contact/_components/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for any questions or inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-black md:text-4xl">
            Contact us
          </h1>
          <p className="mt-4 text-lg text-black/70">
            We're here to help with any questions you may have.
          </p>

          <ContactForm />
        </div>
      </div>
    </>
  )
}
