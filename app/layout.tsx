import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import posthog from 'posthog-js'

import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./providers"
import { PostHogPageView, ThemeTracker } from "./posthog-trackers"


const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"], // Using lighter weights
})

export const metadata = {
  title: "Kartik Sharma - Fullstack Developer",
  description: "Portfolio website of Kartik Sharma, a fullstack developer specializing in modern web applications.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Nav />
        <Providers>
          <PostHogPageView />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeTracker />
            {children}
          </ThemeProvider>
        </Providers>
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  )
}

import './globals.css'
import Nav from "@/components/nav"
import WhatsAppButton from "@/components/WhatsAppButton"

