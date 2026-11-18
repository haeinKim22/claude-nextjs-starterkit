import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <p className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
        {siteConfig.name} · Built with Next.js, Tailwind CSS, shadcn/ui
      </p>
    </footer>
  );
}
