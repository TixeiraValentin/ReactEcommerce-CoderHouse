import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBe-lzijc39b1HNt8VKGUZf1OM60LPGjGY",
  authDomain: "malu-indumentaria.firebaseapp.com",
  projectId: "malu-indumentaria",
  storageBucket: "malu-indumentaria.appspot.com",
  messagingSenderId: "936728754722",
  appId: "1:936728754722:web:819bcd3a2610d985ea687b"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}