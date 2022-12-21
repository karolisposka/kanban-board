import Styled from 'styled-components';

type props= {
    primary?: boolean,
    disabled?: boolean
}

export const Button = Styled.button<props>`
    color: ${props=>props.theme.fonts.colors.primary};
    background:${props=>props.primary  ? '#635FC7' : 'none'};
    opacity: ${props=>props.disabled ? 0.7 : 1};
    color: #ffffff;
    cursor:pointer;
    border:none;
    padding:0.25rem 1rem;
    border-radius:5rem;
`