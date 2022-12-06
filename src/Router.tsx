import React, {useState} from 'react';
import { TokenContext } from './context';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from './utils/privateRoute';
import { ThemeContext } from 'styled-components';
import {darkTheme, lightTheme} from '../src/theme';
import Edit from './pages/Edit';
import New from './pages/New';
import Layout from './pages/Layout';
import SingleTask from './pages/SingleTask';
import NewTask from './pages/newTask';
import Login from './pages/Login';
import Register from './pages/Register';
import Board from './pages/Board';



function Router() {
  
  const localStorageToken: string = JSON.parse(localStorage.getItem("token") ?? '{}');   
  const [theme, setTheme] = useState<string>('darkTheme');
  const [token, setToken] = useState(localStorageToken);

  return (
    <div className="App">
      <BrowserRouter>
        <TokenContext.Provider value={[token, setToken]}>
          <ThemeContext.Provider value={[theme, setTheme]}>
              <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <Routes>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route element={<PrivateRoute user={token} path={'/login' || "/register"}/>}>
                    <Route path='/' element={<Layout/>}>
                      <Route path='/new' element={<New/>}/>
                      <Route path=':page' element={<Board/>}>
                        <Route path='/:page/edit' element={<Edit/>}/>
                        <Route path='/:page/new' element={<New/>}/>
                        <Route path='/:page/newTask' element={<NewTask/>}/>
                        <Route path='/:page/task/:id' element={<SingleTask/>}/>
                      </Route>
                    </Route>
                  </Route>
                </Routes>
            </ThemeProvider>
          </ThemeContext.Provider>
        </TokenContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default Router;
