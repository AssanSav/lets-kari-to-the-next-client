import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux"
import {Provider} from "react-redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {rootReducer} from "./reducers"
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)))
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        
        </Provider>
        <footer>
            <div class="footer-copyright text-center py-3" style={{color: "white"}}>© 2020 Copyright:
            <a href="mailto:assane.savadogo81@.com/" style={{fontStyle: "italic"}}> Assane</a>
        </div>
        </footer>
    </React.StrictMode> 
  ,
  document.getElementById('root')
);


