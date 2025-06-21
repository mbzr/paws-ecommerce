import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ProductFilterState {
  sort: string
  setSort: (sort: string) => void
  view: 'grid' | 'list' | 'large'
  setView: (view: 'grid' | 'list' | 'large') => void
  priceRange: [number, number] | null
  setPriceRange: (range: [number, number] | null) => void
}

export const useProductFilterStore = create<ProductFilterState>()(
  persist(
    (set) => ({
      sort: 'latest-desc',
      view: 'grid',
      priceRange: null,
      setSort: (sort) => set({ sort }),
      setView: (view) => set({ view }),
      setPriceRange: (range) => set({ priceRange: range }),
    }),
    {
      name: 'product-filter-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        view: state.view,
      }),
    },
  ),
)
