import React from 'react';
import Container from '../components/absoluteContainer/Container';
import DeleteConfirm from '../components/deleteConfirm/DeleteConfirm';
import { deleteBoard } from '../store/slices/board';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';

const Delete = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { page } = useParams();

  return (
    <Container>
      <DeleteConfirm
        title="Board"
        handleCancel={() => {
          navigate(-1);
        }}
        handleDelete={() => {
          dispatch(deleteBoard(page));
        }}
      />
    </Container>
  );
};

export default Delete;
