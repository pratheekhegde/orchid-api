# Orchid API

> Koa REST API server for Orchid Platform

## Quick Setup

```sh
git clone git@github.com:pratheekhegde/orchid-api.git
cd orchid-api
yarn install
```

Dev server with live reload.

```sh
yarn dev
```

Production bundle and running.

```sh
yarn build
node ./build/main.js
```

### Features:

- OOTB ES2017+ support with live reload. (Powered by [🎒 Backpack](https://github.com/jaredpalmer/backpack))
- Linting with [Prettier](https://prettier.io/).
- Testing with [Jest](https://facebook.github.io/jest/).
- Static typing with [Flow](https://flow.org/).
- Conventional commit messages with [commitlint](https://github.com/marionebl/commitlint), [Commitizen](https://github.com/commitizen/cz-cli) and [Husky](https://github.com/typicode/husky).
- Web Server powered by [Koa](https://koajs.com/).
- **.env** Environment variables with [dotenv](https://github.com/motdotla/dotenv).
- Error reporting powered by [Sentry](https://sentry.io/).
