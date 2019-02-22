import {
	main,
	html
} from '../account-app.js';

// Here are placed html templates 
class HTML {
	addFlatTemplate() {
		const addFlatTemplateHTML = `
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
					<input class="create-account__field" type="text" id="add-flat-price">
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
		`;

		main.innerHTML = addFlatTemplateHTML;
	}

	createAccountTemplate() {
		const createAccountTemplateHTML = `
			<div class="create-account margin-bottom-medium">
				<div class="create-account__row">
					<label class="create-account__label" for="new-user-mail-adress">Mail adress:</label>
					<input class="create-account__field" type="text" id="new-user-mail-adress">
				</div>
				<div class="create-account__row">
					<label class="create-account__label" for="new-user-nick">Login: </label>
					<input class="create-account__field" type="text" id="new-user-nick">
				</div>
				<div class="create-account__row">
					<label class="create-account__label" for="new-user-password">Password:</label>
					<input class="create-account__field" type="password" id="new-user-password">
				</div>
				<div class="create-account__row">
					<label class="create-account__label" for="new-user-password">Repeat Password:</label>
					<input class="create-account__field" type="password" id="new-user-password-repeat">
				</div>
				<input class="btn btn--green margin-bottom-medium" type="submit" id="log-in" value="Create">
				<span class="create-account__negation" id="have-account-text">I have an account</span>
			</div>
		`;

		main.innerHTML = createAccountTemplateHTML;

		const signUpText = document.querySelector('#have-account-text');
		signUpText.addEventListener("click", html.logInTemplate);
	}

	logInTemplate() {
		const logInTemplateHTML = `
			<div class="log-in margin-bottom-medium">
				<div class="log-in__row">
					<label class="log-in__label" for="user-nick">Login:</label>
					<input class="log-in__field" type="text" id="user-nick">
				</div>
				<div class="log-in__row">
					<label class="log-in__label" for="user-password">Password:</label>
					<input class="log-in__field" type="password" id="user-password">
				</div>
				<input class="btn btn--green margin-bottom-medium" type="submit" id="log-in" value="Log In">
				<span class="log-in__negation" id="dont-have-account-text">I don't have an account</span>
			</div>
		`;

		main.innerHTML = logInTemplateHTML;

		const signInText = document.querySelector('#dont-have-account-text');
		signInText.addEventListener("click", html.createAccountTemplate);
	}
}

export {
	HTML
};