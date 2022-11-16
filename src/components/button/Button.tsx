import React from 'react';
import * as S from './Button.styles';

type button = {
    text: string,
    className?:any,
    disabled:boolean,
    handleClick: () => void,
}

const Button: React.FC<button> = ({ handleClick, disabled, text, className}) => {
  return (
    <S.Button className={className} disabled={disabled} onClick={handleClick}
    >{text}</S.Button>
  )
}

export default Button