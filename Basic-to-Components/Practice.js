import React , {useState} from 'react';
import './App.css';
import styled from 'styled-components';
//import './Person/Person.css';

const Practice = () =>{

    const [accData , maniData] = useState({
        
        person : [
            {name : 'shariq' , age : 12},
            {name : 'harry' , age : 11}
        ],
        other : 25,
        showData : false,
        
    });

    const [charData , mchar] = useState({
        some : 'hello-Bro'  
    });

    const buttonStyle = {
        backgroundColor : 'red',
        color : 'white',
        border : '1px solid black',
        padding : '7px',
        ':hover':{
            backgroundColor : 'black',
            color : 'white'
        }
    }
    let printData = null;

    if(accData.showData){
     printData = (
         <div>
        {
        accData.person.map((p, ind) =>{
        return <Person name = {p.name} age = {p.age} key = {ind}
         changeName = {(event) => changeNameEvent(event , ind)} DeleteData = {() =>DeleteDataEvent(ind)}/>
            })
    }</div>);
    buttonStyle.backgroundColor = 'green';
    buttonStyle[':hover'] ={
        backgroundColor : 'red',
        color : 'white'
    }
    }
   
const toggleDataEvent = () =>{
    let show = accData.showData;
    maniData({showData : !show,
        person : [
            {name : 'shariq' , age : 12},
            {name : 'harry' , age : 11}
        ]}
        );
}

const changeNameEvent = (event , id) =>{

        const findPerson = {
            ...accData.person[id]
        }

        findPerson.name = event.target.value;

        const persons = [...accData.person];
        persons[id] = findPerson;

        maniData({person : persons,
        showData : true});

}

const DeleteDataEvent = (id) =>{
    const data = [...accData.person];
    data.splice(id , 1);

    maniData({person : data, showData : true});
}

const inputCharHandler = (event) =>{

     mchar({some : event.target.value});


}
const delCharEvent = (id) =>{
    const data = charData.some.split('');
    data.splice(id , 1);

    const updateChar = data.join('');
    mchar({some : updateChar});


}



let charlist = (
        <div>
            {
            charData.some.split('').map((ch , id) =>{
            return <CharComp pri = {ch} key = {id} changeText = {inputCharHandler} 
            delChar = {() => delCharEvent(id)}/>
            })
            }
        </div>
);

const classes = [];
if(accData.person.length <= 2){
    classes.push('red');
}
if(accData.person.length <=1){
    classes.push('bold');
}

//join method combine 2 string with a single string

    return(
            <div className = 'App'>
                <h1>This is H1 Heading</h1>
                <p className = {classes.join(' ')}>this is paragraph</p>
                <button style = {buttonStyle} onClick = {toggleDataEvent}>Toggle Data</button>
                {printData}
                {charlist}
            </div>

    );

}

// const heightSt = {
//     height : '20px',
//     marginTop : '20px'
// }

const StyleDiv = styled.div`
width: 50%;
margin: 10px auto;
border: 2px solid #eee;
box-shadow: 1px #ccc;
text-align: center;
padding: 10px;

@media (min-width : 500px){
    width : 450px
}

`;

const Person = (props) =>{

// const PersonStyle = {
//     '@media(min-width : 500px)':{
//         width : '450px'
//     }
// }
//styleroot is used for mediaquery not required for psuedo css
    return(
            
            <StyleDiv>
            <input  type = 'text' onChange = {props.changeName} value = {props.name}></input>
            <p onClick = {props.DeleteData}>I'm {props.name} and I'm {props.age} Year Old</p>
            </StyleDiv>
        
    );
}


const CharComp = (props) =>{

    const sty = {
        display : 'inline-block',
        border : '1px solid black',
        width : '50px',
        height : '50px',
        margin : '10px',
        marginTop: '50px',
        
    }
    return(
            <div style = {sty} onClick = {props.delChar}>
                
                <p>{props.pri}</p>
            
                <input type = 'text' onChange = {props.changeText}></input>
                
            </div>
    );

}

export default Practice;
