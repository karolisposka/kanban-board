import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Board} from '../../assets/icon-board.svg';

export const StyledLink = Styled(NavLink)`
    font-family:${props=>props.theme.fonts.name};
    color:${props=>props.theme.fonts.colors.gray};
    text-decoration:none;
    font-size:15px;
    line-height:19px;
    text-transform:capitalize;
    font-weight:700;
    display:flex;
    align-items:center;
    padding:1rem;
    transition:0.3s ease-in-out;
    &:hover{
        color:${props=>props.theme.hover.purpleHover};
    }

`

export const Icon = Styled(Board)`
    margin-right:10px;

`