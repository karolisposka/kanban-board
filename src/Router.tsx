import React, {useState} from 'react';
import { themeContext } from './context';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import Edit from './pages/Edit';
import Layout from './pages/Layout';
import Test from './pages/Test';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';


function Router() {
  const [theme, setTheme ] = useState<string>('light');
  return (
    <div className="App">
      <BrowserRouter>
      <themeContext.Provider value={[theme, setTheme]}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='' element={<Test/>}>
                <Route path='edit' element={<Edit/>}/>
                <Route path='test' element={<Home/>}/>
              </Route>
            </Route>
          </Routes>
          </ThemeProvider>
        </themeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default Router;
