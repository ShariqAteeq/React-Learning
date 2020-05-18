import React , {useContext} from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import {AuthContext} from './context/auth-context';
import Auth from './components/Auth';

const App = props => {

  const authConext = useContext(AuthContext);

  let content = <Auth />;
  if(authConext.isAuth){
    content = <Ingredients />;
  }

  return content;
};

export default App;
