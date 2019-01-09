import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp();

const env = functions.config();

import * as algoliasearch from 'algoliasearch';

const client = algoliasearch('I9PO6RR6PN', '1438eb53e2798341a2cf40d288211dc3');

const index = client.initIndex('movie_title');

exports.addMovies = functions.firestore
    .document('movies/{movieId}')
    .onCreate((snap, context) => {
        const data = snap.data();
        const objectId = data.id;

        return index.addObject({
            objectId,
            ...data
        })
    });

exports.removeMovies = functions.firestore
    .document('movies/{movieId}')
    .onDelete((snap, context) => {
        const data = snap.data();
        console.log('YOOOOOOO');
        const objectId = data.id;
        
        return index.deleteObject({
            objectId,
            ...data
        })
    });