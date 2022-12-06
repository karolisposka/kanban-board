import React from 'react';
import * as S from './Textarea.styles';

type props = {
    label: string,
    placeholder: string,
    value: string,
    handleChange: (e: React.FormEvent) => void,
}

const Textarea = ({label, placeholder, value, handleChange}: props) => {
  return (
    <S.Container>
        <S.Label>{label}</S.Label>
        <S.Textarea placeholder={placeholder} value={value} onChange={handleChange}/>
    </S.Container>
  )
}

export default Textarea