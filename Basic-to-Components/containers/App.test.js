import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Practice from './Practice';
//import Practice from './Practice'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Practice />, div);
  ReactDOM.unmountComponentAtNode(div);
});
