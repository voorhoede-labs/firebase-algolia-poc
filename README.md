# Full-text-search proof of concept

A proof of concept created with Cloud Firestore, Cloud functions and Algolia search engine. It's a showcase of creating a full-text-search on a collection of movies.

## Getting started

``` bash
#install npm packages
npm i 

#start local dev server
npm run dev
```

## Cloud Firestore Requirements

Start by creating a firebase account.

Create a new project. Click on database you would likely see a banner that says get started with firestore. Click on that then select test mode.

Before connecting Cloud firestore to your application, be sure to have a Blaze or Flame pricing plan with Firebase. After this you can start creating a .env file from the .env.example file. In the example file there are values you need to provide and can be found in your firebase settings for more information checkout this [firebase set up page](https://firebase.google.com/docs/web/setup?authuser=0#run_a_local_web_server_for_development). In the settings there is a your apps section that shows the  ios, android and web icons. Click on the web variant and you will see your values you need to copy to .env.

Be sure to create a firestore movies collection containing documents of movies with a title field. If you want to see other fields I used checkout the search-result.vue component. 

Afterwards install the firebase command line tools and login to your firebase account.

``` bash
#install firebase tools
npm install -g firebase-tools

#login to your firebase account
firebase login

#connect to existing project you've created
firebase use --add

#or start from scratch
firebase init
```

The command line tools will show you your databases select the one you want to use for this proof of concept.

now wen you run the npm run dev it should be connected to your firestore database.

## Algolia Requirements

Start by creating a algolia account(you can use a free account). In the dashboard section of the site you can create a new index name it: movie_title. Afterwards you can go to the API keys section of the dashboard. Here you can find the admin api key and the app id. Add these keys to your .env file.

here are some more resources on [algolia, firestore and cloud functions](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/tutorials/firebase-algolia/#more-resources) and here from [firestore's perspective](https://firebase.google.com/docs/firestore/solutions/search).

## Cloud Functions
In this repository the cloud functions are already there. But if you would like  to have more information or start from scratch you can follow [the setup guide by Google](https://firebase.google.com/docs/functions/get-started) 

``` bash
#install latest versions
npm install firebase-functions@latest firebase-admin@latest --save

#initialize cloud funcitons (I chose typescript in the option it will give you)
firebase init functions
```

In the command line cd to the functions folder. The Cloud functions need to be configured with Algolia's API. Do this by typing the following:

``` bash
#install the dependencies in the functions folder
npm i

# provide the algolia APPI and ADMIN API KEY we also added previously in the .env file
firebase functions:config:set algolia.app_id="APP_ID" algolia.api_key="API_KEY"
```

Now we can use the firebase.config().app_id and firebase.config().api_key to reference these values in the functions folder. This is done because after we deploy these functions it can access these api keys.

make sure the name of the index your using is added here in the index.ts file in cloud functions:

``` javascript
const index = client.initIndex('<your-algolia-index-name-here>');
```

It should also be added in the frontend here in the search.vue file: 
``` html
    <ais-index
      :app-id="appId"
      :api-key="apiKey"
      index-name="<you-algolia-index-name-here>">
```
You can now write your functions in the provide index.ts file

Then when you've written a cloud function test it by deploying it to firebase. You can do this by typing:

```bash
#run functions 
npm run serve
```

some additional usefull commands for the functions folder

```bash
#test function remotely
firebase deploy --only functions

#test function locally
firebase functions:log --only <FUNCTION_NAME>
```
