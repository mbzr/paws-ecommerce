import React from 'react'
import { FieldError } from 'react-hook-form'

export const FormField = ({
  id,
  label,
  children,
  error,
}: {
  id: string
  label: string
  children: React.ReactNode
  error: FieldError | undefined
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-black mb-1"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </>
  )
}
