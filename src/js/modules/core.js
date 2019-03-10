// This import loads the firebase namespace.
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import {
	html,
	core
} from "../app.js";

// Here is placed logic responsible for account servicing and main page filtering
class CORE {
	initializeFirebase() {
		const config = {
			apiKey: "AIzaSyCfxl3d-HELgOY1fFrajWboqsZ1cPswV48",
			authDomain: "rent-a-flat-3f002.firebaseapp.com",
			databaseURL: "https://rent-a-flat-3f002.firebaseio.com",
			projectId: "rent-a-flat-3f002",
			storageBucket: "rent-a-flat-3f002.appspot.com",
			messagingSenderId: "756883896135"
		};

		firebase.initializeApp(config);
	}

	// User account functions
	checkIfUserIsLogIn() {
		html.cleanErrors();

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
		html.cleanErrors();

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
					const errorCode = error.code,
						errorMessage = error.message;

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
		html.cleanErrors();

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
					const errorCode = error.code,
						errorMessage = error.message;

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
		html.cleanErrors();

		const provider = new firebase.auth.FacebookAuthProvider(),
			errors = [];

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken,
					user = result.user;
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
		html.cleanErrors();

		const provider = new firebase.auth.GoogleAuthProvider(),
			errors = [];

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken,
					user = result.user;

				console.log(token);
				console.log(user);
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
		html.cleanErrors();

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
			address = document.querySelector("#add-flat-address").value,
			description = document.querySelector("#add-flat-description").value,
			rooms = Number(document.querySelector("#add-flat-rooms").value),
			price = document.querySelector("#add-flat-price").value,
			propertyType = document.querySelector("#add-flat-property-type").value,
			deposit = document.querySelector("#add-flat-deposit").value,
			houseShare = document.querySelector("#add-flat-house-share").value;

		if (city != "" && address != "" && description != "" && rooms != "" && price != "" && propertyType != "" && deposit != "" && houseShare != "") {
			core.addUserFlatToDataBase(city, address, description, rooms, price, propertyType, deposit, houseShare);
		} else {
			html.flatNotAdded();

			setTimeout(() => {
				html.cleanErrors();
			}, 5000);
		}
	}

	getUserFlatsFromDataBase() {
		const flat = firebase.database().ref("flats/"),
			userFlatsContainer = document.querySelector("#user-flats-container"),
			key = Object.keys(sessionStorage)[0],
			userSession = JSON.parse(sessionStorage.getItem(key));

		if (userSession != null) {
			const userEmail = userSession.email;

			flat.on("child_added", data => {
				const flatData = data.val();

				if (flatData.userEmail === userEmail) {
					html.singleFlatTemplateOnMyAccountPage(flatData, userFlatsContainer);
				}
			});
		}
	}

	addUserFlatToDataBase(city, address, description, rooms, pricePerMonth, propertyType, deposit, houseShare) {
		const key = Object.keys(sessionStorage)[0],
			userSession = JSON.parse(sessionStorage.getItem(key)),
			userEmail = userSession.email,
			pricePerWeek = Number(pricePerMonth) / 4,
			id = Date.now() + Math.floor(Math.random() * 100);

		const flat = {
			id: id,
			city: city,
			address: address,
			description: description,
			rooms: rooms,
			pricePerWeek: pricePerWeek,
			pricePerMonth: pricePerMonth,
			propertyType: propertyType,
			deposit: deposit,
			houseShare: houseShare,
			userEmail: userEmail,
			readyToPublish: false
		};

		const db = firebase.database().ref("flats/" + id);

		db.set(flat);
		html.resetAddFlatFields();
		html.displaySuccess();

		setTimeout(() => {
			html.cleanSuccess();
		}, 5000);
	}

	removeUserFlatFromDataBase(id) {
		const flat = firebase.database().ref("flats/" + id);
		flat.remove();
	}

	// Main page
	addListenersToSearchField(flats) {
		const flatsContainer = document.querySelector("#flats-container");

		if (flatsContainer) {
			const city = document.querySelector("#city"),
				rooms = document.querySelector("#rooms"),
				min = document.querySelector("#min"),
				max = document.querySelector("#max"),
				propertyType = document.querySelector("#property-type"),
				deposit = document.querySelector("#deposit"),
				houseShare = document.querySelector("#house-share");

			const searchFields = {
				city: "",
				rooms: "",
				price: "",
				propertyType: "",
				deposit: "",
				houseShare: ""
			};

			city.addEventListener("input", e => {
				searchFields.city = e.target.value;
				core.filteringFlatsOnMainPage(flats, searchFields);
			});

			rooms.addEventListener("input", e => {
				searchFields.rooms = Number(e.target.value);
				core.filteringFlatsOnMainPage(flats, searchFields);
			});

			min.addEventListener("input", e => {
				searchFields.min = Number(e.target.value);
				core.filteringFlatsOnMainPage(flats, searchFields);
			});

			max.addEventListener("input", e => {
				searchFields.max = Number(e.target.value);
				core.filteringFlatsOnMainPage(flats, searchFields);
			});

			propertyType.addEventListener("input", e => {
				searchFields.propertyType = e.target.value;
				core.filteringFlatsOnMainPage(flats, searchFields);
			});

			deposit.addEventListener("input", e => {
				searchFields.deposit = e.target.value;
				core.filteringFlatsOnMainPage(flats, searchFields);
			});

			houseShare.addEventListener("input", e => {
				searchFields.houseShare = e.target.value;
				core.filteringFlatsOnMainPage(flats, searchFields);
			});

			return searchFields;
		}
	}

	getFlatsFromDataBase() {
		const flat = firebase.database().ref("flats/"),
			flats = [],
			flatsContainer = document.querySelector("#flats-container");

		flatsContainer.innerHTML = "";

		flat.on("child_added", data => {
			const flat = data.val();

			if (flat.readyToPublish === true) {
				html.flatTemplateOnMainPage(flat, flatsContainer);
				flats.push(flat);
			}
		});

		core.addListenersToSearchField(flats);
	}

	filteringFlatsOnMainPage(flats, searchFields) {
		const result = flats
			.filter(flat => {
				if (searchFields.city) {
					return flat.city === searchFields.city;
				} else {
					return flat;
				}
			})
			.filter(flat => {
				if (searchFields.rooms) {
					return flat.rooms === searchFields.rooms;
				} else {
					return flat;
				}
			})
			.filter(flat => {
				if (searchFields.min) {
					return flat.pricePerMonth >= searchFields.min;
				} else {
					return flat;
				}
			})
			.filter(flat => {
				if (searchFields.max) {
					return flat.pricePerMonth <= searchFields.max;
				} else {
					return flat;
				}
			})
			.filter(flat => {
				if (searchFields.propertyType) {
					return flat.propertyType === searchFields.propertyType;
				} else {
					return flat;
				}
			})
			.filter(flat => {
				if (searchFields.deposit) {
					return flat.deposit === searchFields.deposit;
				} else {
					return flat;
				}
			})
			.filter(flat => {
				if (searchFields.houseShare) {
					return flat.houseShare === searchFields.houseShare;
				} else {
					return flat;
				}
			});

		if (result.length) {
			html.flatsFilteringTemplateMainPage(result);
		} else {
			html.noResultTemplateMainPage();
		}
	}
}

export {
	CORE
};