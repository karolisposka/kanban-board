import Styled from 'styled-components';

export const Container = Styled.div`
    display:flex;
    flex-direction:column;
    font-family:${(props) => props.theme.fonts.name};
    margin:0.5rem 0;
`;

export const Label = Styled.label`
    font-size:12px;
    font-weight:600;
    color:${(props) => props.theme.fonts.colors.primary};
    margin:6px 0;
    text-transform: capitalize;
`;

type props = {
  error: string | undefined;
};
export const Textarea = Styled.textarea<props>`
    width:100%;
    color:${(props) => props.theme.fonts.colors.primary};
    box-sizing:border-box;
    resize:none;
    height:80px;
    background:transparent;
    border-radius:0.15rem;
    font-size:12px;
    outline:none;
    padding:0.25rem;
    transition: 0.2s ease-in-out;
    border:${(props) => (props.error ? '1px solid #EA5555' : '1px solid #3e3F4E')};
    margin-top:0.25rem;
    ::placeholder{
        color:#3e3F4E;
        padding:0.25rem;
   }
`;

export const Span = Styled.span`
    color:#EA5555;
    text-align:right;
    font-size:12px;
    letter-spacing:0.25px;
    font-weight:500;
    margin:0.25rem 1rem;
    min-width:40%;
    max-width:100%;
    font-family:${(props) => props.theme.fonts.name};
`;
