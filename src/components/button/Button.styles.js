import Styled from 'styled-components';

export const Button = Styled.button`
    color: ${props=>props.theme.fonts.colors.primary};
    opacity: ${props=>props.disabled ? 0.7 : 1};
    cursor:pointer;
    border:none;
    padding:0.25rem 1rem;
    border-radius:5rem;
`