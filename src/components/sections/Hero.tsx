import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center md:py-28">
      <Badge variant="secondary">Next.js · Tailwind v4 · shadcn/ui</Badge>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-balance text-muted-foreground md:text-lg">
        {siteConfig.description}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/#features" className={cn(buttonVariants({ size: "lg" }))}>
          시작하기
        </Link>
        <a
          href="https://ui.shadcn.com/docs/components"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
        >
          컴포넌트 둘러보기
        </a>
      </div>
    </section>
  );
}
