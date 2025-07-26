"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { pageview } from "@/lib/analytics"

function AnalyticsWrapperInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    console.log("Analytics Wrapper - URL changed to:", url); // デバッグ用
    
    // Google Analyticsスクリプトが読み込まれるまで少し待つ
    const timer = setTimeout(() => {
      pageview(url)
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams])

  return null
}

export default function AnalyticsWrapper() {
  return (
    <Suspense fallback={null}>
      <AnalyticsWrapperInner />
    </Suspense>
  )
}
