
import React from 'react';

const ValidateComponent = (props) =>{

    let ValidateMsg = "Text long enough";

    if(props.len <=5){
        ValidateMsg = "text is short";
    }

    return(
        <div>
            <p>Input Text Length is {props.len}</p>
            {ValidateMsg}
        </div>
    );
}

export default ValidateComponent;