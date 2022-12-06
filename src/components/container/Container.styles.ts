import Styled from 'styled-components';

export const Container = Styled.div`
    background:${props=>props.theme.background.primary};
    font-family:${props=>props.theme.fonts.name};
    overflow:hidden;
`;


