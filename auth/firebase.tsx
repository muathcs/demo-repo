// firebase.tsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // New import

const firebaseConfig = {
  apiKey: "AIzaSyBTvsAbp0_CCqGEfRyvJBCC0h-zpysfgtM",
  authDomain: "vide-sharing-auth-dev.firebaseapp.com",
  projectId: "vide-sharing-auth-dev",
  storageBucket: "vide-sharing-auth-dev.appspot.com",
  messagingSenderId: "570915532774",
  appId: "1:570915532774:web:8a311f519b745d62e9f027",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
