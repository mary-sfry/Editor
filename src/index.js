import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/style.css';

import { Context } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Context>
        <App />
    </Context>
 );
reportWebVitals();
