# Next.js 스타터 킷

웹 개발을 빠르게 시작할 수 있는 스타터 킷입니다.

## 기술 스택

| 기술 | 버전 | 비고 |
|---|---|---|
| Next.js (App Router) | 16.x | Turbopack 기본, Cache Components 활성 |
| React | 19.x | |
| TypeScript | 5.x | |
| Tailwind CSS | 4.x | `tailwind.config` 파일 없음, `@tailwindcss/postcss` 사용 |
| shadcn/ui | latest | `components.json` 참고 |
| lucide-react | latest | 아이콘 |
| next-themes | 0.4.x | 다크모드 |

## 시작하기

요구 사항: Node.js 20.9 이상

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run lint:fix` | ESLint 자동 수정 |
| `npm run typecheck` | 타입 검사 |

## 폴더 구조

```
src/
├── app/                  # App Router (layout, page, error, loading, not-found)
├── components/
│   ├── layout/           # Header, Footer, MobileNav, ThemeProvider, ThemeToggle
│   ├── sections/         # Hero, FeatureCards
│   └── ui/               # shadcn/ui 컴포넌트
└── lib/
    ├── constants.ts      # 사이트 설정, 내비게이션
    └── utils.ts          # cn 유틸
```

## 공식 문서 준수 사항

- Next.js: `create-next-app@latest` 로 생성 (https://nextjs.org/docs/app/getting-started/installation)
- Tailwind CSS v4: `postcss.config.mjs` 에 `@tailwindcss/postcss` 플러그인, `globals.css` 에 `@import "tailwindcss";` (https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- shadcn/ui: `npx shadcn@latest init` (https://ui.shadcn.com/docs/installation/next)

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add dialog
```

이 프로젝트의 shadcn 컴포넌트는 Base UI 기반이므로, 트리거를 커스터마이징할 때는 `asChild` 대신 `render` prop을 사용합니다.

```tsx
<SheetTrigger render={<Button variant="ghost" size="icon" />}>...</SheetTrigger>
```
