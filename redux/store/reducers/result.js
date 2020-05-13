import * as actionTypes from '../actions/actionType';
import {updateObject} from '../utility';

const InitialState = {
    results : []
}

const deleteResilt = (state,action) => {
    const updatedArray = state.results.filter(res => res.id !== action.rsId);
    return updateObject(state , { results : updatedArray});
}

const reducer = (state = InitialState, action) => {


    switch(action.type){
            case actionTypes.STORE_RESULT:
                return updateObject(state , {results : state.results.concat({id : new Date() , value : action.result * 2})});
            
            case actionTypes.DELETE_RESULT:
                return deleteResilt(state,action);
        }
        
    return state;  
}

export default reducer;

//filter take array and return new array