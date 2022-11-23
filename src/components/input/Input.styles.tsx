import Styled from 'styled-components';
import {ReactComponent as Cross} from '../../assets/icon-cross.svg';

type inputProps = {
    error?:string
} 

export const Container = Styled.div`
    display:flex;
    flex-direction:column;
    font-family:${props=>props.theme.fonts.name};
`;


export const Label = Styled.label`
    color:${props=>props.theme.fonts.colors.label};
    text-transform:capitalize;
    font-size:12px;
`;

export const InputWrapper = Styled.div`
    display:flex;
    align-items:center;
`;

export const InputContainer = Styled.div<inputProps>`
    display:flex;
    position:relative;
    flex-shrink: 0;
    flex-grow: 1;
    align-items:center;
    justify-content:space-between;
    border-radius:0.125rem;
    border:${props =>props.error ? '1px solid #EA5555' : '1px solid #3e3F4E'};
    margin: 0.5rem 0;
`;

export const Input = Styled.input`
    background:transparent;
    border:none;
    outline:none;
    padding:0.6rem 0;
    margin-left:1rem;
    font-weight:200;
    font-size:12px;
    width:100%;
    color:${props=>props.theme.fonts.colors.label};
    text-transform: capitalize;
   ::placeholder{
        color:#3e3F4E;
   }
`;

export const Span = Styled.span`
    color:#EA5555;
    font-size:12px;
    letter-spacing:0.25px;
    font-weight:200;
    margin:0 1rem;
`;

export const Icon = Styled(Cross)`
    display:inline-block;
    margin-left: 1rem;
    cursor:pointer;

`;

