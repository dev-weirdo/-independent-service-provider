// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBxgfcQS9jRE-btdILEghN1CYqfPaYi5w',
  authDomain: 'foto-45232.firebaseapp.com',
  projectId: 'foto-45232',
  storageBucket: 'foto-45232.appspot.com',
  messagingSenderId: '693526986469',
  appId: '1:693526986469:web:7b2b704590641c55d09e0c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
