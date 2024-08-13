# SeeYouThursdayDev

## Description

This is a project for the See You Thursday Dev team. The application is built using a Nextjs, Prisma stack.

## Usage

### Inngest

handles the webhooks for Clerk and sends the data to the database. The webhooks are handled in the `app/api/` directory. The database is managed using Prisma. When a new user is created, the db is updated with the new user. The database schema is defined in the `prisma/schema.prisma` file. The application is styled using Tailwind CSS.

### Prisma Schema

The Prisma schema is defined in the `prisma/schema.prisma` file. The schema defines the database tables and their relationships. The schema is used to generate the Prisma client. The Prisma client is used to interact with the database.

### API Routes

The API routes are defined in the `app/api/` directory. The API routes handle the webhooks from Clerk. The API routes are used to update the database with the new data.
