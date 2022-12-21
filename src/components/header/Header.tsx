import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import * as S from './Header.styles';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

type props = {
  show: boolean;
  handleClick: () => void;
  board: string;
};

const Header = ({ show, handleClick, board }: props) => {
  const { theme } = useAppSelector((state) => state.user);
  const [display, setDisplay] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const { page } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  //navigates to main page

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(board);
    if (board) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [board]);

  return (
    <S.Header>
      <S.DesktopLogo>{theme === 'light' ? <S.DarkLogo /> : <S.LightLogo />}</S.DesktopLogo>
      <S.Section>
        <S.LogoWrapper>
          <S.Logo
            onClick={() => {
              handleLogoClick();
            }}
          />
          <S.Title>{board && board}</S.Title>
          <S.Chevron
            state={show.toString()}
            onClick={() => {
              handleClick();
            }}
          />
        </S.LogoWrapper>
        <S.ButtonsWrapper>
          <S.AddBtn
            type="button"
            disabled={disabled}
            handleClick={() => {
              navigate(`/${page}/newTask`);
            }}
            text="+"
          />
          <S.AddBtnWide
            type="button"
            disabled={disabled}
            primary={true}
            handleClick={() => {
              navigate(`/${page}/newTask`);
            }}
            text="+ Add New Task"
          />
          <S.StyledEllipsis
            onClick={() => {
              setDisplay(!display);
            }}
          />
          {display && (
            <S.StyledPopUp title="board" deletePath={`${page}/delete`} editPath={`${page}/edit`} />
          )}
        </S.ButtonsWrapper>
      </S.Section>
    </S.Header>
  );
};

export default Header;
