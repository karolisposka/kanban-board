import React from 'react';
import * as S from './Link.styles';


type  props = {
    to: string,
    children: JSX.Element & string | string,
    icon: boolean,
    className?: string
}

const Link = ({to, children, className, icon}: props) => {
  return (
    <S.StyledLink to={to} className={className}>
        {icon && <S.Icon/>}
        {children}
    </S.StyledLink>
  )
}

export default Link