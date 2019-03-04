import {
	html
} from "../app";


class SEARCH {
	showFlats(flats) {
		html.cleanFlatsContainerMainPage();
		html.flatsTemplateOnMainPage(flats);
	}

	noResult() {
		html.cleanFlatsContainerMainPage();
		html.noResultContainerMainPage();
	}

	filterFlats(flats) {
		console.log(flats);
		const result = flats
			.filter(filterCity)
			.filter(filterRooms)
			.filter(filterMinPrice)
			.filter(filterMaxPrice)
			.filter(filterPropertyType)
			.filter(filterDeposit)
			.filter(filterHouseShare);

		if (result.length) {
			html.flatsTemplateOnMainPage(flats);
		} else {
			html.noResultContainerMainPage();
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