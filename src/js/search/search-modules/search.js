import {
	flatsContainer,
	search
} from '../search-app.js';

class SEARCH {
	clearHTML() {
		flatsContainer.innerHTML = null;
	}

	showFlats(flats) {
		search.clearHTML();

		flats.forEach(flat => {
			const TemplateHTML = `
			<div class="cars__single-car">
				<h1>${flat.city}</h1>
			</div>
			`;

			flatsContainer.innerHTML += TemplateHTML;
		});
	}

	noResult() {
		search.clearHTML();

		const noResultHTML = `
				<div class="no-result">
					<span class="no-result__title">No results found</span>
					<span class="no-result__description">You can change filters if you want find a car</span>
				</div>
			`;
		flatsContainer.innerHTML = noResultHTML;
	}

	filterFlats() {
		const result = flats
			.filter(filterCity)
			.filter(filterRooms)
			.filter(filterMinPrice)
			.filter(filterMaxPrice)
			.filter(filterPropertyType)
			.filter(filterDeposit)
			.filter(filterHouseShare);

		if (result.length) {
			search.showFlats(result);
		} else {
			search.noResult();
		}
	}

	filterCity(flat) {
		if (searchFields.flat) {
			return flat.city === searchFields.city;
		} else {
			return flat;
		}
	}

	filterRooms(flat) {
		if (searchFields.rooms) {
			return flat.rooms === searchFields.rooms;
		} else {
			return flat;
		}
	}

	filterMinPrice(flat) {
		if (searchFields.min) {
			return flat.price >= searchFields.min;
		} else {
			return flat;
		}
	}

	filterMaxPrice(flat) {
		if (searchFields.max) {
			return flat.price <= searchFields.max;
		} else {
			return flat;
		}
	}

	filterPropertyType(flat) {
		if (searchFields.propertyType) {
			return flat.propertyType === searchFields.propertyType;
		} else {
			return car;
		}
	}

	filterDeposit(flat) {
		if (searchFields.deposit) {
			return flat.deposit === searchFields.deposit;
		} else {
			return flat;
		}
	}

	filterHouseShare(flat) {
		if (searchFields.houseShare) {
			return flat.houseShare === searchFields.houseShare;
		} else {
			return flat;
		}
	}
}

export {
	SEARCH
};