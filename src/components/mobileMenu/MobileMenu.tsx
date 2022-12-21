import React from 'react';
import * as S from './MobileMenu.styles';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../store/slices/users';
import { link } from '../../models';

type props = {
  show: boolean;
  handleToggle: () => void;
  theme: string;
  links: link[];
};

const MobileMenu = ({ show, links, handleToggle, theme }: props) => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  return (
    <S.Container show={show}>
      <S.Section>
        <S.Boards>
          all boards (<S.Span>{links && links.length}</S.Span>)
        </S.Boards>
        <S.List>
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
            Create new board
          </S.StyledLink>
        </S.List>
        <S.Toggler handleClick={handleToggle} theme={theme} />
        <S.LogoutBtn
          text="Logout"
          type="button"
          disabled={false}
          handleClick={() => {
            dispatch(logout());
          }}
        />
      </S.Section>
    </S.Container>
  );
};

export default MobileMenu;
