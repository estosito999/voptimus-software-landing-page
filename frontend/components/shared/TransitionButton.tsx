'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { usePageTransition } from '@/hooks/usePageTransition'

export interface TransitionButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  href: string
  children: ReactNode
  className?: string
}

export default function TransitionButton({
  href,
  children,
  className,
  onClick,
  ...buttonProps
}: TransitionButtonProps) {
  const { transition } = usePageTransition()

  return (
    <button
      {...buttonProps}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) transition(href)
      }}
      className={className}
      type="button"
    >
      {children}
    </button>
  )
}
