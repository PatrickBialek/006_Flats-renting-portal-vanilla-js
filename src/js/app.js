const city = document.querySelector("#city"),
	rooms = document.querySelector("#rooms"),
	min = document.querySelector("#min"),
	max = document.querySelector("#max"),
	propertyType = document.querySelector("#property-type"),
	deposit = document.querySelector("#deposit"),
	houseShare = document.querySelector("#house-share"),
	flatsContainer = document.querySelector("#flats-container"),
	searchFields = {
		city: "",
		rooms: "",
		price: "",
		propertyType: "",
		deposit: "",
		houseShare: ""
	};

function clearHTML() {
	flatsContainer.innerHTML = null;
}

function showFlats(flats) {
	clearHTML();

	flats.forEach(flat => {
		const TemplateHTML = `
		<div class="cars__single-car">
			<h1>${flat.city}</h1>
		</div>
		`;

		flatsContainer.innerHTML += TemplateHTML;
	});
}

function noResult() {
	clearHTML();

	const noResultHTML = `
			<div class="no-result">
				<span class="no-result__title">No results found</span>
				<span class="no-result__description">You can change filters if you want find a car</span>
			</div>
		`;
	flatsContainer.innerHTML = noResultHTML;
}

function filterFlats() {
	const result = flats
		.filter(filterCity)
		.filter(filterRooms)
		.filter(filterMinPrice)
		.filter(filterMaxPrice)
		.filter(filterPropertyType)
		.filter(filterDeposit)
		.filter(filterHouseShare);

	if (result.length) {
		showFlats(result);
	} else {
		noResult();
	}
}

function filterCity(flat) {
	if (searchFields.flat) {
		return flat.city === searchFields.city;
	} else {
		return flat;
	}
}

function filterRooms(flat) {
	if (searchFields.rooms) {
		return flat.rooms === searchFields.rooms;
	} else {
		return flat;
	}
}

function filterMinPrice(flat) {
	if (searchFields.min) {
		return flat.price >= searchFields.min;
	} else {
		return flat;
	}
}

function filterMaxPrice(flat) {
	if (searchFields.max) {
		return flat.price <= searchFields.max;
	} else {
		return flat;
	}
}

function filterPropertyType(flat) {
	if (searchFields.propertyType) {
		return flat.propertyType === searchFields.propertyType;
	} else {
		return car;
	}
}

function filterDeposit(flat) {
	if (searchFields.deposit) {
		return flat.deposit === searchFields.deposit;
	} else {
		return flat;
	}
}

function filterHouseShare(flat) {
	if (searchFields.houseShare) {
		return flat.houseShare === searchFields.houseShare;
	} else {
		return flat;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	showFlats(flats);
});

city.addEventListener("input", e => {
	searchFields.city = e.target.value;
	filterFlats();
});

rooms.addEventListener("input", e => {
	searchFields.rooms = Number(e.target.value);
	filterFlats();
});

min.addEventListener("input", e => {
	filterFlats();
});

max.addEventListener("input", e => {
	searchFields.max = Number(e.target.value);
	filterFlats();
});

propertyType.addEventListener("input", e => {
	searchFields.propertyType = Number(e.target.value);
	filterFlats();
});

deposit.addEventListener("input", e => {
	searchFields.deposit = e.target.value;
	filterFlats();
});

houseShare.addEventListener("input", e => {
	searchFields.houseShare = e.target.value;
	filterFlats();
});