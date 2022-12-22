import React from 'react';
import { useAppSelector } from './hooks';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import { darkTheme, lightTheme } from '../src/theme';
import Edit from './pages/Edit';
import New from './pages/New';
import Delete from './pages/Delete';
import DeleteTask from './pages/DeleteTask';
import Layout from './pages/Layout';
import SingleTask from './pages/SingleTask';
import NewTask from './pages/newTask';
import Login from './pages/Login';
import Register from './pages/Register';
import Board from './pages/Board';

function Router() {
  const { token, theme } = useAppSelector((state) => state.user);
  console.log(token);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute user={token} path={'/login' || '/register'} />}>
              <Route path="/" element={<Layout />}>
                <Route path="/new" element={<New />} />
                <Route path=":page" element={<Board />}>
                  <Route path="/:page/edit" element={<Edit />} />
                  <Route path="/:page/delete" element={<Delete />} />
                  <Route path="/:page/new" element={<New />} />
                  <Route path="/:page/newTask" element={<NewTask />} />
                  <Route path="/:page/:column/task/:id" element={<SingleTask />} />
                  <Route path="/:page/:column/task/:id/delete" element={<DeleteTask />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default Router;
