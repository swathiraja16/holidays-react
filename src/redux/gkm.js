import * as ActionTypes from './ActionTypes';

export const GKM = (state = {errMess: null, gkm: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_GKM:
            const gkm = action.payload;
            return {...state, gkm: state.gkm.concat(gkm)};

        case ActionTypes.GKM_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_GKMS:
            return {...state, errMess: null, gkm: action.payload};

        case ActionTypes.DELETE_GKM:
            return {...state, gKm: state.gkm.filter((gkm) => gkm.id !== action.payload)};

        default: return state;
    }
};