import React, {useContext} from 'react';
import {link} from '../../models';
import { themeContext } from '../../context';
import * as S from './Sidebar.styles';



type props = {
    show: boolean,
    links: link[],
    handleClose: () => void,

}

const Sidebar = ({show, links, handleClose}: props) => {
    const [theme, setTheme] = useContext(themeContext);

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
        <S.SideBarContainer show={show.toString()}>
            <S.Boards>all boards (<S.Span>3</S.Span>)</S.Boards>
            <S.LinksList>
                {links && links.map((link,index) => (
                    <S.StyledLink key={index} icon={true} to={link.path}>{link.text}</S.StyledLink>
                ))}
            </S.LinksList>
            <S.Toggler 
                theme={theme} 
                handleClick={()=> {
                toggleTheme()
                }}
            />
            <S.HideButton type='button' onClick={handleClose}>
                <S.ViewIcon/>
                hide sidebar
            </S.HideButton>
        </S.SideBarContainer>
    )
}

export default Sidebar