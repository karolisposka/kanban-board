import Styled from 'styled-components';
import Link from '../link/Link';
import ThemeToggler from '../themeToggler/ThemeToggler';

type props = {
  show: boolean;
};

export const Container = Styled.div<props>`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    height: calc(100% - 71px);
    width:100%;
    color:white;
    background:rgba(0,0,0,0.3);
    display:none;
    bottom:0;
    z-index:2;
    font-family:${(props) => props.theme.fonts.name};
    @media(max-width:576px){
        display:${(props) => (props.show ? 'flex' : 'none')};
    }

`;

export const Section = Styled.section`
    width:264px;
    margin-top:1rem;
    background: ${(props) => props.theme.background.secondary};
    border-radius:0.5rem;
`;

export const Boards = Styled.h1`
    color:${(props) => props.theme.fonts.colors.secondary};
    font-size:12px;
    letter-spacing:2.4px;
    font-weight:500;
    text-transform:uppercase;
    padding: 12px 16px;
`;

export const Span = Styled.span`
    

`;

export const List = Styled.ul`
    margin:0.5rem 0;
    padding:0;

`;

export const StyledLink = Styled(Link)`
    padding: 1rem;
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
    position: static;
    margin-bottom:1rem;

`;
