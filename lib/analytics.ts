// Google Analytics utility functions
export const GA_TRACKING_ID = "G-2EJ6JCB9N2"

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined") {
    window.gtag("config", "G-2EJ6JCB9N2", {
      page_location: url,
    })
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
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
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

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
