import React from 'react';
import { CSSProperties } from 'styled-components';
import * as S from './Heading.styles';

type props = {
  children: React.ReactNode;
  size?: string;
  flex?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Heading = ({ children, className, flex, style, size }: props) => {
  return (
    <S.Heading className={className} flex={flex} style={style} size={size}>
      {children}
    </S.Heading>
  );
};

export default Heading;
