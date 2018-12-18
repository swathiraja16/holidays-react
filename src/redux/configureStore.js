import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Holidays } from './holidays';
import { Countries } from './countries'
import { States } from './states';
import { Cities } from './cities';
import { FormulaNotes } from './formulanotes';
import { ConcernsQuestions } from './concernsquestions';
import { GregorianMonthDay } from './gm'
import { GregorianMonthDaySpecial } from './gms'
import { GregorianNthKdayofMonth } from './gnk'
import { GKM } from './gkm';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            holidays: Holidays,
            countries: Countries,
            states: States,
            cities: Cities,
            formulanotes: FormulaNotes,
            concernsquestions: ConcernsQuestions,
            gm: GregorianMonthDay,
            gms: GregorianMonthDaySpecial,
            gnk: GregorianNthKdayofMonth,
            gkm: GKM
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}