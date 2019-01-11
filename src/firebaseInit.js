import firebase from 'firebase/app';
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const settings = { timestampsInSnapshots: true };
firebaseApp.firestore().settings(settings);

export default firebaseApp.firestore()
