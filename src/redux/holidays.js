import * as ActionTypes from './ActionTypes';

export const Holidays = (state = {errMess: null, holidays: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_HOLIDAY:
            const name = action.payload;
            return {...state, holidays: state.holidays.concat(name)};

        case ActionTypes.HOLIDAY_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_HOLIDAYS:
            return {...state, errMess: null, holidays: action.payload};

        case ActionTypes.DELETE_HOLIDAY:
            return {...state, holidays: state.holidays.filter((holiday) => holiday.id !== action.payload)};

        default: return state;
    }
};