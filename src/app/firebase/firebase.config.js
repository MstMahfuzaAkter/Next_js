import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBsqxADIGpaCFDhgEgnWKR8J0LEXxubPgo",
  authDomain: "grocery-8b3b5.firebaseapp.com",
  projectId: "grocery-8b3b5",
  storageBucket: "grocery-8b3b5.firebasestorage.app",
  messagingSenderId: "200964545277",
  appId: "1:200964545277:web:853ea9058a5aaa0903bc94"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;