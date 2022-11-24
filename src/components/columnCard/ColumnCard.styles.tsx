import Styled from 'styled-components';


export const Card = Styled.div`
    background:${props=>props.theme.background.secondary};
    border-radius:0.5rem;
    padding:1rem;
    margin:0.75rem 0;
    cursor:pointer;
`;

export const CardTitle = Styled.h3`
    color:${props=>props.theme.fonts.colors.primary};
    font-size:12px;
    font-weight:700;
    line-height:15px;
    margin:0;
`

export const CardSubTasks = Styled.span`
    color:${props=>props.theme.fonts.colors.gray};
    font-size:12px;

`;

