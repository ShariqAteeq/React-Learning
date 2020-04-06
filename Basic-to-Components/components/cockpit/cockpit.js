import React, {useEffect , useRef , useContext} from'react';

import def from './cockpit.css';

import AuthContext from '../../context/auth-context';

const Cockpit = (props) =>{

    //const toggleBtnRef = useRef(null); // userrf is used to take reference of element

    const authContext = useContext(AuthContext);

    useEffect(()=> {
        //useeffect contain both componentwillMount & ComponentDidUpdate & ir runs after rendering cycle
        console.log("[cockpit.js] useEffect");

        // setTimeout(()=>{
        //     alert('It\'s update')
        // },1000);

      //  toggleBtnRef.current.click(); //  Used to Always show persons

        return () =>{
        //    clearTimeout(timer);
            console.log('[cockpit.js] cleanUp work');
        };
        
    }, []); //if we want only componentwillmount then add empty array[] & empty array run only once

    useEffect(()=>{
        console.log("[cockpit.js] 2nd useEffect");

        return () =>{
            console.log('[cockpit.js] 2nd cleanUp work');
        };
    });


// if dependency

// useEffect(()=> {
//     //useeffect contain both componentwillMount & ComponentDidUpdate 
//     console.log("[cockpit.js] useEffect");

//     setTimeout(()=>{
//         alert('Persons Data update')
//     },1000);
    
// }, [props.person]); //we define state or variable for dependecies

    let btn = '';
    if(props.showPerson){
        btn = def.Red
    }
    const classes = [];
        if(props.personLength <=2){
            classes.push(def.red);
        }
        if(props.personLength <=1){
            classes.push(def.bold);
        }

    return(
        <div className = {def.Cockpit}>
            <h1>{props.title}</h1>
           <p className = {classes.join(' ')}>Welcome Back to React</p>
            <button className = {btn} onClick = {props.clicked}>Switch Name</button>
          <button onClick = {authContext.login}>Log In</button>
         
          {/* ref = {toggleBtnRef} 
            */}
           
    </div>
    );

}
export default React.memo(Cockpit); //React Memo method is used for optimiztion and it works on 
                                    //fuctioal compnent it render compenets when props of component changes
                                    //otherwise id doesnt render functional compoenent
/* <Wperson click = {switchName.bind(this,"I'm Clicked!")} name = {Wper.person[0].name} age = {Wper.person[0].age}>Hello This my Bio</Wperson>
  <Wperson  changed = {nameChange} name = {Wper.person[1].name} age = {Wper.person[1].age}>Hello This my Bio</Wperson>
<Wperson click = {switchName.bind(this,"I'm Clicked!")} name = {Wper.person[2].name} age = {Wper.person[2].age}>Hello This my Bio</Wperson> */
            