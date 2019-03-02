import {
	HTML
} from './modules/html.js';
import {
	CORE
} from './modules/core.js';

const html = new HTML(),
	core = new CORE(),
	main = document.querySelector('#account-area-main'),
	mainAccountArea = document.querySelector('#account-area-main');

core.initializeFirebase();

if (mainAccountArea) {
	core.checkIfUserIsLogIn();
}

export {
	main,
	html,
	core
};