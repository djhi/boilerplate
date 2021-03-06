# My boilerplate [![Build Status](https://travis-ci.org/djhi/boilerplate.svg?branch=master)](https://travis-ci.org/djhi/boilerplate)

This is my boilerplate based on:

- [backpack](https://github.com/palmerhq/backpack)
- [next](https://github.com/zeit/next.js)
- [apollo](http://www.apollodata.com/)

Not meant to be used by anyone but me :)

## Setup

Ensure you export the following environment variables:

- `UID` (result of the `id -u` command)
- `GID` (result of the `id -g` command)

You can use [direnv](https://direnv.net/) for that.

This is necessary so that files created by the docker containers get the correct permissions.

```sh
make install
```

## Development

```sh
make dev
```

**Important**: The first you run the application, the database won't be available yet. To create it, run:

```sh
make create-database
make migrate-database
```

- API available on `http://localhost:3000`
- Frontend available on `http://localhost:8080`

### Storybooks

Access the storybooks on `http://localhost:9001` after running:

```sh
make storybook
```

### Postgres database

You can access the mongo shell by running

```sh
make mongo-shell
```

## Tests

```sh
make test
```
