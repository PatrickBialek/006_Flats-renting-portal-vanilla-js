// This import loads the firebase namespace.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import {
	HTML
} from './account-modules/html.js';
import {
	CORE
} from './account-modules/core.js';

const html = new HTML(),
	core = new CORE(),
	main = document.querySelector('#account-area-main');

core.initializeFirebase();

export {
	main,
	html
};