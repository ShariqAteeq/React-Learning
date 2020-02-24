import React , {useState} from 'react';
import './App.css';
//import person from './Person/Person';

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
    return(
            <div className = 'App'>
                <h1>This is H1 Heading</h1>
                <p>this is paragraph</p>
                <button onClick = {toggleDataEvent}>Toggle Data</button>
                {printData}
                {charlist}
            </div>

    );

}

const Person = (props) =>{
    return(
        <div>
            <p onClick = {props.DeleteData}>I'm {props.name} and I'm {props.age} Year Old</p>
            <input type = 'text' onChange = {props.changeName} value = {props.name}></input>
        </div>
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
