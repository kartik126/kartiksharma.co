'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import posthog from 'posthog-js'
import { useTheme } from 'next-themes'

function PostHogPageViewContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname
      if (searchParams?.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        $current_url: url
      })
    }
  }, [pathname, searchParams])

  return null
}

function ThemeTrackerContent() {
  const { theme } = useTheme()

  useEffect(() => {
    if (theme) {
      posthog.capture('theme_changed', { theme })
    }
  }, [theme])

  return null
}

export function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageViewContent />
    </Suspense>
  )
}

export function ThemeTracker() {
  return (
    <Suspense fallback={null}>
      <ThemeTrackerContent />
    </Suspense>
  )
} 