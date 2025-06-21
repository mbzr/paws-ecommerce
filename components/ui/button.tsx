import { Button as ButtonPrimitive } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  size?: 'md' | 'lg'
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  url?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    size = 'md',
    className,
    variant = 'primary',
    url,
    ...rest
  } = props

  const sizeClass = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  }

  const variantClass = {
    primary: 'bg-brand-primary text-white',
    secondary: 'bg-brand-secondary text-white',
    outline: 'bg-transparent text-brand-primary border border-brand-primary',
  }

  const renderButton = () => {
    return (
      <ButtonPrimitive
        className={clsx(
          'bg-brand-primary text-white px-4 py-2 rounded-full inline-flex items-center justify-center flex-none cursor-pointer',
          sizeClass[size],
          variantClass[variant],
          className,
        )}
        {...rest}
      >
        <span>{children}</span>
      </ButtonPrimitive>
    )
  }

  return url ? <Link href={url}>{renderButton()}</Link> : renderButton()
}
