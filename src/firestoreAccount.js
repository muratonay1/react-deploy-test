// Firebase 9 ve üstü için ithalat
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Firebase Authentication için

const firebaseConfigs = {
  apiKey: "AIzaSyA5uD6RRngq0U5A9UixPAZUGEJjkmRVrAQ",
  authDomain: "firestoretest-e808e.firebaseapp.com",
  projectId: "firestoretest-e808e",
  storageBucket: "firestoretest-e808e.appspot.com",
  messagingSenderId: "726158898702",
  appId: "1:726158898702:web:7ce97ff55c90d290a5ee5f",
  measurementId: "G-YYNJKELCMX"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfigs);

// Firestore örneği
export const firestore = getFirestore(app);
export const auth = getAuth(app); // Auth servisini başlat
