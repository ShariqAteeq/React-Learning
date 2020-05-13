import * as actionTypes from './actionType';

export const save_result = (res) => {
    return{
        type : actionTypes.STORE_RESULT,
        result : res
    };
};


export const store_result = (res) => {
    return (dispatch , getState) => {
    setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(save_result(res));
    },2000);
}
};

export const delete_result = (resID) => {
    return{
        type : actionTypes.DELETE_RESULT,
        rsId : resID
    };
};