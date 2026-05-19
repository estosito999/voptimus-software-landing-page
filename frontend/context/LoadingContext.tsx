'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from 'react'
import { usePathname } from 'next/navigation'

const MIN_LOADING_DURATION = 1500
const HIDE_DURATION = 400
type TimerRef = MutableRefObject<ReturnType<typeof setTimeout> | null>

function clearTimer(timer: TimerRef) {
  if (timer.current) {
    clearTimeout(timer.current)
    timer.current = null
  }
}

interface LoadingContextValue {
  isLoading: boolean
  isHiding: boolean
  startPageTransition: (href: string, push: (href: string) => void) => void
  finishPageTransition: () => void
}

const LoadingContext = createContext<LoadingContextValue | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const startedAt = useRef(0)
  const isNavigating = useRef(false)
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isHiding, setIsHiding] = useState(false)

  const finishPageTransition = useCallback(() => {
    if (!isNavigating.current) return

    const elapsed = Date.now() - startedAt.current
    const remaining = Math.max(0, MIN_LOADING_DURATION - elapsed)

    clearTimer(hideTimer)
    clearTimer(idleTimer)

    hideTimer.current = setTimeout(() => {
      setIsHiding(true)

      idleTimer.current = setTimeout(() => {
        setIsLoading(false)
        setIsHiding(false)
        isNavigating.current = false
      }, HIDE_DURATION)
    }, remaining)
  }, [])

  const startPageTransition = useCallback((href: string, push: (href: string) => void) => {
    if (isNavigating.current) return

    clearTimer(pushTimer)
    clearTimer(hideTimer)
    clearTimer(idleTimer)

    startedAt.current = Date.now()
    isNavigating.current = true
    setIsHiding(false)
    setIsLoading(true)

    pushTimer.current = setTimeout(() => {
      push(href)
    }, MIN_LOADING_DURATION)
  }, [])

  useEffect(() => {
    if (pathname === previousPathname.current) return

    previousPathname.current = pathname
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        finishPageTransition()
      })
    })
  }, [finishPageTransition, pathname])

  useEffect(() => {
    return () => {
      clearTimer(pushTimer)
      clearTimer(hideTimer)
      clearTimer(idleTimer)
    }
  }, [])

  return (
    <LoadingContext.Provider
      value={{ isLoading, isHiding, startPageTransition, finishPageTransition }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoadingContext() {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoadingContext must be used within LoadingProvider')
  }

  return context
}
