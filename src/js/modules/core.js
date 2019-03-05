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

	// User account functions
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
		console.log("facebook");
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
		console.log("google");
		const provider = new firebase.auth.GoogleAuthProvider(),
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
			address = document.querySelector("#add-flat-address").value,
			description = document.querySelector("#add-flat-description").value,
			rooms = document.querySelector("#add-flat-rooms").value,
			price = document.querySelector("#add-flat-price").value,
			propertyType = document.querySelector("#add-flat-property-type").value,
			deposit = document.querySelector("#add-flat-deposit").value,
			houseShare = document.querySelector("#add-flat-house-share").value;

		if (city != "" && address != "" && description != "" && rooms != "" && price != "" && propertyType != "" && deposit != "" && houseShare != "") {
			core.addUserFlatToDataBase(city, address, description, rooms, price, propertyType, deposit, houseShare);
		} else {
			console.log("select all fields!");
		}
	}

	getUserFlatsFromDataBase() {
		const flat = firebase.database().ref("flats/"),
			userFlatsContainer = document.querySelector("#user-flats-container"),
			key = Object.keys(sessionStorage)[0],
			userSession = JSON.parse(sessionStorage.getItem(key)),
			userEmail = userSession.email;

		flat.on("child_added", data => {
			const flatData = data.val();

			if (flatData.userEmail === userEmail) {
				html.singleFlatTemplateOnMyAccountPage(flatData, userFlatsContainer);
			}
		});
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
		html.flatHasBeenAdded();
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
				core.filteringFlatsOnMainPage(flats);
			});

			min.addEventListener("input", e => {
				core.filteringFlatsOnMainPage(flats);
			});

			max.addEventListener("input", e => {
				searchFields.max = Number(e.target.value);
				core.filteringFlatsOnMainPage(flats);
			});

			propertyType.addEventListener("input", e => {
				searchFields.propertyType = Number(e.target.value);
				core.filteringFlatsOnMainPage(flats);
			});

			deposit.addEventListener("input", e => {
				searchFields.deposit = e.target.value;
				core.filteringFlatsOnMainPage(flats);
			});

			houseShare.addEventListener("input", e => {
				searchFields.houseShare = e.target.value;
				core.filteringFlatsOnMainPage(flats);
			});
		}
	}

	getFlatsFromDataBase() {
		const flat = firebase.database().ref("flats/"),
			flats = [],
			flatsContainer = document.querySelector("#flats-container");

		flatsContainer.innerHTML = "";

		flat.on("child_added", data => {
			const flatData = data.val();

			if (flatData.readyToPublish === true) {
				html.flatsTemplateOnMainPage(flatData, flatsContainer);
				flats.push(flatData);
			}
		});

		core.addListenersToSearchField(flats);
	}

	filteringFlatsOnMainPage(flats) {
		const result = flats
			.filter(core.filterCity)
			.filter(core.filterRooms)
			.filter(core.filterMinPrice)
			.filter(core.filterMaxPrice)
			.filter(core.filterPropertyType)
			.filter(core.filterDeposit)
			.filter(core.filterHouseShare);

		if (result.length) {
			html.flatsTemplateOnMainPage(flats);
		} else {
			html.noResultContainerMainPage();
		}
	}

	filterCity(flat) {
		console.log(searchFields);

		if (searchFields.city) {
			return flat.city === searchFields.city;
		} else {
			return flat;
		}
	}

	filterRooms(flat) {
		if (searchFields.rooms) {
			return flat.rooms === searchFields.rooms;
		} else {
			return flat;
		}
	}

	filterMinPrice(flat) {
		if (searchFields.min) {
			return flat.price >= searchFields.min;
		} else {
			return flat;
		}
	}

	filterMaxPrice(flat) {
		if (searchFields.max) {
			return flat.price <= searchFields.max;
		} else {
			return flat;
		}
	}

	filterPropertyType(flat) {
		if (searchFields.propertyType) {
			return flat.propertyType === searchFields.propertyType;
		} else {
			return car;
		}
	}

	filterDeposit(flat) {
		if (searchFields.deposit) {
			return flat.deposit === searchFields.deposit;
		} else {
			return flat;
		}
	}

	filterHouseShare(flat) {
		if (searchFields.houseShare) {
			return flat.houseShare === searchFields.houseShare;
		} else {
			return flat;
		}
	}
}

export {
	CORE
};