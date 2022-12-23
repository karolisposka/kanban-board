import Styled, { keyframes } from 'styled-components';
import Link from '../link/Link';
import { ReactComponent as Icon } from '../../assets/icon-hide-sidebar.svg';
import ThemeToggler from '../themeToggler/ThemeToggler';
import Button from '../button/Button';

type props = {
  show: string;
};

export const SideBarContainer = Styled.div<props>`
    position:relative;
    font-family:${(props) => props.theme.fonts.name};
    background:${(props) => props.theme.background.secondary};
    border-right:1px solid ${(props) => props.theme.border.primary};
    transition:0.2s ease-in-out;
    overflow:hidden;
    width:${(props) => (props.show === 'true' ? '33%' : '0%')}; 
    max-width:255px;
    @media(max-width:576px){
        display:none
    }
`;

export const Boards = Styled.h1`
    color:${(props) => props.theme.fonts.colors.secondary};
    font-size:12px;
    letter-spacing:2.4px;
    font-weight:700;
    text-transform:uppercase;
    padding: 0 16px;
`;

export const Span = Styled.span`
    

`;

export const LinksList = Styled.ul`
   padding:0;
   animation-delay: 0.3s;

`;

export const StyledLink = Styled(Link)`
    padding:0.5rem 1rem;
    margin-right:1rem;
    border-top-right-radius:2rem;
    border-bottom-right-radius:2rem;
    transition:0.2s ease-in-out;
    color:${(props) => props.theme.fonts.colors.secondary};
    &.active{
        background:${(props) => props.theme.background.purple};
        color:${(props) => props.theme.fonts.colors.primary};
    } 
    &:hover:not(.active){
        background: ${(props) => props.theme.background.light};
    }
`;

export const Toggler = Styled(ThemeToggler)`
    bottom:3rem;

`;

export const HideButton = Styled.button`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    position:absolute;
    bottom:0;
    width:calc(100% - 1rem);
    margin:0.5rem 0;
    padding:0.5rem 16px;
    border-top-right-radius:2rem;
    border-bottom-right-radius:2rem;
    border:none;
    color:${(props) => props.theme.background.purple};
    background:transparent;
    transition:0.2s ease-in-out;
    cursor:pointer;
    font-weight:700;
    font-size:15px;
    &:hover{
        background: ${(props) => props.theme.background.light};
        color:${(props) => props.theme.hover.purpleHover};
        transform:scale(1.02);
    }
`;

export const ViewIcon = Styled(Icon)`
    margin-right:0.5rem;
`;

export const LogoutBtn = Styled(Button)`
    background:${(props) => props.theme.background.light};
    color:${(props) => props.theme.fonts.colors.purple};
    font-weight:700;
    width:calc(100% - 2rem);
    padding:1rem;
    border-radius:0.25rem;
    margin: 0.5rem 1rem 1rem 1rem;
    transition:0.3s ease-in;
    &:hover{
        background:${(props) => props.theme.hover.purpleHover};
        color:${(props) => props.theme.fonts.colors.light};
    }
    
`;
