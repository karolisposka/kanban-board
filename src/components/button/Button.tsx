import React from 'react';
import * as S from './Button.styles';

type button = {
    text: string,
    className?:any,
    disabled:boolean,
    primary?: boolean,
    handleClick?: () => void,
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<button> = ({ handleClick, disabled, primary, text, className, type}) => {
  return (
    <S.Button primary={primary} type={type} className={className} disabled={disabled} onClick={handleClick}
    >{text}</S.Button>
  )
}

export default Button