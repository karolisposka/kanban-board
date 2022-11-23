import React from 'react';
import * as S from './Container.styles';

type props = {
    children: React.ReactNode,
}

const Container = ({children}: props) => {
  return (
    <S.Container>
        <S.Section>
            {children}
        </S.Section>
    </S.Container>
  )
}

export default Container