import * as ActionTypes from './ActionTypes';

export const Cities = (state = {errMess: null, cities: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_CITY:
            const city = action.payload;
            return {...state, cities: state.cities.concat(city)};

        case ActionTypes.CITY_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_CITIES:
            return {...state, errMess: null, cities: action.payload};

        case ActionTypes.DELETE_CITY:
            return {...state, cities: state.cities.filter((city) => city.id !== action.payload)};

        default: return state;
    }
};