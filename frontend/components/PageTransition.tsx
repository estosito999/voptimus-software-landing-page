'use client'

import { useLoadingContext } from '@/context/LoadingContext'
import GlobalLoader from '@/components/shared/GlobalLoader'

export default function PageTransition() {
  const { isLoading, isHiding } = useLoadingContext()

  return <GlobalLoader active={isLoading} phase={isHiding ? 'hiding' : 'visible'} />
}
