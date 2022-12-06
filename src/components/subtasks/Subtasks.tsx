import React from 'react';
import * as S from './Subtasks.styles';
import Checkbox from '../checkbox/Checkbox';

const Subtasks = () => {
    const completed = 2;
    const total = 3;
  return (
    <S.SubtasksWrapper>
      <S.Form>
        <S.StyledHeading>Subtasks {`(${completed} of ${total})`}</S.StyledHeading>
        <Checkbox label='hello world something else'/>
        <Checkbox label='hello world something else'/>
        <Checkbox label='hello world something else'/>
      </S.Form>
    </S.SubtasksWrapper>
  )
}

export default Subtasks