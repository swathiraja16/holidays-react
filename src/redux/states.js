import * as ActionTypes from './ActionTypes';

export const States = (state = {errMess: null, states: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_STATE:
            const stateName = action.payload;
            return {...state, states: state.states.concat(stateName)};

        case ActionTypes.STATE_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_STATES:
            return {...state, errMess: null, states: action.payload};

        case ActionTypes.DELETE_STATE:
            return {...state, states: state.states.filter((state) => state.id !== action.payload)};

        default: return state;
    }
};