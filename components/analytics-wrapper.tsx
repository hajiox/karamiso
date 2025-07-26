"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { pageview } from "@/lib/analytics"

function AnalyticsWrapperInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    pageview(url)
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
