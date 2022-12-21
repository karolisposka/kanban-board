import Styled from 'styled-components';

export const Container = Styled.div`
    background:${props=>props.theme.background.primary};
    font-family:${props=>props.theme.fonts.name};
    min-height:calc(100vh - 67px);
    @media(min-width:576px){
        min-height:calc(100vh - 71px);
    }
`;


