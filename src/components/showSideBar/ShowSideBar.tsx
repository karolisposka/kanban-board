import React from 'react';
import * as S from './ShowSideBar.styles';

type props = {
    handleClick: () => void,
    show: boolean,
}

const ShowSideBar = ({handleClick, show}: props) => {
  return (
    <S.IconContainer onClick={handleClick} show={show.toString()}>
        <S.ShowIcon/>
    </S.IconContainer>
  )
}

export default ShowSideBar