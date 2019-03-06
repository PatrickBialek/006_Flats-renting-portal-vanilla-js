import {
	CORE
} from './modules/core.js';
import {
	HTML
} from './modules/html.js';
import {
	ANIMATIONS
} from './animations/animations';

const html = new HTML(),
	core = new CORE(),
	animations = new ANIMATIONS(),
	main = document.querySelector('#account-area-main'),
	mainAccountArea = document.querySelector('#account-area-main'),
	mainPageflatsContainer = document.querySelector("#flats-container");

core.initializeFirebase();

if (mainAccountArea) {
	core.checkIfUserIsLogIn();
}

if (mainPageflatsContainer) {
	document.addEventListener("DOMContentLoaded", () => {
		core.getFlatsFromDataBase();
	});
}

export {
	main,
	html,
	core,
	animations
};