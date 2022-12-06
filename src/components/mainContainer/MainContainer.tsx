import React from 'react';
import * as S from './MainContainer.styles';

type props = {
    children: React.ReactNode,
    size?:string
}

const MainContainer = ({children, size}: props) => {
  return (
    <S.Container size={size}>
        <S.Section>
            {children}
        </S.Section>
    </S.Container>
  )
}

export default MainContainer