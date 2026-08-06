# UrbanClick — Website Institucional

Website institucional da **UrbanClick**, agência de marketing, branding e
comunicação visual. Reprodução fiel do design fornecido (`DESIGN-WEBSITE.pdf`),
construída como uma aplicação Next.js 15 moderna, responsiva e pronta para
produção.

> **We Create. You Grow.**

---

## Stack

| Camada          | Tecnologia                                  |
| ---------------- | -------------------------------------------- |
| Framework        | Next.js 15 (App Router)                      |
| UI               | React 19 + TypeScript                        |
| Estilos          | TailwindCSS + tailwindcss-animate            |
| Animações        | Framer Motion                                |
| Ícones           | lucide-react                                 |
| Formulários      | React Hook Form + Zod                        |
| Primitivas UI    | Radix UI (Accordion), class-variance-authority |
| Qualidade código | ESLint + Prettier (com plugin Tailwind)      |

## Requisitos

- Node.js **18.18** ou superior (recomendado: 20 LTS)
- npm 10+ (ou pnpm/yarn, se preferires)

## Como correr o projeto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) no browser.

## Scripts disponíveis

| Comando           | Descrição                                      |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Ambiente de desenvolvimento com hot-reload       |
| `npm run build`    | Build de produção otimizado                     |
| `npm run start`    | Corre o build de produção localmente            |
| `npm run lint`     | Corre o ESLint sobre todo o projeto             |
| `npm run format`   | Formata o código com Prettier                   |

## Estrutura do projeto

```
project/
├── app/                  # App Router — layout, página, metadata, SEO
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── common/           # Button, Card, Badge, Input, Textarea, Accordion...
│   ├── layout/           # Header, Navbar, MobileMenu, Footer, Logo
│   └── sections/         # Hero, About, Services, Process, Portfolio,
│                         # Differentials, FAQ, CTA, Contact
├── hooks/                # useMediaQuery, useLockBodyScroll
├── lib/                  # utils (cn), validations (Zod schemas)
├── styles/               # CSS auxiliar (scrollbar, etc.)
├── public/               # imagens, ícones, logos, favicon
├── types/                # tipos TypeScript partilhados
├── utils/                # helpers de formatação
├── constants/            # dados fixos do site (nav, contactos)
└── data/                 # conteúdo das secções (serviços, processo, FAQ...)
```

## Conteúdo e edição

Todo o texto visível no site vive em `data/` e `constants/site.ts` — para
alterar textos, números de telefone, links sociais ou perguntas do FAQ, edita
esses ficheiros em vez dos componentes.

- `data/services.ts` — os 4 serviços da secção "Serviços"
- `data/process.ts` — os 5 passos da metodologia
- `data/differentials.ts` — os 4 diferenciais
- `data/faq.ts` — as perguntas frequentes
- `constants/site.ts` — nome, tagline, contactos e links de navegação

## Formulário de contacto

O formulário em `components/sections/Contact.tsx` já está validado com
**Zod** (`lib/validations/contact.ts`) e **React Hook Form**. Atualmente o
envio é simulado (`console.log`) — para ligar a um serviço real de email,
cria uma rota `app/api/contact/route.ts` e substitui o `fetch`/chamada
dentro da função `onSubmit`.

## SEO

- Metadata completo (title template, description, keywords) em `app/layout.tsx`
- Open Graph e Twitter Card com imagem de partilha em `public/images/og-cover.svg`
- `sitemap.xml` e `robots.txt` gerados dinamicamente (`app/sitemap.ts`, `app/robots.ts`)
- Favicon em SVG (`public/favicon.svg`)

> Antes de publicar, atualiza `SITE.url` em `constants/site.ts` para o domínio
> definitivo — é usado no `metadataBase`, no sitemap e no robots.txt.

## Acessibilidade

- Navegação por teclado com estados de foco visíveis (`focus-visible`)
- `aria-label` em botões de ícone e navegação
- `prefers-reduced-motion` respeitado globalmente
- Contraste de cor verificado entre o fundo escuro (#0B0A06) e os acentos dourados

## Imagens de placeholder

As imagens de projetos na secção "Portfolio" usam gradientes CSS como
placeholder (para evitar caminhos partidos e não depender de imagens externas
com direitos reservados). Substitui os cartões em
`components/sections/Portfolio.tsx` por imagens reais do teu portfólio
(recomenda-se `next/image` com ficheiros em `public/images/`).

## Deploy

O projeto está pronto para deploy em qualquer plataforma compatível com
Next.js 15 (Vercel, Netlify, servidor Node próprio, etc.):

```bash
npm run build
npm run start
```

---

Feito com atenção ao detalhe para a **UrbanClick**.
