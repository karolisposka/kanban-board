import React, {useContext} from 'react';
import {themeContext} from '../../context';
import * as S from './Header.styles';
import {useNavigate, useLocation} from 'react-router-dom';

//change navigate location to '/edit' instead of '/test';

type props = {
    show: boolean,
    handleClick: () => void,
    columnsLength: number,
}

const Header = ({show, handleClick, columnsLength}: props) => {
    const [theme] = useContext(themeContext);
    const navigate = useNavigate();
    const location = useLocation();

    //navigates to main page 

    const handleLogoClick = () => {
        if (location.pathname !== '/'){
            navigate('/')
        }else {
            return
        }
    };

    return (
        <S.Header>
                <S.DesktopLogo>
                    {theme === 'light' ? <S.DarkLogo/> : <S.LightLogo/>}
                </S.DesktopLogo>
                <S.Section>
                <S.LogoWrapper>
                    <S.Logo onClick ={ () =>{
                        handleLogoClick()
                    }}/>
                    <S.Title>Platform Launch</S.Title>
                    <S.Chevron state={show.toString()} onClick={()=>{
                        handleClick();
                    }}/> 
                </S.LogoWrapper>
                <S.ButtonsWrapper>
                    <S.AddBtn disabled={columnsLength === 0 ? true : false} handleClick={()=>{
                        navigate('/test');
                    }} text='+'/>
                    <S.AddBtnWide disabled={columnsLength === 0 ? true : false} handleClick={()=>{
                        navigate('/test');
                    }} text='+ Add New Task'/>
                    <S.StyledEllipsis/>
                </S.ButtonsWrapper>
            </S.Section>
        </S.Header>
    )
}

export default Header