import React, { useEffect, useState } from 'react';
import * as S from './Input.styles';
import { getIn } from 'formik';

type props = {
  id?: string;
  name: string;
  error?: any | undefined;
  label?: string;
  placeholder?: string;
  type: string;
  icon?: boolean;
  touched?: any;
  value?: string | number;
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleDelete?: () => void;
};

const Input = ({
  error,
  name,
  label,
  id,
  touched,
  placeholder,
  type,
  icon,
  value,
  handleChange,
  handleDelete,
  handleBlur,
}: props) => {
  const [errorValue, setErrorValue] = useState<string>();

  const FormikError = (errors: any, touched: any, fieldName: any) => {
    if (typeof errors === 'string') {
      return setErrorValue(errors);
    } else {
      const error = getIn(errors, fieldName);
      const touch = getIn(touched, fieldName);
      if (touch && error) {
        setErrorValue(Object.values(error).toString());
      } else {
        setErrorValue('');
      }
    }
  };

  useEffect(() => {
    FormikError(error, touched, name);
  }, [error, touched, name]);

  return (
    <S.Container id={id}>
      {label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <S.InputContainer error={errorValue}>
          <S.Input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errorValue && <S.Span>{errorValue}</S.Span>}
        </S.InputContainer>
        {icon && <S.Icon onClick={handleDelete} />}
      </S.InputWrapper>
    </S.Container>
  );
};

export default Input;
