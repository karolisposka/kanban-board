import React, {useState} from 'react';
import * as S from './Switch.styles';

type props = {
    checked: string,
    handleClick: () => void,
}

const Switch = ({checked, handleClick}:props) => {    
    return (
        <S.Switch checked={checked} onClick={handleClick}/>
    )
}

export default Switch