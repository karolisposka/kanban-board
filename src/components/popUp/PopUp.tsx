import React from 'react';
import * as S from './PopUp.styles';
import { useParams } from 'react-router-dom';

type props = {
  editPath: string;
  deletePath: string;
  className?: string;
  title: string;
};

const PopUp = ({ className, editPath, deletePath, title }: props) => {
  return (
    <S.Container className={className}>
      <S.Button to={editPath}>Edit {title}</S.Button>
      <S.Button to={deletePath}>Delete {title}</S.Button>
    </S.Container>
  );
};

export default PopUp;
