import React from 'react';

const UserInput = (props) => {
    const sty= {
        border : '2px solid blue'
    };
    return(
    <input type = 'text' onChange = {props.changed} value = {props.name} style = {sty} ></input>

    );

};

export default UserInput;