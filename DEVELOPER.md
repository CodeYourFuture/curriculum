## Github OAuth app

We use Github OAuth app to authenticate users for cloning issues. You can create your own Github OAuth app and use it for your local development.

Refer to: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app

The only important option from the OAuth app is the `Authorization callback URL`. You need to set it to `http://localhost:8888/api/clone`. This is the endpoint where netlify functions are running (./netlify/functions/clone).

## Environment Variables

You need to create a `.env` file in the root of the project. You can refer to `.env.example` file for the required variables.

## Running the project

As we use netlify functions, you will need netlify cli to run the project locally. You can install it using the following command:

```bash
npm install netlify-cli -g
```

Once you have netlify cli installed, you can run the project using the following command:

```bash
netlify dev
```

This will start the project on `http://localhost:8888`.