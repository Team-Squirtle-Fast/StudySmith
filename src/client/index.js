import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './containers/App.jsx';
import Signup from './components/Signup.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/' element={<App/>}/>
        </Routes>
    </BrowserRouter>
);