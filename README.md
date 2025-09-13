# Portfolio


This repository contains my personal portfolio website. It showcases projects, a blog and a contact form while pulling live data from the GitHub and Hashnode APIs. The site is built with **Next.js**, **TypeScript**, **Tailwind CSS** and **Material UI**, featuring:

- Responsive layouts with light/dark theme toggle
- Animated transitions powered by Headless UI and Framer Motion
- GitHub statistics component authenticated via a personal access token
- Blog section fetching posts from Hashnode
- Contact form that sends confirmation emails through Nodemailer
- Optional logging middleware for visitor analytics


## Prerequisites

- **Node.js** 20 LTS (recommended)
- **npm** (comes with Node.js)

This repo includes an `.nvmrc` set to Node 20. If you use `nvm`, you can match the version with:

```bash
nvm use           # uses the version in .nvmrc
# If not installed yet:
nvm install       # installs and then uses Node 20 per .nvmrc
```

## Installation

Install the project dependencies after cloning the repository:

```bash
npm install
```

## Development

Start the development server with hot reload:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` by default.

## Building

Generate a production build:

```bash
npm run build
```

After building, start the optimized production server:

```bash
npm start
```

## Environment Variables

Create a `.env.local` file in the project root and provide the following variables:

```
GITHUB_TOKEN=your_github_personal_token
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
EMAIL_USER=your_email_address
LOGTAIL_SOURCE_TOKEN=your_logtail_token
```

- `GITHUB_TOKEN` is used in `GithubStats.tsx` for authenticated requests to the GitHub API.
- `SMTP_*` variables and `EMAIL_USER` configure Nodemailer in `src/app/api/contact/route.ts`.
- `LOGTAIL_SOURCE_TOKEN` is optional and used for request logging in `middleware.ts` and the location API route.

## Testing

This project uses **Jest** and **React Testing Library** for unit tests. The configuration is in `jest.config.js` and `jest.setup.ts` enables custom matchers from `@testing-library/jest-dom`.
Run the test suite with:

```bash
npm test
```

## Notes

If there is a syntax problem with the `@` rules in `global.css`, install the **PostCSS Language Support** VS Code plugin.
