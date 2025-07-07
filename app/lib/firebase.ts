// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCiDdhBoAf6bw8KWmm3Yh6-o07D5bphrss",
  authDomain: "refundswebsite.firebaseapp.com",
  projectId: "refundswebsite",
  storageBucket: "refundswebsite.firebasestorage.app",
  messagingSenderId: "187171025498",
  appId: "1:187171025498:web:20b9376cbcbadccdea5e63",
  measurementId: "G-6WCX7G9QXG",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

export { db };
