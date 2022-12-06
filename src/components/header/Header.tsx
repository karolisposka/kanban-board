import React, {useContext} from 'react';
import {themeContext} from '../../context';
import * as S from './Header.styles';
import {useNavigate, useLocation, useParams} from 'react-router-dom';


type props = {
    show: boolean,
    handleClick: () => void,
    board: string | undefined
}

const Header = ({show, handleClick, board}: props) => {
    const [theme] = useContext(themeContext);
    const paths = useParams();
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
                    <S.Title>{board && board}</S.Title>
                    <S.Chevron state={show.toString()} onClick={()=>{
                        handleClick();
                    }}/> 
                </S.LogoWrapper>
                <S.ButtonsWrapper>
                    <S.AddBtn type='button' disabled={false} handleClick={()=>{
                        navigate(`/${paths.page}/newTask`);
                    }} text='+'/>
                    <S.AddBtnWide  type='button' disabled={false} handleClick={()=>{
                        navigate(`/${paths.page}/newTask`);
                    }} text='+ Add New Task'/>
                    <S.StyledEllipsis/>
                </S.ButtonsWrapper>
            </S.Section>
        </S.Header>
    )
}

export default Header