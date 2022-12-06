import Styled from 'styled-components';
import Button from '../button/Button';


export const Form = Styled.form`
    padding:2rem;
    font-family:${props=>props.theme.fonts.name};

`

export const BoardColumns = Styled.div`
    margin: 1rem 0;

`;

export const Title = Styled.h3`
    color:${props=>props.theme.fonts.colors.label};
    font-weight:500;
    padding-bottom:1rem;
    margin:0;
`

export const Label = Styled.label`
    color:${props=>props.theme.fonts.colors.label};
    text-transform:capitalize;
    font-size:12px;
    margin:0.5rem 0;
`;

export const NewColumnBtn = Styled(Button)`
    background:${props=>props.theme.background.light};
    color:${props=>props.theme.background.purple};
    font-weight:700;
    font-size:12px;
    text-transform: capitalize;
    padding:0.75rem;
    width:100%;
`

export const SubmitBtn = Styled(Button)`
    background:${props=>props.theme.background.purple};
    font-weight:700;
    font-size:12px;
    text-transform: capitalize;
    padding:0.75rem;
    width:100%;
`