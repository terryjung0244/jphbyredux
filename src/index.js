import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootSaga from "./service/saga/";
import rootReducer from "./service/store";
import createSagaMiddleware from "@redux-saga/core";
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();
const rootNode = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>

    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
