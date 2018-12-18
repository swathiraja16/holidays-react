import * as ActionTypes from './ActionTypes';

export const GregorianMonthDaySpecial = (state = {errMess: null, gms: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_GMS:
            const gms = action.payload;
            return {...state, gms: state.gms.concat(gms)};

        case ActionTypes.GMS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_GMSS:
            return {...state, errMess: null, gms: action.payload};

        case ActionTypes.DELETE_GMS:
            return {...state, gms: state.gms.filter((gm) => gm.id !== action.payload)};

        default: return state;
    }
};