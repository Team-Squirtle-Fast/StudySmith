import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from './containers/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    < App />
);