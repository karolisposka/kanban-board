import React from 'react';
import { link } from '../../models';
import * as S from './SideBar.styles';
import { useParams } from 'react-router-dom';

type props = {
  show: boolean;
  theme: string;
  links: link[];
  handleClose: () => void;
  handleToggler: () => void;
};

const SideBar = ({ show, links, theme, handleClose, handleToggler }: props) => {
  const { page } = useParams();
  return (
    <S.SideBarContainer show={show.toString()}>
      <S.Boards>
        all boards (<S.Span>{links && links.length}</S.Span>)
      </S.Boards>
      <S.LinksList>
        {links ? (
          links.map((link, index) => (
            <S.StyledLink key={index} icon={true} to={link.path}>
              {link.text}
            </S.StyledLink>
          ))
        ) : (
          <S.Span style={{ padding: '0 16px' }}> No projects yet</S.Span>
        )}
        <S.StyledLink icon={true} to={`/${page}/new`}>
          + create new board
        </S.StyledLink>
      </S.LinksList>
      <S.Toggler theme={theme} handleClick={handleToggler} />
      <S.HideButton type="button" onClick={handleClose}>
        <S.ViewIcon />
        hide sidebar
      </S.HideButton>
    </S.SideBarContainer>
  );
};

export default SideBar;
