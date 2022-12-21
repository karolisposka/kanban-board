import React, { useState, useEffect } from 'react';
import { fetchBoards } from '../store/slices/board';
import { fetchCategories } from '../store/slices/board';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { toggleTheme } from '../store/slices/users';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import ShowSidebar from '../components/showSidebar/ShowSideBar';
import Container from '../components/container/Container';
import Sidebar from '../components/sidebar/SideBar';

const Layout = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.user);
  const [show, setShow] = useState<boolean>(false);
  const { page } = useParams();
  const navigate = useNavigate();
  const board = useAppSelector((state) => state.board.board);
  const categories = useAppSelector((state) => state.board.categories);
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
      navigate('/0');
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
          <Sidebar
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
        <ShowSidebar
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
