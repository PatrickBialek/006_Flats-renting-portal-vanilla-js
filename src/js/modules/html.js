import {
	main,
	html,
	core
} from '../app.js';

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
					<label class="add-flat__label" for="add-flat-address">Address:</label>
					<input class="add-flat__text-field" input="text" id="add-flat-address"> 
				</div>
				<div class="add-flat__row">
					<label class="add-flat__label" for="add-flat-description">Description (max 150 characters):</label>
					<textarea class="add-flat__text-area" id="add-flat-description" maxlength="120"></textarea>
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
					<span class="add-flat__label margin-top-medium">Price: <span class="add-flat__result" id="add-flat-chosen-price-container">200</span><span>
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
						<option value="Yes">Yes</option>
						<option value="No">No</option>
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
				<div class="account-area__title">
					<h2>Your flats:</h2>
				</div>
				<div class="user-flats" id="user-flats-container">
				</div>
				<div class="sign-out">
					<input class="btn btn--green" type="submit" id="sign-out-user" value="Sign Out">
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
		addFlatBtn.addEventListener('click', core.validateUserFlatForm);

		const removeFlatBtns = Array.from(document.querySelectorAll('.user-flats__remove'));
		removeFlatBtns.forEach(removeFlatBtn => removeFlatBtn.addEventListener('click', html.removeSingleFlatOnMyAccountPage));
	}

	userSingedIn() {
		html.addFlatTemplate();
		html.userFlats();
		core.getUserFlatsFromDataBase();
		setTimeout(() => {
			html.userSingedInListeners();
		}, 1500);
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

	singleFlatTemplateOnMyAccountPage(flat, flatsContainer) {
		const singleFlatTemplateHTML = `
			<div class="user-flats__single-flat-container" id="${flat.id}">
				<div class="user-flats__user-tools">
					<button class="btn user-flats__edit">Edit</button>
					<button class="btn user-flats__remove">Remove</button>
				</div>
				<div class="user-flats__single-flat">
					<div class="user-flats__content-box">
						<div class="user-flats__top-box">
							<div class="user-flats__info-box">
								<h3 class="user-flats__title">Rooms: ${flat.rooms}, City: ${flat.city}</h3>
								<span class="user-flats__adress">Address: ${flat.address}</span>
								<p class="user-flats__description">Opis: ${flat.description}</p>
							</div>
						</div>
						<div class="user-flats__bottom-box">
							<span class="user-flats__contact-box">${flat.userEmail}</span>
						</div>
						<div class="user-flats__bottom-box">
							<div>
								<span>Per month: <span class="user-flats__price user-flats__price--per-month">${flat.pricePerMonth} £, </span></span>
								<span>Per week: <span class="user-flats__price user-flats__price--per-week">${flat.pricePerWeek} £</span></span>
							</div>
						</div>
					</div>
				</div>
			`;

		flatsContainer.innerHTML += singleFlatTemplateHTML;
	}

	editSingleFlatTemplateOnMyAccountPage() {

	}

	removeSingleFlatOnMyAccountPage(e) {
		const r = confirm("Are you sure?");

		if (r) {
			const flatsContainer = document.querySelector('#user-flats-container'),
				flatToolsContainer = e.target.parentElement,
				flatContainer = flatToolsContainer.parentElement,
				id = flatContainer.id;

			flatsContainer.removeChild(flatContainer);
			core.removeUserFlatFromDataBase(id);
		}
	}

	resetAddFlatFields() {
		const city = document.querySelector("#add-flat-city"),
			address = document.querySelector("#add-flat-address"),
			description = document.querySelector("#add-flat-description"),
			rooms = document.querySelector("#add-flat-rooms"),
			price = document.querySelector("#add-flat-price"),
			propertyType = document.querySelector("#add-flat-property-type"),
			deposit = document.querySelector("#add-flat-deposit"),
			houseShare = document.querySelector("#add-flat-house-share");

		city.value = "";
		address.value = "";
		description.value = "";
		rooms.value = "";
		price.value = "";
		propertyType.value = "";
		deposit.value = "";
		houseShare.value = "";
	}

	flatHasBeenAdded() {
		console.log('Flat has been succesfully aded');
	}

	// Main page HTML templates
	flatTemplateOnMainPage(flat, flatsContainer) {
		const singleFlatTemplateHTML = `
			<div class="flats__single-flat">
				<div class="flats__half-content-box padding-bottom-medium">
					<div class="flats__top-box">
						<div class="flats__single-image-box">
							<img src="" alt="" class="flats__image">
						</div>
						<div class="flats__single-image-box">
							<img src="" alt="" class="flats__image">
						</div>
					</div>
					<div class="flats__bottom-box">
						<div>
							<span>Per month: <span class="flats__price flats__price--per-month">${flat.pricePerMonth} £</span></span>
							<span>Per week: <span class="flats__price flats__price--per-week">${flat.pricePerWeek} £</span></span>
						</div>
					</div>
				</div>
				<div class="flats__half-content-box padding-y-medium">
					<div class="flats__top-box">
						<div class="flats__info-box">
								<h3 class="flats__title">Rooms: ${flat.rooms}, City: ${flat.city}</h3>
								<span class="flats__adress">Address: ${flat.address}</span>
								<p class="flats__description">Opis: ${flat.description}</p>
							</div>
						</div>
						<div class="flats__bottom-box">
							<span class="flats__contact-box">${flat.userEmail}</span>
					</div>
				</div>
			</div>
		`;

		flatsContainer.innerHTML += singleFlatTemplateHTML;
	}

	cleanFlatsContainerMainPage(flatsContainer) {
		flatsContainer.innerHTML = "";
	}

	flatsFilteringTemplateMainPage(flats) {
		const flatsContainer = document.querySelector('#flats-container');
		html.cleanFlatsContainerMainPage(flatsContainer);

		console.log(flats);

		flats.forEach(flat => {
			html.flatTemplateOnMainPage(flat, flatsContainer);
		});
	}

	noResultTemplateMainPage() {
		const flatsContainer = document.querySelector('#flats-container');

		const noResultHTML = `
			<div class="no-result">
				<span class="no-result__title">No results found</span>
				<span class="no-result__description">You can change filters if you want find a </span>
			</div>
		`;

		flatsContainer.innerHTML = noResultHTML;
	}
}

export {
	HTML
};