import React from 'react';
import * as S from './SideBar.styles';
import ThemeToggler from '../themeToggler/ThemeToggler';

type props = {
    show: boolean,
}

const SideBar = ({show}: props) => {
    return (
        <S.SideBarContainer show={show.toString()}>
            <S.Boards>all boards (<S.Span>3</S.Span>)</S.Boards>
            <S.LinksList>
                <S.StyledLink icon={true} to='board/edit'>platform launch</S.StyledLink>
                <S.StyledLink icon={true} to='board/test'>road map</S.StyledLink>
                <S.StyledLink icon={true} to='board/marketingplan'>marketing plan</S.StyledLink>
            </S.LinksList>
            <ThemeToggler/>
        </S.SideBarContainer>
    )
}

export default SideBar