import React from 'react';
import * as S from './PopUp.styles';

type props ={
    handleEdit: ()=> void,
    handleDelete: ()=> void,

}

const PopUp = ({handleEdit, handleDelete}:props) => {
  return (
    <S.Container>
        <S.Button type='button' onClick={handleEdit}>Edit Task</S.Button>
        <S.Button type='button' onClick={handleDelete}>Delete Task</S.Button>
    </S.Container>
  )
}

export default PopUp