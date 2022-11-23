import React from 'react';
import Edit from './pages/Edit';
import New from './pages/New';
import Layout from './pages/Layout';
import List from './components/list/List';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';


function Router() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
              <Route path='' element={<Home/>}>
                  <Route path=':name' element={<List/>}/>
                  <Route path='edit' element={<Edit/>}/>
                  <Route path='new' element={<New/>}/>
                  <Route path='test' element={<Home/>}/>
                </Route>
              </Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
