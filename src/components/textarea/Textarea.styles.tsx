import Styled from 'styled-components';


export const Container = Styled.div`
    display:flex;
    flex-direction:column;
    font-family:${props=>props.theme.fonts.name};
    margin:0.5rem 0;
`;

export const Label = Styled.label`
    color:${props=>props.theme.fonts.colors.label};
    text-transform:capitalize;
    font-size:12px;
`;

export const Textarea = Styled.textarea`
    width:100%;
    color:${props=>props.theme.fonts.colors.primary};
    box-sizing:border-box;
    resize:none;
    height:80px;
    background:transparent;
    border-radius:0.15rem;
    font-size:12px;
    outline:none;
    padding:0.25rem;
    border:1px solid #3e3F4E;
    margin-top:0.25rem;
    ::placeholder{
        color:#3e3F4E;
        padding:0.25rem;
   }
`;