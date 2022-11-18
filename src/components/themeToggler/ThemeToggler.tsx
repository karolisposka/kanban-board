import React, {useContext} from 'react';
import { themeContext } from '../../context';
import * as S from './ThemeToggler.styles';
import Switch from '../switch/Switch';

const ThemeToggler = () => {
    const [theme, setTheme] = useContext(themeContext);

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
        <S.Container>
            <S.Dark/>
            <Switch checked={theme} handleClick={()=>{
                toggleTheme();
            }}/>
            <S.Light/>
        </S.Container>
    )
}

export default ThemeToggler