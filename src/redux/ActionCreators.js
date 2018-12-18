import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

//Actions for Holidays Table
export const addHoliday = (holiday) => ({
    type:ActionTypes.ADD_HOLIDAY,
    payload: holiday
});

export const postHoliday = (name) => (dispatch) => {
    const newHoliday = {
        name: name
    }

    return fetch(baseUrl+'holiday/save', {
        method: 'POST', body: JSON.stringify(newHoliday), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addHoliday(response)))
        .catch(error => {console.log('post holiday', error.message);
            alert('Your holiday could not be posted: '+ error.message);});
}

export const holidaysFailed = (errmess) => ({
    type: ActionTypes.HOLIDAY_FAILED,
    payload: errmess
});

export const fetchHolidays = () => (dispatch) => {
    return fetch(baseUrl + 'holidays')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(holidays=>dispatch(addHolidays(holidays)))
        .catch(error => dispatch(holidaysFailed(error.message)));
};

export const addHolidays = (holidays) => ({
    type:ActionTypes.ADD_HOLIDAYS,
    payload: holidays
});

export const deleteHoliday = (holidayId) => ({
    type: ActionTypes.DELETE_HOLIDAY,
    payload: holidayId
})


//Actions for Country Table
export const addCountry = (country) => ({
    type:ActionTypes.ADD_COUNTRY,
    payload: country
});

export const postCountry = (name, id) => (dispatch) => {
    const newCountry = {
        name: name
    }

    return fetch(baseUrl+'country/save', {
        method: 'POST', body: JSON.stringify(newCountry), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addCountry(response)))
        .catch(error => {console.log('post country', error.message);
            alert('Your country could not be posted: '+ error.message);});
}

export const countriesFailed = (errmess) => ({
    type: ActionTypes.COUNTRY_FAILED,
    payload: errmess
});

export const fetchCountries = () => (dispatch) => {
    return fetch(baseUrl + 'countries')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(countries=>dispatch(addCountries(countries)))
        .catch(error => dispatch(countriesFailed(error.message)));
};

export const addCountries = (countries) => ({
    type:ActionTypes.ADD_COUNTRIES,
    payload: countries
});

export const deleteCountry = (countryId) => ({
    type: ActionTypes.DELETE_COUNTRY,
    payload: countryId
})


//Actions for Country Table
export const addState = (newState) => ({
    type:ActionTypes.ADD_STATE,
    payload: newState
});

export const postState = (name, country) => (dispatch) => {
    const newState = {
        name: name,
        country: country
    }
    console.log(name + country);
    return fetch(baseUrl+'states/save', {
        method: 'POST', body: JSON.stringify(newState), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addState(response)))
        .catch(error => {console.log('post state', error.message);
            alert('Your state could not be posted: '+ error.message);});
}

export const statesFailed = (errmess) => ({
    type: ActionTypes.STATE_FAILED,
    payload: errmess
});

export const fetchStates = () => (dispatch) => {
    return fetch(baseUrl + 'states')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(states=>dispatch(addStates(states)))
        .catch(error => dispatch(statesFailed(error.message)));
};

export const addStates = (states) => ({
    type:ActionTypes.ADD_STATES,
    payload: states
});

export const deleteState = (stateId) => ({
    type: ActionTypes.DELETE_STATE,
    payload: stateId
})

//Actions for City Table
export const addCity = (newCity) => ({
    type:ActionTypes.ADD_CITY,
    payload: newCity
});

export const postCity = (name, state, country) => (dispatch) => {
    const newCity = {
        name: name,
        state: state,
        country: country
    }
    console.log(name + country);
    return fetch(baseUrl+'states/save', {
        method: 'POST', body: JSON.stringify(newCity), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addCity(response)))
        .catch(error => {console.log('post city', error.message);
            alert('Your city could not be posted: '+ error.message);});
}

export const cityFailed = (errmess) => ({
    type: ActionTypes.CITY_FAILED,
    payload: errmess
});

export const fetchCities = () => (dispatch) => {
    return fetch(baseUrl + 'cities')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(cities=>dispatch(addCities(cities)))
        .catch(error => dispatch(citiesFailed(error.message)));
};

export const addCities = (cities) => ({
    type:ActionTypes.ADD_CITIES,
    payload: cities
});

export const deleteCity = (cityId) => ({
    type: ActionTypes.DELETE_CITY,
    payload: cityId
})

//Actions for Notes Table
export const addNote = (newNote) => ({
    type:ActionTypes.ADD_NOTE,
    payload: newNote
});

export const postNote = (note) => (dispatch) => {
    const newNote = {
        note: note
    }
    
    return fetch(baseUrl+'fn/save', {
        method: 'POST', body: JSON.stringify(newNote), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addNote(response)))
        .catch(error => {console.log('post note', error.message);
            alert('Your note could not be posted: '+ error.message);});
}

export const noteFailed = (errmess) => ({
    type: ActionTypes.NOTE_FAILED,
    payload: errmess
});

export const fetchNotes = () => (dispatch) => {
    return fetch(baseUrl + 'formulanotes')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(notes=>dispatch(addNotes(notes)))
        .catch(error => dispatch(noteFailed(error.message)));
};

export const addNotes = (notes) => ({
    type:ActionTypes.ADD_NOTES,
    payload: notes
});

export const deleteNote = (noteId) => ({
    type: ActionTypes.DELETE_NOTE,
    payload: noteId
})

//Actions for Concerns Table
export const addCQ = (newCQ) => ({
    type:ActionTypes.ADD_CQ,
    payload: newCQ
});

export const postCQ = (cq) => (dispatch) => {
    const newCQ = {
        cq: cq
    }
    
    return fetch(baseUrl+'cq/save', {
        method: 'POST', body: JSON.stringify(newCQ), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addCQ(response)))
        .catch(error => {console.log('post Concern', error.message);
            alert('Your concern could not be posted: '+ error.message);});
}

export const cqFailed = (errmess) => ({
    type: ActionTypes.CQ_FAILED,
    payload: errmess
});

export const fetchCQ = () => (dispatch) => {
    return fetch(baseUrl + 'concernsquestions')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(cqs=>dispatch(addCQS(cqs)))
        .catch(error => dispatch(cqFailed(error.message)));
};

export const addCQS = (cqs) => ({
    type:ActionTypes.ADD_CQS,
    payload: cqs
});

export const deleteCQ = (cqId) => ({
    type: ActionTypes.DELETE_CQ,
    payload: cqId
})

//Actions for GM Table
export const addGM = (newGM) => ({
    type:ActionTypes.ADD_GM,
    payload: newGM
});

export const postGM = (month, day, offset, leapYear) => (dispatch) => {
    const newGM = {
        month: month,
        day: day,
        offset: offset,
        leapYear: leapYear
    }
    
    return fetch(baseUrl+'gm/save', {
        method: 'POST', body: JSON.stringify(newGM), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addGM(response)))
        .catch(error => {console.log('post GM', error.message);
            alert('Your GM could not be posted: '+ error.message);});
}

export const gmFailed = (errmess) => ({
    type: ActionTypes.GM_FAILED,
    payload: errmess
});

export const fetchGM = () => (dispatch) => {
    return fetch(baseUrl + 'gregorianmonthday')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(gms=>dispatch(addGMS(gms)))
        .catch(error => dispatch(gmFailed(error.message)));
};

export const addGMS = (gms) => ({
    type:ActionTypes.ADD_GMS,
    payload: gms
});

export const deleteGM = (gmId) => ({
    type: ActionTypes.DELETE_GM,
    payload: gmId
})

//Actions for GM special Table
export const addGM_S = (newGMS) => ({
    type:ActionTypes.ADD_GM_S,
    payload: newGMS
});

export const postGMS = (month, day, offset, leapYear, description) => (dispatch) => {
    const newGMS = {
        month: month,
        day: day,
        offset: offset,
        leapYear: leapYear,
        description: description
    }
    
    return fetch(baseUrl+'gms/save', {
        method: 'POST', body: JSON.stringify(newGMS), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addGM_S(response)))
        .catch(error => {console.log('post GM special', error.message);
            alert('Your GM special could not be posted: '+ error.message);});
}

export const gmsFailed = (errmess) => ({
    type: ActionTypes.GMS_FAILED,
    payload: errmess
});

export const fetchGMS = () => (dispatch) => {
    return fetch(baseUrl + 'gregorianmonthdayspecial')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(gmss=>dispatch(addGMSS(gmss)))
        .catch(error => dispatch(gmsFailed(error.message)));
};

export const addGMSS = (gmss) => ({
    type:ActionTypes.ADD_GMSS,
    payload: gmss
});

export const deleteGMS = (gmsId) => ({
    type: ActionTypes.DELETE_GMS,
    payload: gmsId
})

//Actions for GNK Table
export const addGNK = (newGNK) => ({
    type:ActionTypes.ADD_GNK,
    payload: newGNK
});

export const postGNK = (nth, kday, month, offset) => (dispatch) => {
    const newGNK = {
        nth: nth,
        kday: kday,
        month: month,
        offset: offset,
    }
    
    return fetch(baseUrl+'gnk/save', {
        method: 'POST', body: JSON.stringify(newGNK), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addGNK(response)))
        .catch(error => {console.log('post GNK', error.message);
            alert('Your GNK special could not be posted: '+ error.message);});
}

export const gnkFailed = (errmess) => ({
    type: ActionTypes.GNK_FAILED,
    payload: errmess
});

export const fetchGNK = () => (dispatch) => {
    return fetch(baseUrl + 'gregoriannthkdayofmonth')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(gnks=>dispatch(addGNKS(gnks)))
        .catch(error => dispatch(gmsFailed(error.message)));
};

export const addGNKS = (gnks) => ({
    type:ActionTypes.ADD_GNKS,
    payload: gnks
});

export const deleteGNK = (gnkId) => ({
    type: ActionTypes.DELETE_GNK,
    payload: gnkId
})

//Actions for GKM Table
export const addGKM = (newGKM) => ({
    type:ActionTypes.ADD_GKM,
    payload: newGKM
});

export const postGKM = (kday, afteretc ,month, day, offset) => (dispatch) => {
    const newGKM = {
        kday: kday,
        afteretc: afteretc,
        month: month,
        day: day,
        offset: offset
    }
    
    return fetch(baseUrl+'gkm/save', {
        method: 'POST', body: JSON.stringify(newGKM), headers: {'content-type': 'application/json'}, credentials: 'same-origin'
    })
        .then (response => {
                if(response.ok){
                    return response;
                }
                else{
                    const error = new Error('Error ' + response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addGKM(response)))
        .catch(error => {console.log('post GKM', error.message);
            alert('Your GKM special could not be posted: '+ error.message);});
}

export const gkmFailed = (errmess) => ({
    type: ActionTypes.GKM_FAILED,
    payload: errmess
});

export const fetchGKM = () => (dispatch) => {
    return fetch(baseUrl + 'gregoriankdayafteretcmonthday')
        .then (response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(gkm=>dispatch(addGKMS(gkm)))
        .catch(error => dispatch(gkmFailed(error.message)));
};

export const addGKMS = (gkms) => ({
    type:ActionTypes.ADD_GKMS,
    payload: gkms
});

export const deleteGKM = (gkmId) => ({
    type: ActionTypes.DELETE_GKM,
    payload: gkmId
})






