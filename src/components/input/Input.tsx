import React, { FormEvent } from 'react';
import * as S from './Input.styles';

type props = {
  name: string,
  error?: string,
  label?:string,
  placeholder: string,
  type:string,
  icon?: boolean,
  value?: string | number,
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void,
  handleBlur?: (event: React.FormEvent<HTMLInputElement>) => void,
  handleDelete?: () => void,
}

const Input = ({error, name, label, placeholder, type, icon, value, handleChange, handleDelete, handleBlur}: props) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <S.InputContainer error={error}>
          <S.Input name={name} type={type} placeholder={placeholder} value={value} onChange={handleChange} onBlur={handleBlur}/>
          {error && <S.Span>{error}</S.Span>}
        </S.InputContainer>
        {icon && <S.Icon onClick={handleDelete}
      />}
      </S.InputWrapper>
    </S.Container>
  )
}

export default Input