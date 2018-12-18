import * as ActionTypes from './ActionTypes';

export const GregorianNthKdayofMonth = (state = {errMess: null, gnk: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_GNK:
            const gnk = action.payload;
            return {...state, gnk: state.gnk.concat(gnk)};

        case ActionTypes.GNK_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_GNKS:
            return {...state, errMess: null, gnk: action.payload};

        case ActionTypes.DELETE_GNK:
            return {...state, gnk: state.gnk.filter((gnk) => gnk.id !== action.payload)};

        default: return state;
    }
};