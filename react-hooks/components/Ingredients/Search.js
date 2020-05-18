import React, { useEffect, useState , useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

const {onLoadIngs} = props; 
const [enteredFilter , setFilter] = useState('');
const inputRef = useRef();
useEffect(() => {

  const timer = setTimeout(() => {
    if(enteredFilter === inputRef.current.value){
      const query = enteredFilter.length === 0 
      ? ''
       :`?orderBy="title"&equalTo="${enteredFilter}"`;
      fetch('https://react-hooks-update-5d594.firebaseio.com/ingredients.json'+ query).then(
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
          onLoadIngs(loadedIng);
        });
    }
  } , 500);

  return () => {
    clearTimeout(timer);
  }

} , [enteredFilter , onLoadIngs , inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value = {enteredFilter} 
                ref = {inputRef}
          onChange = {event => setFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;

//useRef define the current value