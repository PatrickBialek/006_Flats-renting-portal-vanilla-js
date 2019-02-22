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

					if (user != null) {
						const email = user.email;

					}
				} else {
					html.logInTemplate();

					//const singInText = document.querySelector('#dont-have-account-text');
					//singInText.addEventListener("click", html.createAccountTemplate);

					/*const signUpText = document.querySelector('#have-account-text');
					signUpText.addEventListener("click", html.logInTemplate);*/
				}
			});
	}

	logIn() {
		html.logInTemplate();
		const logInBtn = document.querySelector('#log-in');

		logInBtn.addEventListener('click', () => {
			const nick = document.querySelector('#user-nick').value,
				password = document.querySelector('#user-password').value;

			console.log(nick);
			console.log(password);
		});
	}
}

export {
	CORE
};