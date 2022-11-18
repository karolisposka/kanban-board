import Styled from 'styled-components';

type slider = {
    checked: string,
}


export const Switch = Styled.div<slider>`
    position:relative;
    display:flex;
    align-items:center;
    width:35px;
    height:20px;
    border-radius:5rem;
    margin: 0 15px;
    background:${props=>props.theme.background.purple};
    transition:0.1s ease-in-out;
    cursor:pointer;
    &:hover{
        background:${props=>props.theme.hover.purpleHover};
    }
    &:before{
        content:'';
        position: absolute;
        width:15px;
        margin:2px;
        height:15px;
        border-radius:5rem;
        transition:0.2s ease-in-out;
        left: ${props=>props.checked ==='light' ? '15px' : '0'};
        background:#ffffff;


    }
`

