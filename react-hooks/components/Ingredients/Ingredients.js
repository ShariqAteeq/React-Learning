import React , {useEffect , useCallback , useReducer , useMemo} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

const IngredientReducer = (currentIng , action) => {
  switch(action.type){
    case 'add':
      return [...currentIng , action.ingredient];
    case 'delete':
      return currentIng.filter(ing => ing.id !== action.id);
    case 'set' :
      return action.ingredients;
    default : 
      throw new Error('Something Wrong');
  }
};

const HttpReducer = (currHttpState , action) => {
  switch(action.type){
    case 'send':
      return {loading : true , error : null};
    case 'response':
      return {...currHttpState , loading : false};
    case 'clear':
      return {loading : false , error : null};
    case 'ErroR':
      return {loading : false , error : action.errorMsg};
    default:
      throw new Error('Something Went Wrong!');
  }
};

const Ingredients = () => {
  const [userIng , dispatch] = useReducer(IngredientReducer , []);
  const [httpState , dispatchHttp] = useReducer(HttpReducer , {loading : false , error : null});
  //const [userIng , setIng] = useState([]);
  // const [loading , setLoading] = useState(false);
  // const [error , setError] = useState();

  //loading or getting Ingredients or states from browser or firebase using fetch
  
  //useEffect work as a componentDidupdate it renders after re-render cycle
  //but when we add [] empty [] it become componentDidmount mean it renders once time
  // ye hr render cycle pr render hta he jb tk k hm iski depencies na btaden
  useEffect(() => {
    fetch('https://react-hooks-update-5d594.firebaseio.com/ingredients.json').then(
    response => response.json())
    .then(responseData => {
      const loadedIng = [];
      for(let key in responseData){
        loadedIng.push({
          id : key,
          title : responseData[key].title,
          amount : responseData[key].amount
        });
      }
      dispatch({type : 'set' , ingredients : loadedIng});
    }).catch(err => {
      //setError(err.message);
      dispatchHttp({type : 'ErroR' , errorMsg : err.message});
    });
  } , []);
  
  // useEffect(() => {
  //   console.log('Rendering Ingredients' , userIng);
  // } , [userIng]); //it changes when usserIng changes

  //Sending Ingredients or states to the firebase or browser using fetch
  
  const filterIngandler = useCallback(filtIng => {
    dispatch({type : 'set' , ingredients : filtIng});
  } , []);

  //usecallback performance optimization k loye use kia jata h jese agr addIng wala compo render krna ho tw
  // removeIng wala comp render na ho to isi unneccesary render se bchne k liye hm callback use krte hen
  //memo bh performmance optimization k liye lagya jata he..

  const addIng = useCallback(ings => {
      //setLoading(true);
      dispatchHttp({type : 'send'});
      fetch('https://react-hooks-update-5d594.firebaseio.com/ingredients.json' , {
        method : 'POST',
        body : JSON.stringify(ings),
        headers : {'Content-Type' : 'application/json'}
      }).then(response => {
        //setLoading(false);
        dispatchHttp({type : 'response'});
        return response.json();
      }).then(responseData => {
      // setIng(prevIng => 
      //   [...prevIng,
      //    { 
      //      id : responseData.name ,
      //       ...ings
      //     }
      // ]);
      dispatch({
            type : 'add' , 
            ingredient :  { 
             id : responseData.name ,
              ...ings
            }});
      }).catch(err => {
        // setError("Something Went Wrong!!!");
        dispatchHttp({type : 'ErroR' , errorMsg : 'Something Wrong!'});
      });

  }, []);

  const removeIng = useCallback(ingId => {
    dispatchHttp({type : 'send'});
    fetch(`https://react-hooks-update-5d594.firebaseio.com/ingredients/${ingId}.json` , {
        method : 'DELETE',
      }).then(response => {
        dispatchHttp({type : 'response'});
        // setIng(prevIng =>  prevIng.filter(ing => ing.id !== ingId));
        dispatch({type : 'delete' , id : ingId});
      }).catch(err => {
        dispatchHttp({type : 'ErroR' , errorMsg : 'Something Wrong!'});
      });
  }, []);
  const clear = useCallback(() => {
    // setError(null);
    // setLoading(false);
    dispatchHttp({type : 'clear'});
  });

  const ingredientList = useMemo(() => {
    return(
      <IngredientList 
      ingredients = {userIng}
       onRemoveItem = {removeIng}/>
    );
  } , [userIng , removeIng]);

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose = {clear}>{httpState.error}</ErrorModal>}
      <IngredientForm onAddIng = {addIng} onLoading = {httpState.loading}/>

      <section>
        <Search onLoadIngs = {filterIngandler}/>
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;