# vue-instantsearch-getting-started

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# install Firebase CLI

## install firebase tools
npm install -g firebase-tools

## sign into firebase account with your credentials
firebase login

## initialize firebase
firebase init

## start server locally
firebase serve

# connect algolia 

Ask Jesse For API keys or create you're own account on algolia.com to generate API_KEY and APP_ID

add the API_KEY and APP_ID to your env file.

execute following line in the commandline of the funcitons folder

firebase functions:config:set algolia.app_id="APP_ID" algolia.api_key="API_KEY"

# connect Firestore

Firestore generates the following values that need to be added to the .env file:

FIRESTORE_API_KEY=''
FIRESTORE_AUTHDOMAIN=''
FIRESTORE_DATABASE_URL=''
FIRESTORE_PROJECTID=''
FIRESTORE_STORAGEBUCKET=''
FIRESTORE_MESSAGING_SENDER_ID=''

These values can be found in the console of firebase then in the settings of you project: https://firebase.google.com/docs/web/setup?authuser=0

# connect Cloud Functions

##get latest versions of firebase functions and admin
npm install firebase-functions@latest firebase-admin@latest --save

##initialize cloud functions, you can choose between js or typescript. I would suggest using typescript because you have the added benefit of using es6/es7 without configuration
firebase init functions