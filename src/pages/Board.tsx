import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import List from '../components/list/List';
import Container from '../components/container/Container';
import Loader from '../components/loader/Loader';

const Board = () => {
  const query = useAppSelector((state) => state.board.board);

  return (
    <Container
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        overflow: 'hidden',
      }}
    >
      {query ? <List list={query.columns} /> : <Loader />}
      <Outlet />
    </Container>
  );
};

export default Board;
