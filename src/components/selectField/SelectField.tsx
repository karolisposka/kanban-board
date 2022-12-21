import React from 'react';
import Select from 'react-select';
import { useAppSelector } from '../../hooks';
import { SelectOptions } from './SelectOptions';
import * as S from './SelectField.styles';

type props = {
  className?: string;
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  handleChange: (option: any) => void;
  disabled?: boolean;
  value: string;
};

const SelectField = ({ label, name, options, className, disabled, value, handleChange }: props) => {
  //themecontext is used for select custom styling;
  const { theme } = useAppSelector((state) => state.user);

  const customStyles = SelectOptions(theme);

  return (
    <S.SelectContainer className={className}>
      <S.Label>{label}</S.Label>
      {options && (
        <Select
          name={name}
          options={options}
          onChange={(e) => {
            handleChange(e);
          }}
          value={options.filter((option) => option.label === value)}
          isDisabled={disabled}
          styles={customStyles}
        />
      )}
    </S.SelectContainer>
  );
};

export default SelectField;
