import React from 'react';
import * as S from './Paragraph.styles';

type props = {
    children: React.ReactNode,
    size?: string,
}
const Paragraph = ({children, size}:props) => {
  return (
    <S.Paragrapth size={size}>{children}</S.Paragrapth>
  )
}

export default Paragraph