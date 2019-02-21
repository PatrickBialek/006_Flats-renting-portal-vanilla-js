import {
	main
} from '../account.js';

class AddFlat {
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
}

export {
	AddFlat
};