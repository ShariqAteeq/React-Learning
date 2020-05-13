import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         // case 'inc':
    //         //     this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //         //     break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub5}   />
            {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> 
            this is previous method*/}
            <hr />
            <button onClick = {() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
            <ul>
                {this.props.storedResults.map(str =>(
                    <li key = {str.id}
                     onClick = {() => this.props.onDeleteResult(str.id)} 
                     style = {{cursor : 'pointer'}}> 
                     {str.value}
                     </li>
                ))}
                
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr : state.ctr.counter, //this state come from reducer.js
        storedResults : state.res.results
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrement : () =>  dispatch(actionCreators.inc()),
        onDecrement : () =>  dispatch(actionCreators.dec()),
        onAdd5 : () =>  dispatch(actionCreators.add(5)),
        onSub5 : () =>  dispatch(actionCreators.sub(5)),
        onStoreResult : (result) => dispatch(actionCreators.store_result(result)),
        onDeleteResult : (id) => dispatch(actionCreators.delete_result(id))
    };
};
export default connect(mapStateToProps , mapDispatchToProps)(Counter);

//connect is used to connect container state wich is counter comp with global state which come from reducer.js
// connect is a higherorder function which use in export