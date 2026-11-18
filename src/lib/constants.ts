// 사이트 전역 설정과 내비게이션 정의
export const siteConfig = {
  name: "Next.js 스타터 킷",
  description:
    "Next.js, TypeScript, Tailwind CSS v4, shadcn/ui로 빠르게 시작하는 웹 개발 스타터 킷",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "기능", href: "/#features" },
];
