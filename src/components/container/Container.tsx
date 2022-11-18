import React from 'react'
import * as S from './Container.styles';


type props = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
}
const Container = ({children, className, style} :props) => {
  return (
    <S.Container style={style} className={className}>
        <S.Section>
          {children}
        </S.Section>
      </S.Container>
  )
}

export default Container