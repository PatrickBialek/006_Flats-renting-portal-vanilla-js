// This import loads the firebase namespace.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import {
	main,
	html,
	core
} from '../account-app.js';
import {
	HTML
} from './html.js';

// Here is placed logic responsible for account servicing
class CORE {
	initializeFirebase() {
		const config = {
			apiKey: "AIzaSyBuQqy8ks1NKE2n7p9ArEzIDNnwwapH1i4",
			authDomain: "rent-a-flat-907b4.firebaseapp.com",
			databaseURL: "https://rent-a-flat-907b4.firebaseio.com",
			projectId: "rent-a-flat-907b4",
			storageBucket: "rent-a-flat-907b4.appspot.com",
			messagingSenderId: "1045860536910"
		};

		firebase.initializeApp(config);
	}

	checkIfUserIsLogIn() {
		firebase.auth()
			.onAuthStateChanged(user => {
				if (user) {
					const user = firebase.auth().currentUser;

					html.userSingedIn();

					if (user != null) {
						const email = user.email;

					}
				} else {
					html.logInTemplate();
				}
			});
	}

	signIn() {
		firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log("error code: " + errorCode);
				console.log("error message: " + errorMessage);
			});
	}

	signUp() {
		const email = document.querySelector('#new-user-mail-adress').value,
			password = document.querySelector('#new-user-password').value;

		firebase.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log("error code: " + errorCode);
				console.log("error message: " + errorMessage);
			});
	}

	signOut() {
		firebase.auth()
			.signOut()
			.then(() => {
				html.logInTemplate();
			})
			.catch(error => {
				console.log(error);
			});
	}
}

export {
	CORE
};