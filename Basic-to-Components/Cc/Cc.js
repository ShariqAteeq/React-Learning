import React from 'react';

const char = (props) =>{
    const style = {
        display : "inline-block",
        textAlign : "center",
        padding : "16px",
        border : "1px solid black",
        margin : "16px"
    };
    return(
        <div style = {style} onClick = {props.clicked}>
            {props.character}
        </div>
    );
}

export default char;