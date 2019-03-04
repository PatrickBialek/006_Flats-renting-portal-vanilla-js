//import "./modules/search";

import {
	CORE
} from './modules/core.js';
import {
	HTML
} from './modules/html.js';
import {
	SEARCH
} from './modules/search.js';

const html = new HTML(),
	search = new SEARCH(),
	core = new CORE(),
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
	search
};