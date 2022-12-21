import React from 'react';
import * as S from './Loader.styles';

type props = {
  className?: string,
};

const Loader = ({className}: props) => {
  return (
    <S.Ring className={className}>
        <S.RingComponent/>
        <S.RingComponent/>
        <S.RingComponent/>
    </S.Ring>
  )
}

export default Loader