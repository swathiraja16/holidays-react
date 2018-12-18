import * as ActionTypes from './ActionTypes';

export const Countries = (state = {errMess: null, countries: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_COUNTRY:
            const name = action.payload;
            return {...state, countries: state.countries.concat(name)};

        case ActionTypes.COUNTRY_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COUNTRIES:
            return {...state, errMess: null, countries: action.payload};

        case ActionTypes.DELETE_COUNTRY:
            return {...state, countries: state.countries.filter((country) => country.id !== action.payload)};

        default: return state;
    }
};