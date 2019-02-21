import {
	main
} from '../account.js';

class CreateAccount {
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
			<span class="create-account__negation" id="dont-have-account-text">I have an account</span>
		</div>
		`;

		main.innerHTML = createAccountTemplateHTML;
	}
}

export {
	CreateAccount
};