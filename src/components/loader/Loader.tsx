import React from 'react';
import * as S from './Loader.styles';

type props = {
  className?: string;
};

const Loader = ({ className }: props) => {
  return (
    <S.loaderContainer>
      <S.Ring className={className}>
        <S.RingComponent />
        <S.RingComponent />
        <S.RingComponent />
      </S.Ring>
    </S.loaderContainer>
  );
};

export default Loader;
