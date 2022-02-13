// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD5-uSvFviPfaayZdmCDP5NIWR7ivOvOPc",
  authDomain: "vineria-e86d5.firebaseapp.com",
  projectId: "vineria-e86d5",
  storageBucket: "vineria-e86d5.appspot.com",
  messagingSenderId: "247633253746",
  appId: "1:247633253746:web:c2f0c389b816d1819579eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{
    return app
}