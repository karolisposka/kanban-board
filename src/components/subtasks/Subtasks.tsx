import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { updateSubtaskStatus } from '../../store/slices/board';
import * as S from './Subtasks.styles';
import Checkbox from '../checkbox/Checkbox';
import { subtask } from '../../models';

type props = {
  subtasks: subtask[];
};

const Subtasks = ({ subtasks }: props) => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [completed, setCompleted] = useState<number>();
  const [total, setTotal] = useState<number>();

  useEffect(() => {
    if (subtasks) {
      setCompleted((subtasks?.filter((subtask: subtask) => subtask.isCompleted === true)).length);
      setTotal(subtasks?.length);
    }
  }, [subtasks]);

  return (
    <S.SubtasksWrapper>
      <S.StyledHeading>{`Subtasks (${completed} of ${total})`}</S.StyledHeading>
      {subtasks ? (
        subtasks.map((subtask: subtask, index: number) => (
          <Checkbox
            key={index}
            id={subtask.id}
            label={subtask.title}
            checked={subtask.isCompleted}
            handleChange={(status) => {
              console.log(status);
              dispatch(
                updateSubtaskStatus({
                  id: subtask.id,
                  status,
                  page: params.page,
                  column: params.column,
                  task: params.id,
                }),
              );
            }}
          />
        ))
      ) : (
        <S.Loading />
      )}
    </S.SubtasksWrapper>
  );
};

export default Subtasks;
