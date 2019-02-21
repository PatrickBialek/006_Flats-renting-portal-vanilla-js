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

		}

		firebase.initializeApp(config);
	}
}

export {
	CORE
};