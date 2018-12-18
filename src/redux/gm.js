import * as ActionTypes from './ActionTypes';

export const GregorianMonthDay = (state = {errMess: null, gm: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_GM:
            const gm = action.payload;
            return {...state, gm: state.gm.concat(gm)};

        case ActionTypes.GM_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_GMS:
            return {...state, errMess: null, gm: action.payload};

        case ActionTypes.DELETE_GM:
            return {...state, gm: state.gm.filter((gm) => gm.id !== action.payload)};

        default: return state;
    }
};