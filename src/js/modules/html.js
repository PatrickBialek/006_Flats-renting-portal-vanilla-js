import {
	main,
	html,
	core
} from '../app.js';

import {
	flatsContainer
} from '../modules/search';


// Here are placed html templates 
class HTML {
	addFlatTemplate() {

		// User area HTML templates
		const addFlatTemplateHTML = `
		<div class="account-area__1-of-3">
			<div class="account-area__title">
				<h2>Add new:</h2>
			</div>
			<div class="add-flat">
				<div class="add-flat__row">
					<label class="add-flat__label" for="add-flat-city">City:</label>
					<select class="add-flat__select" id="add-flat-city">
						<option value="">Select</option>
						<option value="Aberdeen">Aberdeen</option>
						<option value="Birmingham">Birmingham</option>
						<option value="Cardiff">Cardiff</option>
						<option value="Derby">Derby</option>
						<option value="Glasgow">Glasgow</option>
						<option value="Leeds">Leeds</option>
						<option value="Liverpool">Liverpool</option>
						<option value="London">London</option>
						<option value="Manchester">Manchester</option>
						<option value="Portsmouth">Portsmouth</option>
						<option value="York">York</option>
					</select>
				</div>
				<div class="add-flat__row">
					<label class="add-flat__label" for="add-flat-rooms">Rooms:</label>
					<select class="add-flat__select" id="add-flat-rooms">
						<option value="">Select</option>
						<option value="1">Studio</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select>
				</div>
				<div class="add-flat__row">
					<label class="add-flat__label" for="add-flat-price">Fee per month in £:</label>
					<input class="range" type="range" id="add-flat-price" name="price" value="200" min="0" max="1000" value="100" step="10">
					<span class="add-flat__label margin-top-medium">Price: <span class="add-flat__result" id="add-flat-chosen-price-container"></span><span>
				</div>
				<div class="add-flat__row">
					<label class="add-flat__label" for="add-flat-property-type">Property type:</label>
					<select class="add-flat__select" id="add-flat-property-type">
						<option value="">Select</option>
						<option value="detached">Detached</option>
						<option value="semi-detached">Semi detached</option>
						<option value="terraced">Terraced</option>
						<option value="flat">Flat</option>
						<option value="bungalow">Bungalow</option>
						<option value="student-hall">Student Hall</option>
					</select>
				</div>
				<div class="add-flat__row">
					<label class="add-flat__label" for="add-flat-deposit">Deposit</label>
					<select class="add-flat__select" id="add-flat-deposit">
						<option value="">Select</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<div class="add-flat__row">
					<label class="add-flat__label" for="add-flat-house-share">House share</label>
					<select class="add-flat__select" id="add-flat-house-share">
						<option value="">Select</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<input class="btn btn--green margin-bottom-medium" type="submit" id="add-flat" value="Add">
			</div>
		</div>
		`;

		main.innerHTML = addFlatTemplateHTML;
	}

	createAccountTemplate() {
		const createAccountTemplateHTML = `
			<div class="create-account margin-bottom-medium">
				<div class="create-account__row">
					<a href="#" class="sign-up-btn sign-up-btn--facebook" id="continue-with-facebook">
						<i class="fa fa-facebook visible-xs"></i>
						<span class="hidden-xs">Continue with Facebook</span>
					</a>
				</div>
				<div class="create-account__row">
					<a href="#" class="sign-up-btn sign-up-btn--google" id="continue-with-google">
						<i class="fa fa-google-plus visible-xs"></i>
						<span class="hidden-xs">Continue with Google</span>
					</a>
				</div>
				<div class="create-account__row">
					<input class="create-account__field" type="text" placeholder="Your e-mail..." id="new-user-mail-adress">
				</div>
				<div class="create-account__row">
					<input class="create-account__field" type="password" placeholder="Your password..." id="new-user-password">
				</div>
				<input class="btn btn--green margin-bottom-medium" type="submit" id="sign-up" value="Create">
				<span class="create-account__negation" id="have-account-text">I have an account</span>
			</div>
			<div class="create-account__error-field" id="error-field"></div>
		`;

		main.innerHTML = createAccountTemplateHTML;

		const signInText = document.querySelector('#have-account-text');
		signInText.addEventListener("click", html.logInTemplate);

		const signUpBtn = document.querySelector('#sign-up');
		signUpBtn.addEventListener("click", core.signUp);

		const facebookBtn = document.querySelector('#continue-with-facebook');
		facebookBtn.addEventListener("click", core.continueWithFacebook);

		const googleBtn = document.querySelector('#continue-with-google');
		googleBtn.addEventListener("click", core.continueWithGoogle);
	}

	logInTemplate() {
		const logInTemplateHTML = `
			<div class="log-in margin-bottom-medium">
				<div class="log-in__row">
					<input class="log-in__field" type="text" placeholder="Your e-mail..." id="user-email">
				</div>
				<div class="log-in__row">
					<input class="log-in__field" type="password" placeholder="Your password..." id="user-password">
				</div>
				<input class="btn btn--green margin-bottom-medium" type="submit" id="log-in" value="Log In">
				<span class="log-in__negation" id="dont-have-account-text">I don't have an account</span>
			</div>
			<div class="log-in__error-field" id="error-field"></div>
		`;

		main.innerHTML = logInTemplateHTML;

		const signUpText = document.querySelector('#dont-have-account-text');
		signUpText.addEventListener("click", html.createAccountTemplate);

		const signInBtn = document.querySelector('#log-in');
		signInBtn.addEventListener("click", core.signIn);
	}

	userFlats() {
		const flatsContainerTemplate = `
			<div class="account-area__2-of-3">
				<div class="account-area__title margin-left-medium">
					<h2>Your flats:</h2>
				</div>
				<div class="user-flats">
					<div class="user-flats__container"></div>
				</div>
				<div class="sign-out margin-left-medium">
					<input class="btn btn--green margin-top-medium" type="submit" id="sign-out-user" value="Sign Out">
				</div>
			</div>
		`;

		main.innerHTML += flatsContainerTemplate;
	}

	userSingedInListeners() {
		const signOutBtn = document.querySelector('#sign-out-user');
		signOutBtn.addEventListener("click", core.signOut);

		const priceRange = document.querySelector('#add-flat-price');
		priceRange.addEventListener('input', html.showUserFlatPrice);

		const addFlatBtn = document.querySelector('#add-flat');
		addFlatBtn.addEventListener('click', core.addUserFlatToDataBase);
	}

	userSingedIn() {
		html.addFlatTemplate();
		html.userFlats();
		html.userSingedInListeners();
	}

	displayError(errors) {
		const errorField = document.querySelector('#error-field');
		errorField.innerHTML = "";

		errors.forEach(error => {
			const log = document.createElement('span');
			log.classList.add('single-error');
			log.innerText = error;

			errorField.appendChild(log);
		})
	}

	showUserFlatPrice() {
		const priceContainer = document.querySelector('#add-flat-chosen-price-container');
		const price = event.target.value;

		priceContainer.innerHTML = price;
	}

	singleFlatTemplateOnMyAccountPage() {

	}

	removeSingleFlatOnMyAccountPage() {

	}

	// Main page HTML templates
	flatsTemplateOnMainPage(flats) {
		console.log(flats);

		// will be use later
		/*flats.forEach(flat => {
			const TemplateHTML = `
			<div class="cars__single-car">
				<h1>${flat.city}</h1>
			</div>
			`;

			flatsContainer.innerHTML += TemplateHTML;
		});*/
	}

	cleanFlatsContainerMainPage() {
		flatsContainer.innerHTML = null;
	}

	noResultContainerMainPage() {
		const noResultHTML = `
			<div class="no-result">
				<span class="no-result__title">No results found</span>
				<span class="no-result__description">You can change filters if you want find a car</span>
			</div>
		`;

		flatsContainer.innerHTML = noResultHTML;
	}
}

export {
	HTML
};