import { Input as ButtonPrimitive, InputProps } from '@headlessui/react'

export const Input = (props: InputProps) => {
  return (
    <ButtonPrimitive
      className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
      {...props}
    />
  )
}
