import Styled from 'styled-components';


type props = {
    size?: string;
    flex?: string,
}

export const Heading = Styled.p<props>`
    color:${props=>props.theme.fonts.colors.primary};
    font-size: ${props => props.size === 'large' ? '24px' : '18px'};
    line-height: ${props => props.size === 'large' ? '30px' : '23px'};
    display:${props=>props.flex ==='flex' ? 'flex' : 'block'};
    align-items:${props=>props.flex ==='flex' ? 'center' :'none'};
    font-family:${props=>props.theme.fonts.name};
    font-weight:700;
    margin:0;
`