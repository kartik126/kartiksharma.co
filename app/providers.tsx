'use client'

import { PostHogProvider } from 'posthog-js/react'
import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  console.log('Initializing PostHog...')
  console.log('PostHog Key:', process.env.NEXT_PUBLIC_POSTHOG_KEY)
  console.log('PostHog Host:', process.env.NEXT_PUBLIC_POSTHOG_HOST)

  try {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      loaded: (posthog) => {
        console.log('PostHog loaded successfully')
        if (process.env.NODE_ENV === 'development') {
          posthog.debug()
          console.log('PostHog debug mode enabled')
        }
        // Start recording after initialization
        posthog.startSessionRecording()
      },
      // Enable session recording
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      // Session recording settings
      session_recording: {
        maskAllInputs: true,
        maskInputOptions: {
          password: true,
          email: true,
          tel: true,
          number: true,
          text: true,
        },
        recordCrossOriginIframes: true
      },
      // Advanced settings
      persistence: 'localStorage',
      disable_session_recording: false,
      enable_recording_console_log: true,
      // Opt out of tracking for development
      opt_out_capturing_by_default: false,
      // Add more debugging
      debug: true,
      // Bootstrap settings
      bootstrap: {
        distinctID: 'anonymous',
        isIdentifiedID: false,
        featureFlags: {},
      },
      // Session settings
      persistence_name: 'ph_' + process.env.NEXT_PUBLIC_POSTHOG_KEY,
      session_idle_timeout_seconds: 30 * 60 // 30 minutes
    })

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('Page visible, starting recording')
        posthog.startSessionRecording()
      }
    })

    // Add event listener for page focus
    window.addEventListener('focus', () => {
      console.log('Page focused, starting recording')
      posthog.startSessionRecording()
    })
  } catch (error) {
    console.error('Error initializing PostHog:', error)
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  )
} 