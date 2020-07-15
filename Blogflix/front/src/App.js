import React from 'react';
import './App.css';
import BaseRouter from './Routes';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux'
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">

        <Router>
                <BaseRouter/>
        </Router>
    </div>
    </Provider>
  );
}

export default App;

