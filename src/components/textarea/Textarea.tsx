import React from 'react';
import * as S from './Textarea.styles';

type props = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.FormEvent) => void;
  error: string | undefined;
};

const Textarea = ({ label, name, placeholder, value, handleChange, error }: props) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Textarea
        name={name}
        error={error}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <S.Span>{error}</S.Span>}
    </S.Container>
  );
};

export default Textarea;
