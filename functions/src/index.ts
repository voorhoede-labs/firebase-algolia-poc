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
        const objectID = context.params.movieId

        return index.addObject({
            objectID,
            ...data
        })
    });

exports.removeMovies = functions.firestore
    .document('movies/{movieId}')
    .onDelete((snap, context) => {
        if(snap.exists) {
            const objectID = context.params.movieId
            return index.deleteObject(objectID);
        }
    });

exports.updateMovies = functions.firestore
    .document('movies/{movieId}')
    .onUpdate((change, context) => {
        const newData = change.after.data();
        const object = {
            objectID: context.params.movieId,
            ...newData
        }

        return index.partialUpdateObject(object);
    })