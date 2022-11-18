import React from 'react';
import * as S from './SideBar.styles';

type props = {
    show: boolean,
}

const SideBar = ({show}: props) => {
    return (
        <S.SideBarContainer show={show.toString()}>
                hello
        </S.SideBarContainer>
    )
}

export default SideBar