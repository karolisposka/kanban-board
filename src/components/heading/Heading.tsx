import React from 'react';
import * as S from './Heading.styles';


type props = {
    children: React.ReactNode,
    size?: string,
    flex?:string,
    className?:string,
}

const Heading = ({children, className, flex, size}: props) => {
  return (
    <S.Heading className={className} flex={flex} size={size}>{children}</S.Heading>
  )
}

export default Heading