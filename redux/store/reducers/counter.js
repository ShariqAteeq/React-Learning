import * as actionTypes from '../actions/actionType';
import {updateObject} from '../utility';

const InitialState = {
    counter : 0,
}
const reducer = (state = InitialState, action) => {
  
    switch(action.type){
            case actionTypes.INC : 
                 return updateObject(state , {counter : state.counter+1} );
            case actionTypes.DEC : 
                 return updateObject(state , {counter: state.counter-1});
            case actionTypes.ADD : 
                 return updateObject(state , {counter: state.counter+action.val});
            case actionTypes.SUB : 
                 return updateObject(state , {counter: state.counter-action.val});
       }
        
    return state;  
}

export default reducer;