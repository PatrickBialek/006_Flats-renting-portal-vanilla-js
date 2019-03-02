import {
	SEARCH
} from './search-modules/1-search-module';

import {
	html
} from '../app';

const flatsContainer = document.querySelector("#flats-container");
const search = new SEARCH();

// Check if main page is visiting
if (flatsContainer) {

	const city = document.querySelector("#city"),
		rooms = document.querySelector("#rooms"),
		min = document.querySelector("#min"),
		max = document.querySelector("#max"),
		propertyType = document.querySelector("#property-type"),
		deposit = document.querySelector("#deposit"),
		houseShare = document.querySelector("#house-share"),
		searchFields = {
			city: "",
			rooms: "",
			price: "",
			propertyType: "",
			deposit: "",
			houseShare: ""
		};

	document.addEventListener("DOMContentLoaded", () => {
		//search.showFlats(flats);
		html.flatsTemplateOnMainPage();
	});

	city.addEventListener("input", e => {
		searchFields.city = e.target.value;
		search.filterFlats();
	});

	rooms.addEventListener("input", e => {
		searchFields.rooms = Number(e.target.value);
		search.filterFlats();
	});

	min.addEventListener("input", e => {
		search.filterFlats();
	});

	max.addEventListener("input", e => {
		searchFields.max = Number(e.target.value);
		search.filterFlats();
	});

	propertyType.addEventListener("input", e => {
		searchFields.propertyType = Number(e.target.value);
		search.filterFlats();
	});

	deposit.addEventListener("input", e => {
		searchFields.deposit = e.target.value;
		search.filterFlats();
	});

	houseShare.addEventListener("input", e => {
		searchFields.houseShare = e.target.value;
		search.filterFlats();
	});
}

export {
	search,
	flatsContainer
};