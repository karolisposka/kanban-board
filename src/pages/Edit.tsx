import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useParams } from 'react-router-dom';
import Container from '../components/absoluteContainer/Container';
import EditForm from '../components/editBoardForm/EditForm';
import Loader from '../components/loader/Loader';
import { editBoard, fetchBoards } from '../store/slices/board';

type column = {
  name: string;
  columns: {
    id: string;
    name: string;
  }[];
};

const Edit = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const data = useAppSelector((state) => state.board.board);

  useEffect(() => {
    if (!data) {
      dispatch(fetchBoards(page));
    } else {
      return;
    }
  }, [page]);

  return (
    <Container>
      {typeof data === 'object' ? (
        <EditForm
          initialValues={data}
          handleSubmit={(val) => {
            const object = {
              page: page,
              object: val,
            };

            dispatch(editBoard(object));
          }}
        />
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Edit;
