# Portfolio

- [Next.js](https://nextjs.org) (React front-end framework)
- [Tailwind CSS](https://taiwindcss.com) (Styling library)
- [TypeScript](http://typescriptlang.org)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)

## Project Structure

```
.
├── components
│   ├── icons
│   ├── links
|   └── mdx
├── content
│   ├── blog
|   ├── snippets
|   └── uses.mdx
├── layout
|   ├── blog.tsx
|   └── snippets.tsx
├── lib
|   ├── interfaces.ts
|   └── mdx.ts
│   └── theme.ts
├── pages
│   ├── blog
│   │   └── [slug].tsx
│   ├── snippets
│   │   └── [slug].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── 404.tsx
│   ├── blog.tsx
│   ├── index.tsx
│   ├── projects.tsx
│   ├── sitemap.xml.tsx
│   ├── snippets.tsx
│   └── uses.tsx
├── public
│   ├── static
|   |   ├── favicons
│   │   └── images
│   └── robots.txt
├── scripts
│   └── update-frontmatter.js
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

| Path                 | Description                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| `content/*`          | MDX data that is used for blogs, code snippets, and uses page.                                            |
| `layouts/*`          | The different page layouts each MDX category (blog, snippets) uses.                                       |
| `lib/*`              | Short for 'library', a collection of helpful utilities or code for external services.                     |
| `pages/blog/*`       | Static pre-rendered blog pages using MDX.                                                                 |
| `pages/snippets/*`   | Static pre-rendered snippet pages using MDX.                                                              |
| `pages/*`            | All other static pages. More on the pages directory [here](https://nextjs.org/docs/basic-features/pages). |
| `public/*`           | Static assets including favicon and images.                                                               |
| `styles/globals.css` | Mostly using vanilla Tailwind CSS styles.                                                                 |
| `tailwind.config.js` | [Configuration](https://tailwindcss.com/docs/configuration) file for Tailwind CSS.                        |

## Getting Started

```bash
pnpm install
pnpm dev
```
