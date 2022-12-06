import Styled from 'styled-components';

export const SelectContainer = Styled.div`
    width:100%;
    margin-top:32px;
`;

export const Label = Styled.p`
    font-size:12px;
    font-weight:600;
    color:${props=>props.theme.fonts.colors.primary};
    margin:6px 0;

`;