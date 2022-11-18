import Styled from 'styled-components';
import Link from '../link/Link';

type props = {
    show: string,
}

export const SideBarContainer = Styled.div<props>`
    position:relative;
    font-family:${props=>props.theme.fonts.name};
    background:${props=>props.theme.background.secondary};
    border-right:1px solid ${props=>props.theme.border.primary};
    width:33%;
    min-width:192px;
    max-width:255px;
    display:${props=>props.show === 'true' ? 'block' : 'none'};
    @media(max-width:576px){
        display:none;
    }
`;

export const Boards = Styled.h1`
    color:${props=>props.theme.fonts.colors.secondary};
    font-size:12px;
    letter-spacing:2.4px;
    font-weight:700;
    text-transform:uppercase;
    padding: 0 16px;
`;

export const Span = Styled.span`
    

`;

export const StyledLink = Styled(Link)`
    padding:0.5rem 1rem;
    margin-right:2rem;
    border-top-right-radius:2rem;
    border-bottom-right-radius:2rem;
    &.active{
        background:${props=>props.theme.background.purple};
        color:${props => props.theme.fonts.colors.primary};
    }

`

export const LinksList = Styled.ul`
   padding:0;

`

