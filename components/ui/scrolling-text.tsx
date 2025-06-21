export default function ScrollingText() {
  return (
    <div className="overflow-hidden bg-white text-black py-4 border-t border-gray-200">
      <div className="animate-marquee whitespace-nowrap text-3xl inline-flex gap-8">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index}>
            <span>Free shipping over $99</span>
          </span>
        ))}
      </div>
    </div>
  )
}
