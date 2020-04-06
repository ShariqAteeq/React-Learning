/*
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';



const App = props => {
  //state is property of class component which is used to manage data on reacrDOM
  //it is previous method to define state
 /* state = {
    person: [
      {name:'Harry' , age:'20'},
      {name:'Shariq' , age:'21'}
    ],
    others: 'value'
  }
  */
 //when use "usestate" method so it doesnt change or merge with the previous value but it create new object
 //usestate is a react hook method which is used to add functionality in functional component
 /*
  const [personState , setPersonState] = useState({
    person: [
      {name:'Harry' , age:'20'},
      {name:'Shariq' , age:'21'}
    ],
  
  });

  const [otherValue] = useState('some value');

  //console.log(personState , otherValue);

  const switchNameHandler = (newName) =>{
    //dont do this : this.state.person[0].name='wao';
    //setState propertuy is used to change value of state propert
    setPersonState({
      person: [
      {name: newName , age:'26'},
      {name:'Shariq' , age:'25'}
    ]});
  };
  
  //we can also pass element toa method by using arrow function see.e.g
    // <button onclick = {() => switchNameHandler('max')}>Switchname</button>

//update name dynamically on screen

const nameChangeHandler = (event) =>{

  setPersonState({
    person: [
    {name: "harry" , age:'26'},
    {name:event.target.value , age:'25'}
  ]});
};

//inline style on button
const style = {
  backgroundColor : 'white',
  padding : '8px',
  font : 'inherit',
  border : '2px solid blue',
  cursor : 'pointer'
  
};

    return (
      //it is jsx code 
      //inline style on buuton
      
      <div className="App">
        <h1>Hi I am react App</h1>
        <p>This is Paragraph</p>
        <h1>Wao</h1>
        <button style = {style} onClick = {switchNameHandler.bind(this, "Adward")}>Switch Name</button>
        <Person name = {personState.person[0].name} age={personState.person[0].age} />
        <Person name={personState.person[1].name} age={personState.person[1].age}
         click = {switchNameHandler.bind(this, "Harry")} changeName = {nameChangeHandler}>this is children</Person>
      </div>
    );
    //Behind this react work like that see e.g
    //but tjis is tipical so we have to know about what is background
   //return React.createElement('div',{class: 'App'},React.createElement('h1',null,'Hi I am react App'));
   //the advantage of creating seperate functional component that we can reuse it multiple times at multiple places
  }


  


//=======Assignment1========\\

import React, { Component } from 'react';
import UserInput from './Userinput/Userinput';
import UserOutput from './Useroutput/Useroutput';
import './App.css';
import './Useroutput/UserOutput.css'

class App extends Component{
  state = {
    username : "shariq"
};

  changeNameHandler = (event) =>{

    this.setState({
      username: event.target.value
    });

  };
render(){
  return(

    <div className = 'App'>
      <h1>Assignment # 1</h1>
    <UserInput changed = {this.changeNameHandler} name = {this.state.username}/>
    <UserOutput username = {this.state.username}  />
    <UserOutput username = "harry" />
    <UserOutput username = {this.state.username} />

    </div>
  );

};
}
export default App;

*/


//=====2nd Section Lists and conditions=====\\


import React, { Component } from 'react';
import './App.css';
import '../ValidateComponent/ValidateComponent';
//import ValidateComponent from './ValidateComponent/ValidateComponent';
import '../CharComponent/CharComponent';
import Person from '../Person/Person';
//import CharComponent from './CharComponent/CharComponent';




class App extends Component{

state = {
  person : [
    { id : 112, name : 'whey' , age : 11 },
    { id : 11, name : 'wheyes' , age : 21 }

  ],
  showPerson : false
};

togglePersonHandler = () =>{
      const doesShow = this.state.showPerson;
      this.setState({showPerson : !doesShow});
    
}
 

delPersonHandler = (pindex) =>{

  //slice methid copy original array within variable
  //slice is used to copy the values of array not just taking refenrence as u know array object takes an reference
  //const person = this.state.person.slice();
  const person = [...this.state.person];
  person.splice(pindex , 1);
  this.setState({person : person});

}

changeNameHandler = (event , id) =>{

    const personIndex = this.state.person.findIndex(p => {
        return p.id === id ;
    });

    const person = {
      ...this.state.person[personIndex]
    }
    
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person : persons});

}
render(){

   

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
         {this.state.person.map((per , ind) => {
         return <Person name = {per.name} age = {per.age} click = {() => this.delPersonHandler(ind)}
         key = {per.id} changeName = {(event) => this.changeNameHandler(event , per.id)}/>
         })
         }
       </div>
        /* 
        <div>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}></Person>
        <Person name = {this.state.person[1].name} age = {this.state.person[1].age}></Person>
        </div> 
        */
       
        

      );
      
    }

  return(
    <div className = "App">
    <button onClick = {this.togglePersonHandler}>Toggle Person</button>
    {persons}
    </div>
  );
}
}

export default App;



/*

//=====Assignment 2=====\\

class App extends Component{

  state = {
    userInput : 'some text'
  }

  inputHandler = (event) =>{

    this.setState({userInput : event.target.value});

  }

delInputText = (index) =>{
  const userinp = this.state.userInput.split('');
  userinp.splice(index , 1);
  //it will make again charlist to string join method
  const updateUserinp = userinp.join('');
  this.setState({userInput:updateUserinp});
}

    render(){

        const charList = this.state.userInput.split('').map((ch , ind) =>{
          return <CharComponent inp = {ch} key = {ind} clicked = {() => this.delInputText(ind)} />
        });

        

      return(
        

        <div className = 'App'>
          <h3>Input Some Text</h3>
          <input type = 'text' onChange = {this.inputHandler} value = {this.state.userInput}/>
          <ValidateComponent len = {this.state.userInput.length}/>
      <p>{this.state.userInput}</p>
          
          {charList}
         
        </div>

      );
    }

}

export default App;

*/

