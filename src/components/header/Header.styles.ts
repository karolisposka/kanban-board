import Styled from 'styled-components';
import {ReactComponent as ChevronDown} from '../../assets/icon-chevron-down.svg';
import {ReactComponent as Ellipsis} from '../../assets/icon-vertical-ellipsis.svg';
import {ReactComponent as Icon} from '../../assets/logo-mobile.svg';
import {ReactComponent as IconDark} from '../../assets/logo-dark.svg';
import {ReactComponent as IconLight} from '../../assets/logo-light.svg';
import Button from '../button/Button';
import PopUp from '../popUp/PopUp';


type chevronTypes = {
    state: string,
}

export const Header = Styled.header`
    font-family:${props=>props.theme.fonts.name};
    background:${props=>props.theme.background.secondary};
    display:flex;
    align-items:center;
    position:relative;
`

export const DesktopLogo = Styled.div`
    display:none;
    border-right:1px solid ${props=>props.theme.border.primary};
    @media(min-width:576px){
        display:block;
        width:25%;
        max-width:255px;
    }
    @media(min-width:768px){
        width:24%;
    }
    @media(min-width:876px){
        width:33%;
    }
`;

export const DarkLogo = Styled(IconDark)`
    padding:20px 16px;
`

export const LightLogo = Styled(IconLight)`
    padding:20px 16px;
`

export  const Section = Styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex:2;
    padding:20px 16px;
`

export const LogoWrapper = Styled.div`
    display:flex;
    align-items:Center;
    flex:1;
`


export const Logo = Styled(Icon)`
    cursor: pointer;
    @media(min-width:576px){
        display:none;
    }
`

export const Title = Styled.span`
    font-size:18px;
    font-weight:700;
    margin-left:16px;
    text-transform: capitalize;
    color: ${props=>props.theme.fonts.colors.primary};
    @media(min-width:576px){
        margin-left:0;
    }
`

export const Chevron = Styled(ChevronDown)<chevronTypes>`
    margin:0 8px;
    cursor: pointer;
    transition:0.3s ease-in-out;
    transform: scale(1.5);
    transform: ${props=>props.state === 'true' ? `rotate(180deg) scale(1.5)` : `null`};
    @media(min-width:576px){
        display:none;
    }
`

export const ButtonsWrapper = Styled.div`
    display:flex;
    align-items:center;
`;

export const AddBtn = Styled(Button)`
    background:${props=>props.theme.background.purple};
    font-weight:700;
    line-height:1.2;
    transition:0.1s ease-in-out;
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
    padding: 0.4rem 1rem;
    transition:0.2s ease-in-out;
    @media(max-width:768px){
        display:none;
    }
`;


export const StyledEllipsis = Styled(Ellipsis)`
    margin-left:8px;
    transform: scale(0.8);
    cursor: pointer;
`

export const StyledPopUp = Styled(PopUp)`
    right: 1rem;
    top: 5rem;
    z-index:10;
    background:${props=>props.theme.background.primary};

`