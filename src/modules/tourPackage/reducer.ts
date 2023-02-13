import { Actions, TourPackageActionTypes, ITourPackageState } from './types';

const initialState: ITourPackageState = {
	tours: [],
};

export const tourPackage = (state = initialState, action: TourPackageActionTypes): ITourPackageState => {
	switch (action.type) {
	case Actions.GET_TOUR_PACKAGE_LIST_FULFILLED: {
		return {
			...state,
			tours: [...action.payload],
		};
	}
	default: {
		return { ...state };
	}
	}
};
