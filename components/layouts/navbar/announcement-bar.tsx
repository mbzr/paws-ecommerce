import { Social } from 'components/ui/social'

export const AnnouncementBar = () => {
  return (
    <div className="bg-brand-primary text-white">
      <div className="container py-2 flex flex-col md:flex-row gap-2 justify-between items-center">
        <div className="text-sm">FREE SHIPPING ORDERS OVER $99</div>

        <Social />
      </div>
    </div>
  )
}
