import React from 'react';
import * as S from './MainContainer.styles';

type props = {
    children: React.ReactNode,
}

const MainContainer = ({children}: props) => {
  return (
    <S.Container>
        <S.Section>
            {children}
        </S.Section>
    </S.Container>
  )
}

export default MainContainer