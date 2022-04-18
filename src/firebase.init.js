import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCBxgfcQS9jRE-btdILEghN1CYqfPaYi5w",
  authDomain: "foto-45232.firebaseapp.com",
  projectId: "foto-45232",
  storageBucket: "foto-45232.appspot.com",
  messagingSenderId: "693526986469",
  appId: "1:693526986469:web:7b2b704590641c55d09e0c"
}


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
