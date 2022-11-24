import Styled from 'styled-components';
import {ReactComponent as Icon} from '../../assets/icon-show-sidebar.svg';

type props = {
  show: string,
}

export const IconContainer = Styled.div<props>`
  position:absolute;
  z-index:2;
  display:none;
  align-items:center;
  justify-content:center;
  width:2.5rem;
  padding:0.75rem 0;
  bottom:2rem;
  left:0;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  background:${props=>props.theme.background.purple};
  transition: 0.2s ease-in-out;
  cursor:pointer;
  &:hover{
    background:${props=>props.theme.hover.purpleHover};
  }
  @media(min-width:576px){
    display:${props=>props.show === 'true' ? 'none' : 'flex'};
  }
`

export const ShowIcon =  Styled(Icon)`
  

`