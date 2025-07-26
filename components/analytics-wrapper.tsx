"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { pageview, isGoogleAnalyticsLoaded } from "@/lib/analytics"

export default function AnalyticsWrapper() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Google Analyticsが読み込まれるまで待機
    const trackPageview = () => {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      pageview(url)
    }

    if (isGoogleAnalyticsLoaded()) {
      trackPageview()
    } else {
      // Google Analyticsが読み込まれるのを待つ
      const checkInterval = setInterval(() => {
        if (isGoogleAnalyticsLoaded()) {
          clearInterval(checkInterval)
          trackPageview()
        }
      }, 100)

      // 5秒後にタイムアウト
      const timeout = setTimeout(() => {
        clearInterval(checkInterval)
        console.warn("Google Analytics failed to load within 5 seconds")
      }, 5000)

      return () => {
        clearInterval(checkInterval)
        clearTimeout(timeout)
      }
    }
  }, [pathname, searchParams])

  return null
}
