import Styled from 'styled-components';
import {ReactComponent as LightTheme} from '../../assets/icon-light-theme.svg'; 
import {ReactComponent as DarkTheme} from '../../assets/icon-dark-theme.svg'; 

export const Container = Styled.div`
    background: ${props=>props.theme.background.primary};
    width:calc(100% - 48px);
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    bottom:2rem;
    left: 0;
    margin: 2px 16px;
    padding:8px;
    border-radius:5px;

`

export const Light = Styled(LightTheme)`
    

`

export const Dark = Styled(DarkTheme)`
    
    
`