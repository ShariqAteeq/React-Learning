//actionCreators

import * as actionTypes from './actionType';

export const inc  = () => {
    return{
        type: actionTypes.INC
    };
};

export const dec = () => {
    return{
        type: actionTypes.DEC
    };
};

export const add = (value) => {
    return{
        type : actionTypes.ADD,
        val : value
    };
};

export const sub = (value) => {
    return{
        type : actionTypes.SUB,
        val : value
    };
};
