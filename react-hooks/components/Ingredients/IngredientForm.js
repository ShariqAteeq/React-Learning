import React , {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from '../UI/LoadingIndicator';

const IngredientForm = React.memo(props => {

  const [entTitle , setTitle] = useState('');
  const [entAmount , setAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIng({title : entTitle , amount : entAmount});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value = {entTitle} 
              onChange = {event => {setTitle(event.target.value)}} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value = {entAmount} 
              onChange = {event => {setAmount(event.target.value)}} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.onLoading && <LoadingIndicator />} 
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

//props.onLoading && <LoadingIndicator /> this mean if loading true then run loadingIndicator