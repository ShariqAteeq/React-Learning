//=================Class Component===============\\


import React , {PureComponent} from 'react'; 
// PureComponent has ability of shouldComponent Method it chhecks
// old props and states with new propes and states so after writing
//  pureComp we dont need to write shouldCOmponent

//Real dom is rendered when render method is called
import Wperson from './Wperson/Wperson';

class Persons extends PureComponent { //for checking all props we use pure component

    // static getDerivedStateFromProps(props,state){
    //     console.log("[persons.js getDerivedSTatefromprops");
    //     return state;
    // }


        componentWillReceiveProps(nextProps){
                console.log("[Update Persons.js] componentwillrecieveprops",nextProps);
        }

    // shouldComponentUpdate(nextProps , nextState){
    //     console.log("[Persons.js] shouldComponentupdate");
      
    //     return nextProps.person !== this.props.person ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
      
    // }

    componentWillUpdate(nextProps,nextState){
            console.log("[Persons.js] compnentWillUpdate",nextProps,nextState);
    }

//     getSnapshotBeforeUpdate(prevProps , prevState){
//         console.log("[persons.js] getSnapshot");
//         return null;
//     }

    componentDidUpdate(){
        console.log("[persons.js] componentDidUpdate");
    }
    componentWillUnmount(){
        console.log('[wb.js] componentWillUnmount');
    }


    render(){
        console.log('[Persons.js] rendering...');
        return this.props.person.map((per,ind) => {
         return (
                 <Wperson name = {per.name} age = {per.age} 
                 click = {() => this.props.clicked(ind)} key = {per.id}
                 position = {ind} 
                changed = {(event) => this.props.changed(event , per.id)} /> 
                );
            });
        };
    }
export default Persons;

//===========FUnctional Componenet =================\\

// import React, { Component } from 'react';

// import Wperson from './Wperson/Wperson';

// const lpersons = (props) => props.person.map((per,ind) => {
        
//         return (
//                 <Wperson name = {per.name} age = {per.age} 
//                 click = {() => props.clicked(ind)} key = {per.id} 
//                changed = {(event) => props.changed(event , per.id)} /> 
//                );
//            });

// export default lpersons;