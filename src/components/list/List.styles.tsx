import Styled from 'styled-components';
import Column from '../column/Column';

export const Container = Styled.div`
    color:${props=>props.theme.fonts.colors.primary};
    width:100%;
    height:100%;
    padding:1rem;
    
`;

export const BoardColumn = Styled(Column)`
    color:white;
    padding:1rem 0;
    height:100%;
`;

export const NewColumn = Styled.div`
    background:${props=>props.theme.background.secondary};
    display:flex;
    justify-content:center;
    width:100%;
    padding:1rem;
    margin:3.8rem 0;
    border-radius:0.5rem;
    height:100%;
`

export const Button = Styled.button`
    background:transparent;
    border:none;
    color:${props=>props.theme.fonts.colors.gray};
    font-family:${props=>props.theme.fonts.name};
    cursor:pointer;
    line-height:30px;
    font-weight:700;
    @media(min-width:576px){
        font-size:24px;
    }
`


