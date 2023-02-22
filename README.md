# Blog App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To get started with this app, clone this repository to your local machine:

```bash
git clone https://github.com/mraflyhudaa/blog-assignment.git
```

Then, install the dependencies using the following command:

```bash
npm install
# or
yarn
# or
pnpm install
```

### env

1. find `.env_example` file and rename it to `.env.local` or `.env`
2. edit `.env` or `.env.local` file to add your access token for GoREST API
3. you can find your access token [here](https://gorest.co.in/consumer/login) and then login with your account

Finally, start the development server by running:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

- View posts list
- View post detail page
- Users page with Create, Read, Update, Delete and Search users
- CSS is styled using Tailwind CSS
- API by GoREST API
- The app is deployed on Vercel

## Technologies Used

- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Axios](https://axios-http.com/docs/intro)
- [React Query](https://tanstack.com/query/latest/docs/react/overview)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [GoREST API](https://gorest.co.in/)
