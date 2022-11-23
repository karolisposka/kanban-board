import React from 'react';
import * as S from './MobileMenu.styles';
import {link} from '../../models';

type props = {
    show: boolean,
    handleToggle: () => void,
    theme: string,
    links: link[],
}

const MobileMenu = ({show, links, handleToggle, theme}:props) => {
  return (
    <S.Container show={show}>
        <S.Section>
            <S.Boards>All boards <S.Span>(2)</S.Span></S.Boards>
            <S.List>
              {links ? links.map((link,index) => (
                      <S.StyledLink key={index} icon={true} to={link.path}>{link.text}</S.StyledLink>
                  )) : <S.Span style={{padding:'0 16px'}}> No projects yet</S.Span>}
              </S.List>
            <S.Toggler handleClick={handleToggle} theme={theme}/>
        </S.Section>
    </S.Container>
  )
}

export default MobileMenu