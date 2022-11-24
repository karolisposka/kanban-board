import React from 'react';
import * as S from './Loader.styles';

const Loader = () => {
  return (
    <S.Ring>
        <S.RingComponent/>
        <S.RingComponent/>
        <S.RingComponent/>
    </S.Ring>
  )
}

export default Loader