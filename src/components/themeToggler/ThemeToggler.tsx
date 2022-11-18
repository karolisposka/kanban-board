import React from 'react';
import * as S from './ThemeToggler.styles';
import Switch from '../switch/Switch';

type props = {
    handleClick: () => void,
    theme: string,
    className?: string
}

const ThemeToggler = ({handleClick, className, theme}: props) => {
    return (
        <S.Container className={className}>
            <S.Dark/>
            <Switch checked={theme} handleClick={handleClick}/>
            <S.Light/>
        </S.Container>
    )
}

export default ThemeToggler