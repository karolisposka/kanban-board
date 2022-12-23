import Styled from 'styled-components';
import { ReactComponent as Cross } from '../../assets/icon-cross.svg';

type inputProps = {
  error?: string;
};

export const Container = Styled.div`
    display:flex;
    flex-direction:column;
    font-family:${(props) => props.theme.fonts.name};
    width:100%;
    margin: 0.5rem 0 ;
`;

export const Label = Styled.label`
    font-size:12px;
    font-weight:600;
    color:${(props) => props.theme.fonts.colors.primary};
    margin:6px 0;
    text-transform: capitalize;
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
    transition: 0.2s ease-in-out;
    border:${(props) => (props.error ? '1px solid #EA5555' : '1px solid #3e3F4E')};
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
    color:${(props) => props.theme.fonts.colors.label};
    text-transform: capitalize;
   ::placeholder{
        color:#3e3F4E;
   }
   :-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    &&[data-autocompleted] {
        background-color: transparent !important;
    }
`;

export const Span = Styled.span`
    color:#EA5555;
    text-align:right;
    font-size:12px;
    letter-spacing:0.25px;
    font-weight:500;
    margin:0 1rem;
    min-width:40%;
    max-width:100%;
`;

export const Icon = Styled(Cross)`
    display:inline-block;
    margin-left: 1rem;
    cursor:pointer;
    &:hover{ 
        color:#EA5555;
    }

`;
