import PriceRangeFilter from './price-range'

export default function Sidebar({ priceRange, setPriceRange }: any) {
  return (
    <div className="flex-1/4">
      <PriceRangeFilter priceRange={priceRange} setPriceRange={setPriceRange} />
    </div>
  )
}
