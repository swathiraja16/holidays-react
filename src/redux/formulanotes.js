import * as ActionTypes from './ActionTypes';

export const FormulaNotes = (state = {errMess: null, notes: []}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_NOTE:
            const note = action.payload;
            return {...state, notes: state.notes.concat(note)};

        case ActionTypes.NOTE_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_NOTES:
            return {...state, errMess: null, notes: action.payload};

        case ActionTypes.DELETE_NOTE:
            return {...state, notes: state.notes.filter((note) => note.id !== action.payload)};

        default: return state;
    }
};