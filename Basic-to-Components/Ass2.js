import React, { Component } from 'react';
import './App.css';
import Val from './Vc/Vc';
import CC from './Cc/Cc';
class Ass2 extends Component{

    state = {
        username : 'hellp'
    };
    
    changeName = (event) =>{
        this.setState({
            username : event.target.value
        });
    }

    deleteChar = (index) =>{
        const text = this.state.username.split('');
        text.splice(index , 1);
        const updateText = text.join('');
        this.setState({username:updateText});
    }

    render(){

        let charlist = this.state.username.split('').map((ch,index) =>{
            return <CC character = {ch} clicked = {() => this.deleteChar(index)}/>
        });

        return(
            <div className = "App">
                <h3>Write Some Text!..</h3>
                <input type= "text" onChange = {this.changeName} value = {this.state.username}/> 
                    <p>{this.state.username}</p>
                    <Val userlength = {this.state.username.length} />
                    {charlist}
            </div>
        );

    }
}

export default Ass2;