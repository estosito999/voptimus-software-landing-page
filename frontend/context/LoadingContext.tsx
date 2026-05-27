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

const MIN_LOADING_DURATION = 550
const HIDE_DURATION = 260
const MAX_LOADING_DURATION = 3500
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
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isHiding, setIsHiding] = useState(false)

  const completePageTransition = useCallback(() => {
    setIsLoading(false)
    setIsHiding(false)
    isNavigating.current = false
  }, [])

  const finishPageTransition = useCallback(() => {
    if (!isNavigating.current) return

    const elapsed = Date.now() - startedAt.current
    const remaining = Math.max(0, MIN_LOADING_DURATION - elapsed)

    clearTimer(hideTimer)
    clearTimer(idleTimer)
    clearTimer(safetyTimer)

    hideTimer.current = setTimeout(() => {
      setIsHiding(true)

      idleTimer.current = setTimeout(() => {
        completePageTransition()
      }, HIDE_DURATION)
    }, remaining)
  }, [completePageTransition])

  const startPageTransition = useCallback((href: string, push: (href: string) => void) => {
    if (isNavigating.current) return

    clearTimer(pushTimer)
    clearTimer(hideTimer)
    clearTimer(idleTimer)
    clearTimer(safetyTimer)

    startedAt.current = Date.now()
    isNavigating.current = true
    setIsHiding(false)
    setIsLoading(true)

    pushTimer.current = setTimeout(() => {
      push(href)
    }, 0)

    safetyTimer.current = setTimeout(() => {
      if (!isNavigating.current) return

      setIsHiding(true)
      idleTimer.current = setTimeout(() => {
        completePageTransition()
      }, HIDE_DURATION)
    }, MAX_LOADING_DURATION)
  }, [completePageTransition])

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
      clearTimer(safetyTimer)
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
