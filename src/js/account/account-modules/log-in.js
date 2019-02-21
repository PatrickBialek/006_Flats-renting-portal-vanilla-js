import {
	main
} from '../account.js';

class LogIn {
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
	}
}