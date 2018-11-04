import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {questionsReducer} from './reducers';
import './index.scss';


   //body {
   //  background-color: #fff3cd;
   //  box-sizing: content-box;
   //}

const store = createStore(questionsReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
