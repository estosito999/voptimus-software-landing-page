'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { useLoadingContext } from '@/context/LoadingContext'

export function usePageTransition() {
  const router = useRouter()
  const pathname = usePathname()
  const { startPageTransition } = useLoadingContext()

  const transition = useCallback(
    (path: string) => {
      if (!path || path === '#' || path === pathname) return
      startPageTransition(path, (nextPath) => router.push(nextPath))
    },
    [pathname, router, startPageTransition]
  )

  return { transition }
}
