# Full-text-search proof of concept

A proof of concept created with Cloud Firestore, Cloud functions and Algolia search engine. It's a showcase of creating a full-text-search on a collection of movies.

## Getting started

``` bash
#install npm packages
npm i 

#start local dev server
npm run dev
```

## Cloud firestore Requirements

Start by creating a firebase account.

Before connecting Cloud firestore to your application, be sure to have a Blaze or Flame pricing plan with Firebase. After this you can start creating a .env file from the .env.example file. In the example file there are values you need to provide and can be found in your firebase settings for more information checkout this [firebase set up page](https://firebase.google.com/docs/web/setup?authuser=0#run_a_local_web_server_for_development).

Be sure to create a firestore movies collection containing documents of movies with a title field. If you want to see other fields I used checkout the search-result.vue component. 

Afterwards install the firebase command line tools and login to your firebase account.

``` bash
#install firebase tools
npm install -g firebase-tools

#login to your firebase account
firebase login
```

The command line tools will show you your databases select the one you want to use for this proof of concept.

now wen you run the npm run dev it should be connected to your firestore database.

## Algolia Requirements

Start by creating a algolia account(you can use a free account). In the dashboard section of the site you can create a new index name it: movie_title. Afterwards you can go to the API keys section of the dashboard. Here you can find the api key and the app id. Add these keys to your .env file.

## Cloud Functions
In this repository the cloud functions are already there. But if you would like  to have more information or start from scratch you can follow [the setup guide by Google](https://firebase.google.com/docs/functions/get-started).

``` bash
#install latest versions
npm install firebase-functions@latest firebase-admin@latest --save

#initialize cloud funcitons (I chose typescript in the option it will give you)
firebase init functions
```

The Cloud functions need to be configured with Algolia's API. Do this by typing the following:

``` bash
# provide the algolia APPI and ADMIN API KEY we also added previously in the .env file
firebase functions:config:set algolia.app_id="APP_ID" algolia.api_key="API_KEY"
```

Now we can use the firebase.config().app_id and firebase.config().api_key to reference these values in the functions folder. This is done because after we deploy these functions it can access these api keys.

You can now write your functions in the provide index.ts file

If you want to test your function try deploying it to firestore you can do this by typing:

```bash
#test function remotely
firebase deploy --only functions

#test function locally
firebase functions:log --only <FUNCTION_NAME>
```
