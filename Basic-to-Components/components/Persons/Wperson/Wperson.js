import React, { PureComponent, Fragment } from 'react';
import def from './Wperson.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import propTypes from 'prop-types'; 
import AuthContext from '../../../context/auth-context';
import {AuthenContext} from '../../../containers/wb';
//import './App.css';


class Wperson extends PureComponent{

    constructor(props){
        super(props);
        this.inputEle = React.createRef();
    }

static contextType = AuthContext;

    componentDidMount(){
      //  this.inputEle.current.focus();
        console.log('[Wperson.js] ComponentDidMount...');
        if(this.props.position === 2){
            this.inputEle.focus();
        }
    }

    render(){
       console.log("Wperson.js is rendering");
        return(
            <Auxiliary>
                 
           {/* Fragment work like as we create aux <Fragment></Fragment> */}
        {/* <AuthenContext.Consumer>  
            {auth => auth ? <p>Autheneicated</p> : <p>Please Log-in</p>}
        </AuthenContext.Consumer> */}

           
{/*           
                   <p>
                       Hello I'm {Math.floor(Math.random()*6)} random number 
                   </p> */}
                   {this.context.authenticated ? <p>Autheneicated</p> : <p>Please Log-in</p>}
           <h3 onClick = {this.props.click}>My Name is {this.props.name} and age is {this.props.age}</h3>
           <h3>{this.props.children}</h3>
           <input type ="text" 
          ref = {(inn)=>{this.inputEle = inn}} 
        // ref = {this.inputEle}
           onChange = {this.props.changed} 
           value = {this.props.name}>
           </input>
           </Auxiliary>
           );
       }
       
    }

//props types check the data types of upcoming props from function first we have install it by "npm install --save prop=type"
//then we have to define like below
  Wperson.propTypes = {
      click : propTypes.func,
      name : propTypes.string,
     age : propTypes.number,
      changed : propTypes.func
  };  
export default withClass(Wperson,def.Wperson);


    // const style = {
    //     '@media (min-width : 500px)':{
    //         width : "450px"
    //     }
    // };

    // const rnd = Math.random();

    // if(rnd > 0.7){
    //     throw new Error("Some went wrong");
    // }
