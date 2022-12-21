import React from 'react';
import Container from '../components/absoluteContainer/Container';
import DeleteConfirm from '../components/deleteConfirm/DeleteConfirm';
import { deleteTask } from '../store/slices/board';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';

const DeleteTask = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { page, column, id } = useParams();

  return (
    <Container>
      <DeleteConfirm
        title="task"
        handleCancel={() => {
          navigate(-1);
        }}
        handleDelete={() => {
          dispatch(deleteTask({ taskId: id, column, page }));
          navigate(`/${page}`);
        }}
      />
    </Container>
  );
};

export default DeleteTask;
