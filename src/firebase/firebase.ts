import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
export const config = {
	apiKey: "AIzaSyCK2SgI-0WJATQClvD-RdyCqLPBq9g9TmA",
	authDomain: "tevinoatenas.firebaseapp.com",
	projectId: "tevinoatenas",
	storageBucket: "tevinoatenas.appspot.com",
	messagingSenderId: "1076091938767",
	appId: "1:1076091938767:web:19f14897530f6b6358d4ba"
};


const app = initializeApp(config);

export  const db = getFirestore(app);
