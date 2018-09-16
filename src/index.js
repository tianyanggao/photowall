import React ,{Component}from 'react';
import ReactDOM from 'react-dom';

import './styles/stylesheet.css'
import{ BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './Redux/reducer'
import {Provider} from 'react-redux'
import Main from './Components/Main'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>, document.getElementById('root'));
