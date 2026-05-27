'use client'

import Link from 'next/link'
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { usePageTransition } from '@/hooks/usePageTransition'

export interface TransitionButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
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

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      buttonProps.target
    ) {
      return
    }

    event.preventDefault()
    transition(href)
  }

  return (
    <Link
      href={href}
      {...buttonProps}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  )
}
