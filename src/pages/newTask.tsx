import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import uuid from 'react-uuid';
import { addTask } from '../store/slices/board';
import { fetchBoards } from '../store/slices/board';
import { useParams } from 'react-router-dom';
import Container from '../components/absoluteContainer/Container';
import NewTaskForm from '../components/newTaskForm/NewTaskForm';

const NewTask = () => {
  const board = useAppSelector((state) => state.board.board);
  const dispatch = useAppDispatch();
  type options = {
    label: string;
    value: string;
  }[];

  const [selectOptions, setSelectOptions] = useState<options>();

  const mapToSelectOptions = (arr: any) => {
    if (arr) {
      setSelectOptions(
        arr?.columns?.map((column: any) => {
          return {
            label: column.name,
            value: column.name,
          };
        }),
      );
    }
    return;
  };

  useEffect(() => {
    if (board) {
      mapToSelectOptions(board);
    } else {
      dispatch(fetchBoards());
    }
  }, [board]);

  const { page } = useParams();

  return (
    <Container>
      <NewTaskForm
        options={selectOptions!}
        handleSubmit={(object) => {
          dispatch(addTask({ page, object }));
        }}
      />
    </Container>
  );
};

export default NewTask;
