import { Blocks, Layers, Palette, ShieldCheck, type LucideIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Next.js App Router",
    description: "파일 기반 라우팅과 서버 컴포넌트를 갖춘 최신 Next.js 구조",
    icon: Layers,
  },
  {
    title: "TypeScript",
    description: "엄격한 타입 검사로 안전하게 개발",
    icon: ShieldCheck,
  },
  {
    title: "Tailwind CSS v4",
    description: "tailwind.config 없이 CSS 중심으로 설정하는 스타일링",
    icon: Palette,
  },
  {
    title: "shadcn/ui + lucide",
    description: "복사해서 쓰는 접근성 좋은 UI 컴포넌트와 아이콘",
    icon: Blocks,
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="mx-auto max-w-5xl px-4 pb-20">
      <h2 className="mb-8 text-center text-2xl font-semibold">포함된 기술 스택</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon: Icon }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="mb-2 size-6" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
