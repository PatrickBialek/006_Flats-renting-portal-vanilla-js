import {
	AddFlat
} from "./account-modules/add-flat.js";
import {
	CreateAccount
} from "./account-modules/create-account.js";
import {
	LogIn
} from "./account-modules/log-in.js";
import {
	IsUserLogIn
} from "./account-modules/is-user-log-in.js";

const isUserLogIn = new IsUserLogIn();
const createAccount = new CreateAccount();
const logIn = new LogIn();
const addFlat = new AddFlat();

const main = document.querySelector('#account-area-main');

export {
	main
};