import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as algoliasearch from 'algoliasearch';

admin.initializeApp();

const client = algoliasearch(
	functions.config().algolia.app_id,
	functions.config().algolia.api_key
);

const index = client.initIndex('movie_title');

exports.addMovies = functions.firestore
	.document('movies/{movieId}')
	.onCreate((snap, context) => {
		const data = snap.data();
		const objectID = context.params.movieId

		return index.addObject({
				objectID,
				...data,
				poster: null,
				metascore: null
		});
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
			...newData,
			poster: null,
			metascore: null
		}

		return index.partialUpdateObject(object);
	})