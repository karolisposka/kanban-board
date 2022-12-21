import React from 'react';
import * as S from './ColumnCard.styles';

type props = {
  name?: string;
  id?: string;
  subtasks: number;
  subtasksCompleted: number;
  handleClick: () => void;
};

const ColumnCard = ({ name, subtasks, subtasksCompleted, handleClick }: props) => {
  return (
    <S.Card onClick={handleClick}>
      <S.CardTitle>{name}</S.CardTitle>
      <S.CardSubTasks>
        {subtasks} of {subtasksCompleted} subtasks
      </S.CardSubTasks>
    </S.Card>
  );
};

export default ColumnCard;
