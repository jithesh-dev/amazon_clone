import firebase from "firebase";
// import config from "./config";

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcbR6C1tYMHpoYIduWUPKZ499GienlSfE",
  authDomain: "clone-75e5d.firebaseapp.com",
  databaseURL: "https://clone-75e5d.firebaseio.com",
  projectId: "clone-75e5d",
  storageBucket: "clone-75e5d.appspot.com",
  messagingSenderId: "141972503067",
  appId: "1:141972503067:web:6f9ba3d20a6968d9f3d6be",
  measurementId: "G-Z25JPT0MW1",
});

// const db = firebase.firestore();
const auth = firebase.auth();

// export { db, auth };
export { auth };
