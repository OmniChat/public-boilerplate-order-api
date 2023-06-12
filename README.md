# Boilerplate API to externally manage OmniChat Orders

## Installation/deployment instructions

> **Requirements**: NodeJS `(v.16.20.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

> **before start**: To use all features in this boilerplate you have to create a secret key on omnichat app settings and fill the information on utils.ts file.

> **starting the project**: 
- Run `npm i` to install the project dependencies
- Run `npm start` to run this project on localhost
- Run `npm run deploy` to deploy this stack to AWS


## Test your service

- send a request to `/catalog` using `GET` method to list some example products


> :warning: As is, this template, once deployed, opens a **public** endpoint within your AWS account resources. Anybody with the URL can actively execute the API Gateway endpoint and the corresponding lambda. if you prefer, you can protect this endpoint with the authentication method of your choice.


### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── cancellation
│   │   │   ├── handler.ts      # `cancellation` lambda source code that will be triggered when an order is CANCELLED on omnichat app
│   │   │   ├── index.ts        # `cancellation` lambda Serverless configuration
│   │   │
│   │   ├── catalog
│   │   │   ├── handler.ts      # `catalog` lambda source code to list the products on omnichat app
│   │   │   ├── index.ts        # `catalog` lambda Serverless configuration
│   │   │
│   │   ├── orderChecker
│   │   │   ├── handler.ts      # `orderChecker` lambda source code to control the order information in real time during the creation on omnichat app
│   │   │   ├── index.ts        # `orderChecker` lambda Serverless configuration
│   │   │
│   │   ├── provision
│   │   │   ├── handler.ts      # `provision` lambda source code that will be triggered when an order is CREATED on omnichat app
│   │   │   ├── index.ts        # `provision` lambda Serverless configuration
│   │   │
│   │   ├── statusChange
│   │   │   ├── handler.ts      # `statusChange` lambda source code that will be triggered when the order status is updated on omnichat app
│   │   │   ├── index.ts        # `statusChange` lambda Serverless configuration
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│       └── utils.ts            # OmniChat functions
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
```
