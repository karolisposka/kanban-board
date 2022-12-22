import React, { useState, useEffect } from 'react';
import Showbar from '../components/showbar/Showbar';
import Header from '../components/header/Header';
import Side from '../components/side/Side';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import Container from '../components/container/Container';
import { fetchBoards } from '../store/slices/board';
import { fetchCategories } from '../store/slices/board';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { toggleTheme } from '../store/slices/users';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { categories, board } = useAppSelector((state) => state.board);
  const { theme } = useAppSelector((state) => state.user);
  const [show, setShow] = useState<boolean>(false);
  const { page } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchBoards(page));
  }, [page]);

  useEffect(() => {
    if (categories.length > 0) {
      navigate(categories[0].path);
    } else {
      navigate('/empty');
    }
  }, [categories]);

  return (
    <>
      <Container style={{ position: 'relative' }}>
        <Header
          board={board?.name}
          show={show}
          handleClick={() => {
            setShow(!show);
          }}
        />
        <Container
          style={{
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <Side
            theme={theme}
            show={show}
            links={categories}
            handleClose={() => {
              setShow(false);
            }}
            handleToggler={() => {
              dispatch(toggleTheme());
            }}
          />
          <Outlet />
        </Container>
        <Showbar
          show={show}
          handleClick={() => {
            setShow(true);
          }}
        />
        <MobileMenu
          links={categories}
          theme={theme}
          show={show}
          handleToggle={() => {
            dispatch(toggleTheme());
          }}
        />
      </Container>
    </>
  );
};

export default Layout;
