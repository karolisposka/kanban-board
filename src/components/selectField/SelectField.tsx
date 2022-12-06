import React, {useContext} from 'react';
import { themeContext } from '../../context';
import AsyncSelect from 'react-select/async';
import { SelectOptions } from './SelectOptions';
import * as S from './SelectField.styles';

const SelectField = () => {
  const [theme] = useContext(themeContext);
  const customStyles = SelectOptions(theme);

  type option = {
    value: string,
    label: string,
  }
  const options: option[] = [
    {
      value: 'todo',
      label:'todo'
    },
    {
      value: 'doing',
      label:'doing'
    },
    {
      value: 'done',
      label:'done'
    },
  ];

  const handleChange = ( option: any )=>{
    console.log(option)
  };

  const loadOptions = (searchValue: any, callback: any)=>{
    const filteredOptions = options.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()));
    callback(filteredOptions);
  }

  return (
    <S.SelectContainer>
      <S.Label>Current status</S.Label>
      <AsyncSelect loadOptions={loadOptions} defaultOptions onChange={handleChange} styles={customStyles}/>
    </S.SelectContainer>
    
  )
}

export default SelectField