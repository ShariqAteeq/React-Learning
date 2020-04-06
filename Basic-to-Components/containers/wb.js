import React , {PureComponent} from 'react';
import def from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
//const Wb = () =>{

// const [Wper ,SetWper] = useState({
//     person : [
//         {name : "harry", age : 11},
//         {name : "shariq", age : 21},
//         {name : "james", age : 61}
//     ],
//     showPerson : false
// });

//  const switchName = (newName) =>{
//      SetWper({
//         person : [
//             {name : newName, age : 11},
//             {name : "pakistan", age : 21},
//             {name : "james-and", age : 61}
//         ]
        
//      })
//  }

// const nameChange = (event) =>{
//     SetWper({
//         person : [
//             {name :"harry", age : 11},
//             {name : event.target.value, age : 21},
//             {name : "james-and", age : 61}
//         ]
//      })
// }

// const togglePerson = () =>{
//         const doesShow = Wper.showPerson;
//         SetWper({showPerson : !doesShow});
// }

// const style = {
//     backgroundColor : "blue",
//     color : "White"
// };

// let persons = null;
//     if(Wper.showPerson){
//       persons = (
//         <div>
//          {Wper.person.map(per => {
//          return <Wperson name = {per.name} age = {per.age} />
//          })
//          }
//        </div>
//    );
// }

// return(
//     <div className = "App">

//         <h1>Welcome Back to React</h1>
//         <button style = {style} onClick = {togglePerson}>Switch Name</button>
//         {/* <Wperson click = {switchName.bind(this,"I'm Clicked!")} name = {Wper.person[0].name} age = {Wper.person[0].age}>Hello This my Bio</Wperson>
//         <Wperson  changed = {nameChange} name = {Wper.person[1].name} age = {Wper.person[1].age}>Hello This my Bio</Wperson>
//         <Wperson click = {switchName.bind(this,"I'm Clicked!")} name = {Wper.person[2].name} age = {Wper.person[2].age}>Hello This my Bio</Wperson> */}
//         {persons}
   
//     </div>

// );

// }

// const StyledButton = Styled.button`
// background-color : ${props => props.alt ? 'red' : 'green'};
// width : 100px;
// height : 50px;
// font : inherit;
// padding : 5px;
// border : 1px solid black;

// &:hover{
//     background-color : ${props => props.alt ? 'blue' : 'black'};
//     color : white;
// }

// `;
export const AuthenContext = React.createContext(false)

class Japp extends PureComponent{
   


    constructor(props){
        super(props);
        console.log('[wb.js] constructor');
    }
   ;
    state = {
        person : [
                    {id : "22" , name : "harry", age : 11},
                    {id : "222" , name : "shariq", age : 21},
                    {id : "32" , name : "james", age : 61}
                ],
                showPerson : false,
                showCockpit : true,
                changeCounter : 0,
                toggleClicked : 0,
                isAuthenticated : false
    };

    static getDerivedStateFromProps(props , state){
        console.log('[wb.js] getDerivedStateFromProps',props);
        return state;
    }

    // componentWillMount(){
    //     console.log('[wb.js] componentWillMount');
    // }

    componentDidMount(){
        console.log('[wb.js] componentDidMount');
    }

    // shouldComponentUpdate(nextProps , nextState){
    //     console.log("[wb.js] shouldComponentUpdate");
    //     return true;
    //     // return nextState.person !== this.state.person ||
    //     //         nextState.showPerson !== this.state.showPerson;
    // }

    componentDidUpdate(){
        console.log("[wb.js] componentDIdUpdate");
    }

    
 togglePerson = () =>{
        const doesShow = this.state.showPerson;
        this.setState((prevState,props)=>{
        return {
            showPerson : !doesShow,
            toggleClicked : prevState.toggleClicked+1
        }
         } );
}

deletePerson = (pindex) =>{
    const persons = [...this.state.person];
    persons.splice(pindex,1);
    this.setState({person : persons});
}
changeName = (event, id) =>{
    const personIndex= this.state.person.findIndex(p =>{
        return p.id === id;
    });
    const getPerson = {
        ...this.state.person[personIndex]
    };

    getPerson.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = getPerson;

    this.setState((prevState , props) =>{
        return {
            person : persons,
            changeCounter: prevState.changeCounter+1
        };
    });

};

loginHandler = () =>{
    this.setState({isAuthenticated:true});
};

 render(){

      console.log('[wb.js] render');
 
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>

            <Persons 
                personLength = {this.state.person.length}
                clicked = {this.deletePerson}
                changed = {this.changeName}
                person = {this.state.person}
                
                                 />
        
       </div>
   );
  
 
        }

 return(
   
            <Auxiliary>
                {/* <button onClick = {()=>{
                    this.setState({showCockpit : false});
                }}>RemoveCockpit</button> */}

                <button onClick = {()=>{this.setState({showPerson : true})}}>Show Persons</button>

                <AuthContext.Provider value = {{
                    authenticated : this.state.isAuthenticated,
                    login : this.loginHandler
                    }}>
                {this.state.showCockpit ? 
                 <Cockpit 
                    title = {this.props.appTitle}
                    showPerson = {this.state.showPerson}
                    clicked = {this.togglePerson} 
                    login = {this.loginHandler}   
                            /> 
                            : null}
                    {persons}
        {/* <AuthenContext.Provider value = {this.state.isAuthenticated}>  {persons}</AuthenContext.Provider> */}
          
            </AuthContext.Provider>
             </Auxiliary>
        );
    }
}
export default withClass(Japp,def.App);

// return React.createElement("div",{className : "App"}, React.createElement("h1",null,"Wao! Its Working"));
   // const style = {
    //     backgroundColor : "green",
    //     width : "100px",
    //     height : "50px",
    //     font : "inherit",
    //     padding : "5px",
    //     border : "1px solid black",
    //     ':hover':{
    //         backgroundColor : "black",
    //         color : "white"
    //     }
  
  
    //   };
 