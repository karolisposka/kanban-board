import Styled from 'styled-components';
import Button from '../button/Button';

export const Container = Styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family:${props=>props.theme.fonts.name};
`

export const ContentSection = Styled.section`

`

export const Text = Styled.span`
    text-align:center;
    font-weight:700;
    font-size:18px;
    line-height:23px;
    color:${props=>props.theme.fonts.colors.secondary};

`

export const AddColumnBtn = Styled(Button)`
    background:${props=>props.theme.background.purple};
    font-size:15px;
    font-weight:700;
    line-height:19px;
    padding:1rem 1rem;
    margin:1rem 0;
`;