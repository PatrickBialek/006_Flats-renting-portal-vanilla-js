// This import loads the firebase namespace.
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import {
	html,
	core
} from "../app.js";

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

	// User account
	checkIfUserIsLogIn() {
		firebase.auth().onAuthStateChanged(user => {
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
		const email = document.querySelector("#user-email").value,
			password = document.querySelector("#user-password").value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(email),
			errors = [];

		if (isEmailCorrect) {
			firebase
				.auth()
				.setPersistence(firebase.auth.Auth.Persistence.SESSION)
				.then(() => {
					return firebase.auth().signInWithEmailAndPassword(email, password);
				})
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;

					console.log("error code: " + errorCode);
					console.log("error message: " + errorMessage);

					errors.push(errorMessage);
					html.displayError(errors);
				});
		} else {
			errors.push("Format of email adress is wrong.");
			html.displayError(errors);
		}
	}

	signUp() {
		const email = document.querySelector("#new-user-mail-adress").value,
			password = document.querySelector("#new-user-password").value,
			re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isEmailCorrect = re.test(email),
			errors = [];

		if (isEmailCorrect) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;

					console.log("error code: " + errorCode);
					console.log("error message: " + errorMessage);

					errors.push(errorMessage);
					html.displayError(errors);
				});
		} else {
			errors.push("Format of email adress is wrong.");
			html.displayError(errors);
		}
	}

	continueWithFacebook() {
		console.log("facebook");
		const provider = new firebase.auth.FacebookAuthProvider();
		const errors = [];

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken;
				const user = result.user;
			})
			.catch(error => {
				const errorCode = error.code,
					errorMessage = error.message,
					email = error.email,
					credential = error.credential;

				console.log("error code: " + errorCode);
				console.log("error message: " + errorMessage);
				console.log("error email: " + email);
				console.log("error credential: " + credential);

				errors.push(errorMessage);
			});
	}

	continueWithGoogle() {
		console.log("google");
		const provider = new firebase.auth.GoogleAuthProvider();
		const errors = [];

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken;
				const user = result.user;
			})
			.catch(error => {
				const errorCode = error.code,
					errorMessage = error.message,
					email = error.email,
					credential = error.credential;

				console.log("error code: " + errorCode);
				console.log("error message: " + errorMessage);
				console.log("error email: " + email);
				console.log("error credential: " + credential);

				errors.push(errorMessage);
			});
	}

	signOut() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				html.logInTemplate();
			})
			.catch(error => {
				console.log(error);
			});
	}

	validateUserFlatForm() {
		const city = document.querySelector("#add-flat-city").value,
			rooms = document.querySelector("#add-flat-rooms").value,
			price = document.querySelector("#add-flat-price").value,
			propertyType = document.querySelector("#add-flat-property-type").value,
			deposit = document.querySelector("#add-flat-deposit").value,
			houseShare = document.querySelector("#add-flat-house-share").value;

		if (city != "" && rooms != "" && price != "" && propertyType != "" && deposit != "" && houseShare != "") {
			core.addUserFlatToDataBase(city, rooms, price, propertyType, deposit, houseShare);
		} else {
			console.log("select all fields!");
		}
	}

	removeUserFlatFromDataBase() {
		console.log("remove flat");
	}

	addUserFlatToDataBase(city, rooms, pricePerMonth, propertyType, deposit, houseShare) {
		const key = Object.keys(sessionStorage)[0],
			userSession = JSON.parse(sessionStorage.getItem(key)),
			userEmail = userSession.email,
			pricePerWeek = (Number(pricePerMonth) / 4);

		const flat = {
			city: city,
			rooms: rooms,
			pricePerWeek: pricePerWeek,
			pricePerMonth: pricePerMonth,
			propertyType: propertyType,
			deposit: deposit,
			houseShare: houseShare,
			userEmail: userEmail,
			readyToPublish: false
		};

		const uniqueKey = Date.now() + Math.floor(Math.random() * 100),
			db = firebase.database().ref("flats/" + uniqueKey);

		db.set(flat);
		html.resetAddFlatFields();
		html.flatHasBeenAdded();
	}

	// Main page
	getFlatsFromDataBase() {
		const flat = firebase.database().ref("flats/");
		const flats = [];
		const flatsContainer = document.querySelector('#flats-container');

		flatsContainer.innerHTML = "";

		flat.on("child_added", (data) => {
			const flatData = data.val();
			flats.push(flatData);

			if (flatData.readyToPublish === true) {
				html.flatsTemplateOnMainPage(flatData, flatsContainer);
			}

		});

		return flats;
	}
}

export {
	CORE
};