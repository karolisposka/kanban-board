import Styled from 'styled-components';

type props = {
    show: string,
}

export const SideBarContainer = Styled.div<props>`
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

