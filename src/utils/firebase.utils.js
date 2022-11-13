// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	query,
	where,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "concodehackathon.firebaseapp.com",
    projectId: "concodehackathon",
    storageBucket: "concodehackathon.appspot.com",
    messagingSenderId: "950544425136",
	appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getQuizInformation = async () => {
	const collectionRef = collection(db, "quizzes");
	const q = query(collectionRef);
	var quizzes = [];
	const querySnapshot = await getDocs(q);
	querySnapshot.docs.reduce((acc, docSnapshot) => {
		quizzes.push(docSnapshot.data());
	}, {});

	return quizzes;
};

export const getQuizByName = async (quizName) => {
	const collectionRef = collection(db, "quizzes");
	const q = query(collectionRef, where('quiz.quizTitle','==',quizName));
	try {
		const querySnapshot = await getDocs(q);	
		let res = []
		querySnapshot.docs.reduce((acc, docSnapshot) => {
			console.log(docSnapshot.data())
			res = docSnapshot.data();
		}, {});
		return res;
	} catch (error) {
		console.error(error);
	}	
}

export const postQuizInformation = async (quiz) => {
	const collectionRef = collection(db, "quizzes");
	try {
		await addDoc(collectionRef, {
			quiz
		});
		alert('Succesfully posted quiz!');
	} catch (error) {

		console.error(error)
		alert('Unsuccesfully posted quiz!');
	}
};	