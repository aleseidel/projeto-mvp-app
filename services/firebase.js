import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3i1yv_fiGnUjUNh3Ul_HkECZ8fNclau8",
  authDomain: "projeto-mvp-app-86638.firebaseapp.com",
  projectId: "projeto-mvp-app-86638",
  storageBucket: "projeto-mvp-app-86638.appspot.com",
  messagingSenderId: "1008153994703",
  appId: "1:1008153994703:web:4b150e110b81cf55085eba"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;