import type { Metadata } from "next"
import KaramisoLP from "./karamiso-lp"

export const metadata: Metadata = {
  title: "旨辛タンメンKARAMISO｜家庭で作る本格辛味噌ラーメン【会津ブランド館】",
  description:
    "家庭で本格的な旨辛タンメンが楽しめる！濃厚辛味噌スープと中太160g生麺のセット。野菜たっぷりでヘルシー、インスタント感のない本物志向の味。会津ブランド館の人気商品を通販でお取り寄せ。Yahoo!・楽天・Amazonで販売中。",
  keywords:
    "旨辛タンメン,辛味噌ラーメン,本格ラーメン,家庭用ラーメン,会津ブランド館,通販,お取り寄せ,生麺,濃厚スープ,野菜ラーメン,辛いラーメン,味噌ラーメン,福島県,会津若松",
  openGraph: {
    title: "旨辛タンメンKARAMISO｜家庭で仕上げる本格旨辛ラーメン",
    description:
      "濃厚辛味噌スープ×中太160g生麺。ラーメン屋のような一杯をご自宅で。野菜たっぷり、インスタント感のない本格派。先着100商品限り5%OFFクーポン発行中！",
    url: "https://your-domain.com",
    siteName: "会津ブランド館",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-XvDLeLJlxKyKRaaUcrWpu0Boj4NBxQ.jpeg",
        width: 1200,
        height: 630,
        alt: "旨辛タンメンKARAMISO - 豆腐と野菜たっぷりの本格辛味噌ラーメン",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
    title: "旨辛タンメンKARAMISO｜家庭で仕上げる本格旨辛ラーメン",
    description:
      "濃厚辛味噌スープ×中太160g生麺。ラーメン屋のような一杯をご自宅で。野菜たっぷり、インスタント感のない本格派。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-XvDLeLJlxKyKRaaUcrWpu0Boj4NBxQ.jpeg",
        alt: "旨辛タンメンKARAMISO - 豆腐と野菜たっぷりの本格辛味噌ラーメン",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  category: "food",
}

export default function Page() {
  return <KaramisoLP />
}
