import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "format-detection": "telephone=no",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626" />

        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "旨辛タンメンKARAMISO",
              description: "家庭で本格的な旨辛タンメンが楽しめる濃厚辛味噌スープと中太160g生麺のセット",
              brand: {
                "@type": "Brand",
                name: "会津ブランド館",
              },
              manufacturer: {
                "@type": "Organization",
                name: "会津ブランド館",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "七日町6−15",
                  addressLocality: "会津若松市",
                  addressRegion: "福島県",
                  postalCode: "965-0044",
                  addressCountry: "JP",
                },
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "2食セット",
                  price: "1350",
                  priceCurrency: "JPY",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "6食セット",
                  price: "3500",
                  priceCurrency: "JPY",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "スープのみ5食セット",
                  price: "1700",
                  priceCurrency: "JPY",
                  availability: "https://schema.org/InStock",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "150",
              },
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0396%EF%BC%88%E8%A3%9C%E6%AD%A3%EF%BC%89.jpg-RTDBklgP83NoVK78mebOFPqatsZVNA.jpeg",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
