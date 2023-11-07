# Setting up Environment

## Build

This will run your build in watch mode

```
npm run build
```

## Dev

This wil restart your server automatically in reaction to above build step

```
npm run dev
```

## Start

This wil build and start your server

```
npm start
```

## API

Refer **requests.http** file for API endpoints. You must have [this](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension installed in VS Code to use this file to send requests.

## Env

Refer env.example file for environment variables. If in case these variables are not set then defaults will be considered as defined in the **./src/constants/db.ts** file
