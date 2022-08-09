import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store'

import App from './containers/App.jsx';
import Signup from './components/Signup.jsx';
import Home from './containers/Home.jsx';
import Calendar from './containers/Calendar.jsx';
import DailyLog from './containers/DailyLog.jsx';
import Resources from './containers/Resources.jsx';
import Settings from './containers/Settings.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path='/signup' element={<Signup/>} />
              <Route path='/' element={<App/>}>
                <Route path='/resources' element={<Resources/>}/>
                <Route path='/dailylog' element={<DailyLog/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/' element={<Home/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
   </Provider>
);