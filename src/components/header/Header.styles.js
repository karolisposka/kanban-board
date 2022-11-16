import Styled from 'styled-components';
import {ReactComponent as ChevronDown} from '../../assets/icon-chevron-down.svg';
import {ReactComponent as Ellipsis} from '../../assets/icon-vertical-ellipsis.svg';
import Button from '../button/Button';

export const Header = Styled.header`
    font-family:${props=>props.theme.fonts.name};
    background:${props=>props.theme.background.secondary};
`

export  const Section = Styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px 16px;
`

export const LogoWrapper = Styled.div`
    display:flex;
    align-items:Center;
`

export const Title = Styled.span`
    font-size:18px;
    font-weight:700;
    margin-left:16px;
`

export const Chevron = Styled(ChevronDown)`
    margin:0 8px;
`

export const ButtonsWrapper = Styled.div`
    display:flex;
    align-items:center;
`;

export const AddBtn = Styled(Button)`
    background:${props=>props.theme.background.purple};
    font-weight:700;
    line-height:1.2;
    transition:0.2s ease-in-out;
    &&:active:hover:not([disabled]) {
        background: ${props=>props.theme.hover.purpleHover};
    }
    @media(min-width:768px){
        display:none;
    }
`

export const AddBtnWide = Styled(Button)`
    background:${props=>props.theme.background.purple};
    font-weight:500;
    line-height:1.2;
    font-size: 15px;
    padding: 0.6rem 1rem;
    transition:0.2s ease-in-out;
    @media(max-width:768px){
        display:none;
    }
`;


export const StyledEllipsis = Styled(Ellipsis)`
    margin-left:8px;
    transform: scale(0.8);
`