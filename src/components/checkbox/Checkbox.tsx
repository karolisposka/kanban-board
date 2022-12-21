import React, { useState, useEffect } from 'react';
import * as S from './Checkbox.styles';

type props = {
  id: string;
  label: string;
  disabled?: boolean;
  checked: boolean;
  handleChange: (e: any) => void;
};

const Checkbox = ({ label, id, disabled, handleChange, checked }: props) => {
  const [completed, setCompleted] = useState<boolean>(checked);

  useEffect(() => {
    setCompleted(checked);
  }, [checked]);

  return (
    <S.Checkbox>
      <S.Input
        checked={completed}
        disabled={disabled}
        name="test"
        type="checkbox"
        onChange={() => {
          handleChange(completed);
        }}
      />
      {!completed ? <S.Label>{label}</S.Label> : <S.Strikethrough>{label}</S.Strikethrough>}
    </S.Checkbox>
  );
};

export default Checkbox;
