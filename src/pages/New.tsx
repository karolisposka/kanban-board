import React from 'react';
import { useAppDispatch } from '../hooks';
import Container from '../components/absoluteContainer/Container';
import BoardForm from '../components/newBoardForm/BoardForm';
import { addBoard } from '../store/slices/board';

const New = () => {
  const dispatchAction = useAppDispatch();

  const handleFormSubmit = (values: any) => {
    dispatchAction(addBoard(values));
  };

  return (
    <Container>
      <BoardForm
        handleSubmit={(values: any) => {
          handleFormSubmit(values);
        }}
      />
    </Container>
  );
};

export default New;
