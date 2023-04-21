# Module Federation with NextJS and Client Side React.

Module federation in NextJS depends on [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf).

## Context

There are 3 applications:

- `host-app`: Next.js app
- `shop`: flavor of `React + Webpack 5`
- `auth`: flavor of `React + Webpack 5`

## Setup

- run `yarn` - Install all the dependencies to run the apps in parallel.
- run `npm run install:apps` - Install all the required dependencies on both `host-app`, `auth-app` and `shop-app`
- run `npm run start` - Start both `host-app`,  `auth-app` and `shop-app`
- `host-app` on `localhost:3000`
- `remote-app` on `localhost:3001`
- Navigate to `localhost:3000` - Two Button Component should be visible, one from remote and another from host app.

