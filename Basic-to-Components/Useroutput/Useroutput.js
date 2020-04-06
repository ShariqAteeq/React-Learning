import React from 'react';

const UserOutput = (props) =>{

    return(

        <div className = 'userout'>
            <p>My Name is {props.username}</p>
            <p>second paragraph</p>
        </div>
);
};

export default UserOutput;