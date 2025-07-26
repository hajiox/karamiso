// Google Analytics utility functions
export const GA_TRACKING_ID = "G-5BZQYZ16WM"

// gtag関数の型定義を強化
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("config", GA_TRACKING_ID, {
        page_location: window.location.origin + url,
        page_path: url,
        page_title: document.title,
      })
    } catch (error) {
      console.error("Google Analytics pageview error:", error)
    }
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    } catch (error) {
      console.error("Google Analytics event error:", error)
    }
  }
}

// E-commerce tracking
export const trackPurchaseClick = (platform: string, product: string) => {
  event({
    action: "click",
    category: "purchase",
    label: `${platform}_${product}`,
  })
}

// Custom events for the ramen landing page
export const trackCouponView = () => {
  event({
    action: "view",
    category: "coupon",
    label: "5_percent_off",
  })
}

export const trackRecipeView = () => {
  event({
    action: "view",
    category: "recipe",
    label: "cooking_instructions",
  })
}

export const trackFAQExpand = (question: string) => {
  event({
    action: "expand",
    category: "faq",
    label: question,
  })
}

// Google Analyticsが読み込まれているかチェック
export const isGoogleAnalyticsLoaded = (): boolean => {
  return typeof window !== "undefined" && typeof window.gtag === "function"
}
