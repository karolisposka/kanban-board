import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import List from '../components/list/List';
import Container from '../components/container/Container';
import Loader from '../components/loader/Loader';

const Board = () => {
  const { board, status } = useAppSelector((state) => state.board);

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
      {board ? <List list={board.columns} /> : <Loader />}
      <Outlet />
    </Container>
  );
};

export default Board;
