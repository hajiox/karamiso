import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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
        <meta name="format-detection" content="telephone=no" />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5BZQYZ16WM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5BZQYZ16WM', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* 追加のSEO設定 */}
        <meta name="author" content="会津ブランド館" />
        <meta name="publisher" content="会津ブランド館" />
        <meta name="copyright" content="© 2025 会津ブランド館" />
        <meta name="language" content="Japanese" />
        <meta name="geo.region" content="JP-07" />
        <meta name="geo.placename" content="会津若松市" />
        <meta name="geo.position" content="37.4977777;139.9291543" />
        <meta name="ICBM" content="37.4977777, 139.9291543" />

        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "旨辛タンメンKARAMISO",
              description:
                "家庭で本格的な旨辛タンメンが楽しめる濃厚辛味噌スープと中太160g生麺のセット。野菜たっぷりでヘルシー、インスタント感のない本物志向の味。",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-XvDLeLJlxKyKRaaUcrWpu0Boj4NBxQ.jpeg",
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
                telephone: "0242-25-4141",
                url: "https://your-domain.com",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "2食セット",
                  price: "1350",
                  priceCurrency: "JPY",
                  availability: "https://schema.org/InStock",
                  url: "https://store.shopping.yahoo.co.jp/aizubrandhall/bbddbfc9a5.html",
                  seller: {
                    "@type": "Organization",
                    name: "会津ブランド館",
                  },
                },
                {
                  "@type": "Offer",
                  name: "6食セット",
                  price: "3500",
                  priceCurrency: "JPY",
                  availability: "https://schema.org/InStock",
                  url: "https://item.rakuten.co.jp/aizubrandhall/c/0000000047/",
                  seller: {
                    "@type": "Organization",
                    name: "会津ブランド館",
                  },
                },
                {
                  "@type": "Offer",
                  name: "スープのみ5食セット",
                  price: "1700",
                  priceCurrency: "JPY",
                  availability: "https://schema.org/InStock",
                  url: "https://www.amazon.co.jp/stores/page/496B9028-AB60-44BC-8A3B-84F4707D4D95",
                  seller: {
                    "@type": "Organization",
                    name: "会津ブランド館",
                  },
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              category: "Food & Beverages > Food Items > Noodles",
              keywords: "旨辛タンメン,辛味噌ラーメン,本格ラーメン,家庭用ラーメン,生麺,濃厚スープ",
              nutrition: {
                "@type": "NutritionInformation",
                servingSize: "1食分（麺160g+スープ140g）",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "調理時間",
                  value: "約5分",
                },
                {
                  "@type": "PropertyValue",
                  name: "辛さレベル",
                  value: "中辛〜辛口",
                },
                {
                  "@type": "PropertyValue",
                  name: "保存方法",
                  value: "常温保存",
                },
              ],
            }),
          }}
        />

        {/* パンくずリスト構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "ホーム",
                  item: "https://your-domain.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "旨辛タンメンKARAMISO",
                  item: "https://your-domain.com",
                },
              ],
            }),
          }}
        />

        {/* 組織情報構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "会津ブランド館",
              url: "https://your-domain.com",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%80%90%E9%AB%98%E8%A7%A3%E5%83%8F%E5%BA%A6%E3%80%91%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E6%96%B0%E3%83%AD%E3%82%B4%E3%80%90%E9%BB%92%E3%80%91.jpg-jGJwCa3HfNXU3pXG4DdPG8tGgUUWid.jpeg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "七日町6−15",
                addressLocality: "会津若松市",
                addressRegion: "福島県",
                postalCode: "965-0044",
                addressCountry: "JP",
              },
              telephone: "0242-25-4141",
              openingHours: "Mo-Su 11:00-16:00",
              sameAs: [
                "https://www.facebook.com/aizubrandkan/",
                "https://x.com/Aizu_Brand_Kan",
                "https://www.instagram.com/aizubrandhall/",
                "https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
