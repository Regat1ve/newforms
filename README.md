# newforms

A self-hostable, 152-ФЗ-compliant alternative to Google Forms with a built-in
spreadsheet-style admin view for submissions.

Built to replace Google Forms + Sheets workflows for organisations that need
to keep personal data on Russian territory.

## Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** + **shadcn/ui**
- **PostgreSQL** + **Prisma**
- **Auth.js** (email magic-link)
- **TanStack Table** for the admin response view

## Local development

Prerequisites: Node.js 20+, pnpm, PostgreSQL 17+ running on `localhost:5432`.

```bash
# 1. Install deps
pnpm install

# 2. Set up environment
cp .env.example .env
# Edit .env — fill DATABASE_URL with your Postgres password.
# Generate AUTH_SECRET: pnpm dlx auth secret

# 3. Create the database
psql -U postgres -c "CREATE DATABASE newforms_dev;"

# 4. Run migrations
pnpm prisma migrate dev --name init

# 5. Start the dev server
pnpm dev
```

Open `http://localhost:3000`.

## Project status

v0.1 in active development.

## License

MIT
