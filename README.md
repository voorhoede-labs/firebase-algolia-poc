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

# connect algolia 

Ask Jesse For API keys or create you're own account on algolia.com to generate API_KEY and APP_ID

add the API_KEY and APP_ID to your env file.

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
