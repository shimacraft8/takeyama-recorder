import { Button } from "@/components/ui/button";
import { ChevronRight, Music, Leaf, Hammer } from "lucide-react";
import { useState, useEffect } from "react";

const SOZAI = [
  { src: "/images/sozai/s_kaede.jpg", name: "メープル", jp: "楓" },
  { src: "/images/sozai/s_rose.jpg", name: "ローズウッド", jp: "紫檀" },
  { src: "/images/sozai/s_sakura.jpg", name: "チェリー", jp: "桜" },
  { src: "/images/sozai/s_tuge.jpg", name: "ボックスウッド", jp: "柘植" },
  { src: "/images/sozai/s_kokutan.jpg", name: "エボニー", jp: "黒檀" },
  { src: "/images/sozai/s_block.jpg", name: "グラナディラ", jp: "黒檀材" },
];

const PROCESS_IMAGES = [
  { src: "/images/process/wo02.jpg", caption: "木材の加工" },
  { src: "/images/process/wo03.jpg", caption: "穴あけ工程" },
  { src: "/images/process/wo04.jpg", caption: "管体の成形" },
  { src: "/images/process/wo05.jpg", caption: "仕上げ研磨" },
  { src: "/images/process/wo06.jpg", caption: "音道の調整" },
  { src: "/images/process/wo07.jpg", caption: "最終検査" },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ナビゲーションヘッダー */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
              竹
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif font-bold text-primary text-lg leading-tight">竹山木管楽器製作所</h1>
              <p className="text-xs text-muted-foreground">Takeyama Recorder Workshop</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#lineup" className="text-foreground hover:text-primary transition-colors">
              ラインナップ
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              製造工程
            </a>
            <a href="#maintenance" className="text-foreground hover:text-primary transition-colors">
              メンテナンス
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/top/top_j_02.jpg')",
            transform: `translateY(${scrollY * 0.4}px)`,
            scale: "1.1",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

        <div className="relative z-10 container text-white text-center max-w-2xl">
          <div className="h-px w-20 bg-accent mx-auto mb-8" />
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            木から音へ
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-100 leading-relaxed drop-shadow">
            五十の工程が生み出す、世界のリコーダー。
            <br />
            竹山木管楽器製作所では、伝統の技と自然の素材を大切にしながら、
            <br />
            ひとつひとつ丁寧にリコーダーを製作しています。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="takeyama-button text-base px-8 py-3">
              ラインナップを探索する
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button className="takeyama-button-secondary text-base px-8 py-3">
              工程の詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 木材セクション */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="takeyama-accent-line mx-auto mb-4" />
            <h3 className="takeyama-heading mb-4">自然の素材から始まる</h3>
            <p className="takeyama-body text-muted-foreground max-w-2xl mx-auto">
              竹山リコーダーは、世界各地から厳選した木材を使用しています。
              それぞれの木材が持つ独特の音色と風合いを活かし、
              最適なリコーダーを製作します。
            </p>
          </div>

          {/* 木材グリッド */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {SOZAI.map((item) => (
              <div key={item.name} className="group relative overflow-hidden rounded-lg shadow-md aspect-square">
                <img
                  src={item.src}
                  alt={`${item.jp}（${item.name}）`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-serif font-bold text-base leading-tight">{item.jp}</p>
                  <p className="text-xs opacity-80">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="takeyama-body text-muted-foreground max-w-2xl mx-auto mb-6">
              木材の選別から乾燥、加工まで、すべてのプロセスで職人の経験と
              知識が活かされています。自然の素材だからこそ、
              ひとつひとつが唯一無二の楽器となるのです。
            </p>
            <Button className="takeyama-button">
              素材について詳しく知る
            </Button>
          </div>
        </div>
      </section>

      {/* 製造工程セクション */}
      <section id="process" className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="takeyama-accent-line mx-auto mb-4" />
            <h3 className="takeyama-heading mb-4">リコーダーができるまで</h3>
            <p className="takeyama-body text-muted-foreground max-w-2xl mx-auto">
              50以上の工程を経て、ひとつのリコーダーが完成します。
              職人の手による丁寧な作業が、世界で愛される楽器を生み出しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Leaf,
                title: "素材の選別",
                description: "世界各地から厳選した木材を、品質基準に基づいて選別します。",
              },
              {
                icon: Hammer,
                title: "加工と成形",
                description: "伝統的な技法と現代の精密機械を組み合わせて、形を整えます。",
              },
              {
                icon: Music,
                title: "調整と検査",
                description: "音色を確認しながら、最終的な調整を行い、完成させます。",
              },
            ].map((step, idx) => (
              <div key={idx} className="takeyama-card text-center">
                <step.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="takeyama-subheading mb-3">{step.title}</h4>
                <p className="takeyama-body text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* 工程写真グリッド */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PROCESS_IMAGES.map((item) => (
              <div key={item.src} className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-2 left-3 text-white text-sm font-medium">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ラインナップセクション */}
      <section id="lineup" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="takeyama-accent-line mx-auto mb-4" />
            <h3 className="takeyama-heading mb-4">リコーダーのラインナップ</h3>
            <p className="takeyama-body text-muted-foreground max-w-2xl mx-auto">
              ソプラノからバスまで、様々なサイズと音域のリコーダーをご用意しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/Lineup_J.jpg"
                alt="リコーダーラインナップ"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                {[
                  { name: "ソプラノ", description: "最も一般的なサイズ。明るく澄んだ音色が特徴です。" },
                  { name: "アルト", description: "ソプラノより低い音域。温かみのある音が魅力です。" },
                  { name: "テナー", description: "さらに低い音域。深みのある音色を持ちます。" },
                  { name: "バス", description: "最も低い音域。重厚で響きのある音が特徴です。" },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-accent pl-4">
                    <h4 className="takeyama-subheading text-primary mb-2">{item.name}</h4>
                    <p className="takeyama-body text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メンテナンスセクション */}
      <section id="maintenance" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="takeyama-accent-line mx-auto mb-4" />
            <h3 className="takeyama-heading mb-4">保守とメンテナンス</h3>
            <p className="takeyama-body text-muted-foreground max-w-2xl mx-auto">
              リコーダーを長く愛用いただくために、正しいお手入れ方法をご紹介します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "演奏後のお手入れ",
                content: "演奏後は、付属のクリーニングロッドで内部を軽く拭いてください。水分を残さないことが大切です。",
              },
              {
                title: "定期的なオイリング",
                content: "3～6ヶ月ごとに、専用のリコーダーオイルを薄く塗布してください。木材の乾燥を防ぎます。",
              },
              {
                title: "保管方法",
                content: "直射日光と高温多湿を避け、風通しの良い場所に保管してください。専用ケースの使用をお勧めします。",
              },
              {
                title: "修理・調整",
                content: "音が出にくくなったり、キーが動きにくくなった場合は、お気軽にお問い合わせください。",
              },
            ].map((item, idx) => (
              <div key={idx} className="takeyama-card">
                <h4 className="takeyama-subheading text-primary mb-3">{item.title}</h4>
                <p className="takeyama-body text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 販売店セクション */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="takeyama-accent-line mx-auto mb-4" />
            <h3 className="takeyama-heading mb-4">取扱楽器店</h3>
            <p className="takeyama-body text-muted-foreground max-w-2xl mx-auto">
              竹山リコーダーは、国内外の専門店でお求めいただけます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: "大阪",
                shops: ["アンリュウ リコーダーギャラリー", "三木楽器 Wind Forest"],
              },
              {
                region: "東京",
                shops: ["東京古典楽器センター", "宮地楽器 小金井店", "山野楽器"],
              },
              {
                region: "海外",
                shops: ["ドイツ、英国、米国など世界各地の専門店"],
              },
            ].map((item, idx) => (
              <div key={idx} className="takeyama-card">
                <h4 className="takeyama-subheading text-accent mb-4">{item.region}</h4>
                <ul className="space-y-2">
                  {item.shops.map((shop, sidx) => (
                    <li key={sidx} className="takeyama-body text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {shop}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            竹山リコーダーについて、
            <br />
            もっと知りたい方へ
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            ご質問やご注文のご相談は、お気軽にお問い合わせください。
            職人一同、心よりお待ちしております。
          </p>
          <Button className="px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
            お問い合わせフォームへ
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="takeyama-subheading text-primary mb-4">竹山について</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">製造工程</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">素材について</a></li>
              </ul>
            </div>
            <div>
              <h4 className="takeyama-subheading text-primary mb-4">製品</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">ラインナップ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">カスタマイズ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">価格表</a></li>
              </ul>
            </div>
            <div>
              <h4 className="takeyama-subheading text-primary mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">メンテナンス</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">修理・調整</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">よくある質問</a></li>
              </ul>
            </div>
            <div>
              <h4 className="takeyama-subheading text-primary mb-4">その他</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 竹山木管楽器製作所 Takeyama Recorder Workshop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
