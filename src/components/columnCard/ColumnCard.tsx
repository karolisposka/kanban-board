import React from 'react';
import * as S from './ColumnCard.styles';

type props = {
  title: string,
  subtasks: number,
  subtasksCompleted: number,
  handleClick: () => void,
}

const ColumnCard = ({title, subtasks, subtasksCompleted, handleClick}: props) => {
  return (
    <S.Card onClick={handleClick}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardSubTasks>{subtasks} of {subtasksCompleted} subtasks</S.CardSubTasks>
    </S.Card>
  )
}

export default ColumnCard