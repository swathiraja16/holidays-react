import * as ActionTypes from './ActionTypes';

export const ConcernsQuestions = (state = {errMess: null, concernsquestions: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_CQ:
            const cq = action.payload;
            return {...state, concernsquestions: state.concernsquestions.concat(cq)};

        case ActionTypes.CQ_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_CQS:
            return {...state, errMess: null, concernsquestions: action.payload};

        case ActionTypes.DELETE_CQ:
            return {...state, concernsquestions: state.concernsquestions.filter((cq) => cq.id !== action.payload)};

        default: return state;
    }
};