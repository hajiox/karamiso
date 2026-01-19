"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"
import SharedLayout from "@/components/shared-layout"
import Link from "next/link"

// Image URLs
const IMAGES = {
  hero: "/images/hero-ramen.jpg",
  product2set: "/images/product-2set.jpg",
  product6set: "/images/product-6set.jpg",
  productSoup5: "/images/product-soup5.jpg",
  soupPackage: "/images/soup-package.jpg",
  noodles: "/images/noodles.jpg",
  cooking: "/images/cooking-pot.jpg",
  vegetables: "/images/ingredients.jpg",
  step1: "/images/step1.png",
  step2: "/images/step2.png",
  step3: "/images/step3.png",
  avatar: "/images/avatar.jpg",
  yahoo: "/images/yahoo-btn.png",
  rakuten: "/images/rakuten-btn.png",
  amazon: "/images/amazon-btn.png",
}

export default function KaramisoLP() {
  const [currentReviews, setCurrentReviews] = useState<typeof reviews>([])

  const reviews = [
    {
      source: "楽天",
      comment:
        "コンビニの旨辛タンメンと同じくらいか、それ以上に辛いです。想像よりしっかり辛くて、大人向けの味だと思います。",
      rating: 5,
      name: "辛党さん",
    },
    {
      source: "Yahoo",
      comment:
        "160gの麺にキャベツともやしをたっぷり入れたら、ラーメン一杯でお腹パンパンに。スープがしっかりしてるから野菜が本当に美味しく食べられます。",
      rating: 5,
      name: "満腹太郎さん",
    },
    {
      source: "Amazon",
      comment: "家族で食べましたが、小学生の子にはちょっと辛すぎたようで断念。大人にはクセになる旨さでした。",
      rating: 4,
      name: "ファミリーさん",
    },
    {
      source: "楽天",
      comment:
        "スープが本格的で驚きました。濃厚だけどくどくなくて、特に豆腐との相性が抜群。ヘルシー志向の人にもおすすめ。",
      rating: 5,
      name: "健康志向さん",
    },
    {
      source: "Yahoo",
      comment: "「インスタント感がない」という説明に納得。具材を加えると完全にお店のラーメンです。",
      rating: 5,
      name: "グルメさん",
    },
    {
      source: "Amazon",
      comment:
        "スープのみを買って、自分のお気に入りの麺と合わせています。濃厚なのに雑味がなく、野菜との相性がとにかく最高です。",
      rating: 4,
      name: "麺好きさん",
    },
    {
      source: "楽天",
      comment:
        "見た目はシンプルだけど、ちゃんと辛くてコクがある。キャベツを入れると甘みが引き立って、最後まで飽きません。",
      rating: 5,
      name: "野菜好きさん",
    },
    {
      source: "Yahoo",
      comment: "辛さ耐性ある私でも「おっ」となるくらい。汗かきながら食べてます。寒い日にはぴったり！",
      rating: 4,
      name: "激辛マニアさん",
    },
    {
      source: "Amazon",
      comment: "冷蔵庫の残り野菜で作ってみたけど、どんな野菜でも合うし、スープが全部包み込んでくれる感じ。",
      rating: 5,
      name: "節約主婦さん",
    },
    {
      source: "楽天",
      comment: "麺160gって正直ナメてたけど、食べ終わったらお腹が重い…。しっかり満足感あってコスパ良すぎ。",
      rating: 4,
      name: "コスパ重視さん",
    },
  ]

  useEffect(() => {
    const shuffled = [...reviews].sort(() => 0.5 - Math.random())
    setCurrentReviews(shuffled.slice(0, 10))
  }, [])

  const products = [
    {
      id: "2set",
      title: "旨辛タンメンKARAMISO 2食セット",
      description: "麺とスープが2食分。初めての方にもおすすめのスタンダード。",
      price: "¥1,350（税・送料込）",
      image: IMAGES.product2set,
    },
    {
      id: "6set",
      title: "旨辛タンメンKARAMISO 6食セット",
      description: "ストックにも便利なファミリーサイズ。旨辛好きに。",
      price: "¥3,500（税・送料込）",
      image: IMAGES.product6set,
    },
    {
      id: "soup5",
      title: "スープのみ5食セット",
      description: "お気に入りの麺と合わせて。アレンジ自在なスープのみ。",
      price: "¥1,700（税・送料込）",
      image: IMAGES.productSoup5,
    },
  ]

  const faqs = [
    {
      question: "辛さはどのくらいですか？",
      answer:
        "コンビニの旨辛タンメンと同等か、それより少し強いくらいです。辛さに弱い方やお子様にはおすすめできません。",
    },
    {
      question: "子どもでも食べられますか？",
      answer: "小さなお子様には辛すぎる可能性があります。大人向けの商品としてお考えください。",
    },
    {
      question: "具材は何がおすすめですか？",
      answer:
        "キャベツ・もやし・豆腐・にらなどが特に合います。スープが野菜の甘みを引き出し、驚くほど美味しくなります。",
    },
    {
      question: "麺はどのくらいの量ですか？",
      answer:
        "1食あたり160gの生麺を使用しています。茹でた後はかなりのボリュームになり、具材を加えると1杯でしっかり満腹になります。",
    },
    {
      question: "麺なし（スープのみ）商品はありますか？",
      answer: "はい。スープのみ5食セットもご用意しています。お好みの麺と組み合わせてお楽しみください。",
    },
    {
      question: "野菜を入れないとどうなりますか？",
      answer: "スープがかなり濃く感じられる可能性があります。200g程度の野菜を加えることをおすすめします。",
    },
    {
      question: "インスタント感はありますか？",
      answer: '科学的に濃縮されたエキス類を使っていないため、いわゆる"インスタント感"は極力抑えられています。',
    },
    {
      question: "調理は難しいですか？",
      answer: "麺は2分茹で、スープと具材を鍋で温めるだけ。簡単ですが、具材のひと手間で一気に本格的になります。",
    },
    {
      question: "保存方法と賞味期限は？",
      answer: "常温保存でOKです。賞味期限は製造日から2ヶ月で、お届け時は45日以上の商品をお送りします。",
    },
    {
      question: "どのくらい辛いですか？（追加）",
      answer: "辛さに慣れた方でも「おっ」となるレベルです。汗をかきながら食べる方も多く、寒い日には体が温まります。",
    },
  ]

  return (
    <SharedLayout>
      {/* ヒーローセクション */}
      <section className="relative">
        <div className="relative h-screen">
          <Image
            src={IMAGES.hero || "/placeholder.svg"}
            alt="旨辛タンメンKARAMISO"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">家庭で仕上げる、本格旨辛タンメン</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              濃厚辛味噌スープ × 中太160g生麺
              <br />
              ラーメン屋のような一杯を、ご自宅で。
            </p>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">旨辛なのに奥深い、素材にこだわった一杯</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 濃厚味噌スープ */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative aspect-[4/3] w-full mb-6">
                  <Image
                    src={IMAGES.soupPackage || "/placeholder.svg"}
                    alt="濃厚味噌スープ"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-800">濃厚味噌スープ</h3>
                <p className="text-gray-700 leading-relaxed">
                  通常のラーメンスープ2倍以上の140gの大容量スープ。科学的に抽出されたエキスなどを極力排除しラーメン店と同じ素材・製法で製造する事で「インスタント感」を極力無くした本物志向スープ。
                </p>
              </div>

              {/* 多加水中太ストレート麺 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative aspect-[4/3] w-full mb-6">
                  <Image
                    src={IMAGES.noodles || "/placeholder.svg"}
                    alt="多加水中太ストレート麺"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-800">多加水中太ストレート麺</h3>
                <p className="text-gray-700 leading-relaxed">
                  ラーメン処喜多方市の老舗製麺所「五十嵐製麺」と共同開発したつるつるしこしこの中太麺。多加水麺ならではのモチモチ食感と喉越しが特徴。160gの大容量で満足度間違いなしの麺です。
                </p>
              </div>

              {/* 辛い、旨いがクセになる */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative aspect-[4/3] w-full mb-6">
                  <Image
                    src={IMAGES.cooking || "/placeholder.svg"}
                    alt="辛い、旨いがクセになる"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">辛い、旨いがクセになる</h3>
                <p className="text-gray-700 leading-relaxed">
                  ただ辛いだけでは終わらない。味噌のコク、野菜の旨味、そしてスパイスの余韻が後を引く一口ごとに「もう一口」が欲しくなる、クセになる旨辛です。是非、野菜と豆腐をご用意のうえお試しください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品紹介セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">商品ラインナップ</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-square w-full bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 野菜準備セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">まず、野菜200gをご用意ください</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={IMAGES.vegetables || "/placeholder.svg"}
                  alt="キャベツ、小ねぎ、豆腐の準備"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  旨辛スープの魅力を引き出すのは、たっぷりの野菜と豆腐。おすすめはキャベツ・もやし・豆腐に加えて、小ねぎやにらなど香味野菜も少し添えると風味が際立ちます。
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-800 mb-2">1食あたりの目安量</h3>
                  <p className="text-red-700">野菜：約200g</p>
                  <p className="text-red-700">豆腐：130〜150g（3個パックのひとつ分が目安）</p>
                </div>
                <p className="text-lg text-gray-700">
                  冷蔵庫にあるものでOK。火の通りやすいものを選んで、スープと一緒に煮込むだけで驚くほど美味しく仕上がります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 作り方セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">作り方はカンタン。けれど本格的。</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative aspect-square w-full max-w-[250px] mx-auto mb-4">
                  <Image
                    src={IMAGES.step1 || "/placeholder.svg"}
                    alt="麺を茹でる"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">麺を茹でる</h3>
                <p className="text-gray-700">麺は2分茹でる</p>
              </div>

              <div className="text-center">
                <div className="relative aspect-square w-full max-w-[250px] mx-auto mb-4">
                  <Image
                    src={IMAGES.step2 || "/placeholder.svg"}
                    alt="スープを煮込む"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">スープを煮込む</h3>
                <p className="text-gray-700">スープ1袋＋水220cc＋野菜200g＋豆腐130gを鍋で煮込む</p>
              </div>

              <div className="text-center">
                <div className="relative aspect-square w-full max-w-[250px] mx-auto mb-4">
                  <Image
                    src={IMAGES.step3 || "/placeholder.svg"}
                    alt="完成"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">完成</h3>
                <p className="text-gray-700">麺にスープを注ぎ、完成</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 text-center">
                <strong>※スープのみ商品をご利用の場合：</strong>
                <br />
                野菜なしの場合は味が濃くなります。お湯で調整してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="reviews" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ご家庭で本格ラーメン体験、続々とご好評の声</h2>
          <div className="space-y-6">
            {currentReviews.map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={IMAGES.avatar || "/placeholder.svg"}
                        alt={`お客様 ${i + 1} のアバター`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span>お客様 {i + 1}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="italic">&quot;{review.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくあるご質問</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ご購入セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ご購入はこちらから</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Yahoo!ショッピング */}
            <div className="bg-[#ffdddd] p-6 rounded-lg">
              <Link
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/bbddbfc9a5.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src={IMAGES.yahoo || "/placeholder.svg"}
                    alt="Yahoo!ショッピング"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">Yahoo!ショッピング</h4>
              <p className="text-sm text-center mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
              <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-center">
                <p className="text-red-700 font-bold text-sm">初めて当店をご利用のお客様に300円クーポン進呈中！</p>
              </div>
            </div>

            {/* 楽天市場 */}
            <div className="bg-[#deeeff] p-6 rounded-lg">
              <Link
                href="https://item.rakuten.co.jp/aizubrandhall/c/0000000047/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src={IMAGES.rakuten || "/placeholder.svg"}
                    alt="楽天市場"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">楽天市場</h4>
              <p className="text-sm text-center mb-4">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
              <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-center">
                <p className="text-red-700 font-bold text-sm">初めて当店をご利用のお客様に300円クーポン進呈中！</p>
              </div>
            </div>

            {/* Amazon */}
            <div className="bg-[#e8ffdd] p-6 rounded-lg">
              <Link
                href="https://www.amazon.co.jp/stores/page/496B9028-AB60-44BC-8A3B-84F4707D4D95"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src={IMAGES.amazon || "/placeholder.svg"}
                    alt="Amazon"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">Amazon</h4>
              <p className="text-sm text-center mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
