import React from 'react';
import { CSSProperties } from 'styled-components';
import * as S from './Form.styles';

type props = {
  children: React.ReactNode;
  style?: CSSProperties;
  handleSubmit?: () => void;
};

const Form = ({ children, style, handleSubmit }: props) => {
  return (
    <S.Form style={style} onSubmit={handleSubmit}>
      {children}
    </S.Form>
  );
};

export default Form;
