import Styled from 'styled-components';

export const Column = Styled.div`
    font-family:${props=>props.theme.fonts.name};
    &&:nth-last-child(2){
        background:yellow;
    }
`;

export const TitleWrapper = Styled.div`
    display:flex;
    align-items:center;
`;

export const Dot = Styled.div`
    width:10px;
    height:10px;
    border-radius:50%;
    margin-right:8px;
    background:yellow;
`

export const ColumnName = Styled.h3`
    color:${props=>props.theme.fonts.colors.gray};
    font-size:13px;
    font-weight:500;
    margin:0.5rem 0;
    text-transform:uppercase;
    letter-spacing:2.4px;
`;

export const Span = Styled.span`
    margin-left:0.5rem;
`;


export const TasksList = Styled.ul`
    padding:0;

`;

