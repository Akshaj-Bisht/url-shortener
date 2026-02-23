# URL Shortener

A full-stack URL shortener monorepo using Bun, Turborepo, Elysia, TanStack Start, and Prisma.

## Monorepo Structure

```text
apps/
	api/     # Elysia API server (port 3001)
	web/     # TanStack Start web app (port 3000)
packages/
	db/      # Prisma schema, migrations, and shared Prisma client
```

## Tech Stack

- Runtime & package manager: Bun
- Monorepo orchestration: Turborepo
- API: Elysia
- Web: React + TanStack Start + Vite + Tailwind CSS
- Database: PostgreSQL + Prisma

## Prerequisites

- Bun `>= 1.3`
- PostgreSQL database

## Environment Variables

Create a `.env` file at the repository root:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME"
```

`DATABASE_URL` is required by Prisma and by the API through `@repo/db`.

## Install Dependencies

```bash
bun install
```

## Database Setup (Prisma)

From the repository root:

```bash
cd packages/db
bunx prisma migrate dev --name init
```

This applies migrations and generates the Prisma client in `packages/db/src/generated/prisma`.

## Run in Development

From the repository root:

```bash
bun run dev
```

This runs all workspace `dev` scripts via Turborepo.

- Web app: `http://localhost:3000`
- API server: `http://localhost:3001`

Quick API health check:

```bash
curl http://localhost:3001/
```

Expected response:

```text
API running 🚀
```

## Build

From the repository root:

```bash
bun run build
```

## Useful Workspace Commands

Run web tests:

```bash
cd apps/web
bun run test
```

Run only the API in watch mode:

```bash
cd apps/api
bun run dev
```

## Current Status

- API currently exposes a basic health route (`GET /`).
- Web app is scaffolded with TanStack Start starter UI.
- Prisma includes a `Url` model with migration history initialized.

## Next Steps

- Add API routes to create and resolve short URLs.
- Connect web UI to API endpoints.
- Add click tracking and redirect analytics.
