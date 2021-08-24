import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

//react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';



function index(){
  return(
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
    document.getElementById('root')
    )
  );
}
export default index

