import React from 'react';

const person = (props) =>{
return(
    <div className = "Person">
        
        <p onClick = {props.click}>I m {props.name} and I am {props.age} years old </p>
        <p>{props.children}</p>
        <input type = "text" onChange = {props.changeName} value = {props.name}></input>
    </div>
);
//we can write it in component
//<p>I'm a Person! and I'm {Math.floor(Math.random()*30)+1} years old </p>
};

export default person;