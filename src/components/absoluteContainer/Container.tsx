import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Container.styles';

type props = {
  children: React.ReactNode;
};

const Container = ({ children }: props) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.CloseBtn
        onClick={() => {
          navigate(-1);
        }}
      />

      <S.Section>{children}</S.Section>
    </S.Container>
  );
};

export default Container;
