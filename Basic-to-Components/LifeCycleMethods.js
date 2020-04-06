import React ,{Component} from 'react';
import def from './containers/App.css';

class Product extends Component{
   
    constructor(props){
        super(props);
        this.state = {pId : '' , qty : 0 , isCart : true};
    }

    addToCart = (pid) =>{
        this.setState(props=> (
            {
                pId : pid,
                qty : props.qty+1
        }));
    };

    removeCart=()=>{
        this.setState({isCart : false});
    };

    render(){
        
        return(
            <div className = {def.App}>
                <h2>LifeCycle Methods of Component</h2>
                <button onClick = {()=>this.addToCart("p1")}>Add to Cart</button>
                <button onClick = {()=>this.addToCart("p2")}>Add to Cart</button>
                <button onClick = {()=>this.addToCart("p3")}>Add to Cart</button>
                <button onClick = {this.removeCart}>Remove Cart</button>
                {this.state.isCart ? <Cart pId = {this.state.pId} qty = {this.state.qty}/> : null }
            </div>
        );
    }
}

class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {qty : this.props.qty};
    }

    static getDerivedStateFromProps(props , state){ //it runs when our state is dependent on props
            if(props.qty !== state.qty){
                return {qty : props.qty,
                };
                
            }
            return null;
    }

    shouldComponentUpdate(nextProps , nextState){ // it runs when new state or props are encountered
        if(this.props.qty !== nextProps.qty){
            console.log("should component updated");
            return true;
        }
        return false;
    }
 
    componentDidMount(){ //it runs when component is rendered or after rendering component
        console.log("COmponentDidMount");
    }
    
    componentDidUpdate(prevProps , prevState){ //it runs when state or component update
        if(this.props.pId !== prevProps.pId){
         console.log("componentDidUpdate")
        }
    }

    componentWillUnmount(){
        console.log("Cart components destroyed");
    }
 
    // updateQty = () =>{
    //      this.setState((props)=>(
    //      {
    //          qty : props.qty+1
    //        }));
    // };

     render(){
         
         return(
             <div className = {def.App}>
           <h3>Cart Items {this.state.qty}</h3>
             </div>
         );
     }
 }


export default Product;