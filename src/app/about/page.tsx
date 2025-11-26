"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Music, Mic, Zap, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            {t.about.title} <span className="text-blue-500">{t.about.subtitle}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.about.heroDesc}
          </p>
        </section>

        {/* Mission Grid */}
        <section className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-border hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mic className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.about.mission.item1.title}</h3>
                <p className="text-muted-foreground">{t.about.mission.item1.desc}</p>
            </div>
            <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-border hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.about.mission.item2.title}</h3>
                <p className="text-muted-foreground">{t.about.mission.item2.desc}</p>
            </div>
            <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-border hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Music className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.about.mission.item3.title}</h3>
                <p className="text-muted-foreground">{t.about.mission.item3.desc}</p>
            </div>
        </section>

        {/* Story Section */}
        <section className="bg-zinc-900 text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-bold">{t.about.story.title}</h2>
                <p className="text-zinc-300 leading-relaxed text-lg">
                    {t.about.story.p1}
                </p>
                <p className="text-zinc-300 leading-relaxed text-lg">
                    {t.about.story.p2}
                </p>
                
                <div className="pt-4">
                    <Link href="/">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8">
                            {t.about.story.cta} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>

        {/* Features List */}
        <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">{t.about.features.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {t.about.features.list.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-border">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">{feature}</span>
                    </div>
                ))}
            </div>
        </section>

      </div>
    </div>
  )
}
