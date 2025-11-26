"use client"

import { MetronomeCore } from "@/components/ui/metronome/metronome-core"
import { useLanguage } from "@/components/language-provider"

export default function MetronomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-24 pb-12 px-4">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-5xl font-black tracking-tighter">
          <span className="text-zinc-900 dark:text-white">Metro</span>
          <span className="text-blue-500">Nome</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase text-xs">
          {t.common.description}
        </p>
      </div>

      {/* Metronome Core */}
      <MetronomeCore />

      {/* SEO Content Section */}
      <section className="w-full max-w-4xl mt-24 space-y-16 text-zinc-800 dark:text-zinc-200">
        
        <article className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.metronome.seo.article1.title}
          </h2>
          <div 
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: t.metronome.seo.article1.content }}
          />
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.metronome.seo.article2.title}
          </h2>
          <div 
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: t.metronome.seo.article2.content }}
          />
        </article>

        <article className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.metronome.seo.article3.title}
          </h2>
          <div 
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: t.metronome.seo.article3.content }}
          />
        </article>

      </section>

    </div>
  )
}
