import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = Styled.div`
    position: absolute;
    width:192px;
    right:-5rem;
    top:4rem;
    display:flex;
    flex-direction:column;
    background:${(props) => props.theme.background.popUp};
    text-transform: uppercase;
    font-weight:500;
    border-radius:0.5rem;
`;

export const Button = Styled(Link)`
    border:none;
    text-decoration:none;
    background:transparent;
    text-transform: capitalize;
    text-align:left;
    font-size:13px;
    cursor:pointer;
    &:first-of-type{
        color:${(props) => props.theme.fonts.colors.gray};
        padding:16px 0 8px 16px;
    }
    &:nth-of-type(2){
        color:${(props) => props.theme.background.red};
        padding:8px 0 16px 16px;
    }

`;
