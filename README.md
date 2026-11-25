# Fakebook

A fake social media app. Posts, comments and photos come from [JSONPlaceholder](https://jsonplaceholder.typicode.com), and users (names, photos, addresses) come from [RandomUser](https://randomuser.me).

## How to run

Requirements: [Node.js](https://nodejs.org) 22+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Then open http://localhost:5173.

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Serve the production build |
| `pnpm lint` | Lint the code with oxlint |

## Built with

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [React Router](https://reactrouter.com)
- [TanStack Query](https://tanstack.com/query)
- [axios](https://axios-http.com)
- [zod](https://zod.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (on [Base UI](https://base-ui.com))
- [lucide-react](https://lucide.dev)
- [oxlint](https://oxc.rs)

## Project structure

```
src/
├── assets/            # Mockup images (current user and sponsors)
├── components/
│   ├── layout/        # Header, feed, posts and sidebars
│   │   ├── home-page/     # Home page sidebars and contacts
│   │   └── profile-page/  # Profile page sections
│   ├── skeletons/     # Loading placeholders
│   └── ui/            # shadcn components
├── hooks/             # TanStack Query hooks
├── lib/               # Utilities and the mocked current user
├── pages/             # Home, profile, not found and error pages
├── schemas/           # zod schemas for the API responses
├── services/          # axios clients for JSONPlaceholder and RandomUser
├── App.tsx            # Root layout (header + current page)
├── main.tsx           # App entry point
└── router.tsx         # Routes
```

## Routes

| Path | Page |
|---|---|
| `/` | News feed |
| `/profile` | Your profile |
| `/profile/:userId` | Another user's profile |
