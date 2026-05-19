'use client'

import { LoadingProvider, useLoadingContext } from '@/context/LoadingContext'

type Phase = 'idle' | 'animating' | 'hiding'

export const TransitionProvider = LoadingProvider

export function useTransitionContext() {
  const { isLoading, isHiding, startPageTransition, finishPageTransition } = useLoadingContext()
  const phase: Phase = isHiding ? 'hiding' : isLoading ? 'animating' : 'idle'

  return {
    phase,
    startTransition: startPageTransition,
    onNewPageReady: finishPageTransition,
  }
}
