import React from 'react';
import Edit from './pages/Edit';
import New from './pages/New';
import Layout from './pages/Layout';
import SingleTask from './pages/SingleTask';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Board from './pages/Board';


function Router() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path=':page' element={<Board/>}>
                  <Route path='/:page/edit' element={<Edit/>}/>
                  <Route path='/:page/new' element={<New/>}/>
                  <Route path='/:page/task/:id' element={<SingleTask/>}/>
                </Route>
              </Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
