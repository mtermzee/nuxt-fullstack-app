# Nuxt 3 Minimal Starter

On same folder, check blog-posts

Try the first one npx:

```bash
# create app
npx nuxi@latest init nuxt-fullstack-app

pnpm create nuxt-app@latest nuxt-fullstack-app

# install colorMode
pnpm install --save-dev @nuxtjs/color-mode

# install prsima
pnpm add prisma --save-dev
pnpm add @prisma/client

# make migration prisma
npx prisma migrate dev

# open prisma studio
npx prisma studio

# install bcrypt
pnpm add bcrypt
pnpm install --save bcryptjs

```

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [Nuxt 3 tutorial](https://www.youtube.com/watch?v=A24aKCQ-rf4&ab_channel=FullStackJack) for more information.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Check out the [tailwind installation](https://tailwindcss.com/docs/guides/nuxtjs) for more information.

Check out the [prisma-database](https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/fullstack) for more information.
