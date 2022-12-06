import React, {useState} from 'react';
import * as S from './Checkbox.styles';

type props ={
    label: string,

}

const Checkbox = ({label}: props) => {
    const [checked, setChecked] = useState<boolean>(false);
  return (
    <S.Checkbox>
        <S.Input checked={checked} name='test' type='checkbox' onChange={()=>{
            setChecked(!checked)
        }}/>
        {!checked ?  <S.Label>{label}</S.Label> : <S.Strikethrough>{label}</S.Strikethrough>}
        
    </S.Checkbox>
  )
}

export default Checkbox