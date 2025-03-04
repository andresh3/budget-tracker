# React-App

This is the front-end component of the project. While NextJS supports handling API requests,
we have seperated this into it's own container using express to reduce the overall complexity
and allowing this site to be entirely static in production.

# Routing

```
.
├── Dockerfile
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   └── app
│       ├── components
│       ├── dashboard
│       │   └── page.js
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.module.css
│       ├── page.tsx
│       └── signup
│           └── page.tsx
└── tsconfig.json
```

Currently, this results in the following publically accesible pages

# /

Default "index" page; this redirects users to dashboard, or to sign in

# /signup

Sign up page

# /dashboard

Dashboard for logged-in users
