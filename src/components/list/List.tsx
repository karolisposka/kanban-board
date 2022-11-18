import React from 'react';
import * as S from './List.styles';

type props = {
    children: JSX.Element,
}

const List = ({children} : props) => {
  return (
    <S.Container>
        {children}
    </S.Container>
  )
}

export default List