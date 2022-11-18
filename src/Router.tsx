import React from 'react';
// import { themeContext, dataContext } from './context';
// import { darkTheme, lightTheme } from './theme';
// import { ThemeProvider } from 'styled-components';
import Edit from './pages/Edit';
import Layout from './pages/Layout';
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
                  <Route path='edit' element={<Edit/>}/>
                  <Route path='test' element={<Home/>}/>
                </Route>
              </Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
