import React from 'react';
//import './Ass2.js';


const val = (props) =>{

    var valmsg = "Text is Long!";

    if(props.userlength <= 5){
        valmsg = "text is Short";
    }

    return(
        <div>
            <h3>Validation Component</h3>
            {valmsg}
        </div>
    );

}
export default val;