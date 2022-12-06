import Styled from 'styled-components';


export const Checkbox = Styled.div`
    background:${props=>props.theme.background.checkbox};
    border-radius:0.5rem;
    outline:none;
    display:flex;
    align-items:center;
    margin: 6px 0;
    &:first-of-type{
        margin-top:16px;
    }
`;

export const Label = Styled.label`
    color:${props=>props.theme.fonts.colors.primary};

`;

export const Strikethrough = Styled.s`
    color:${props=>props.theme.fonts.colors.gray};
    font-weight:700;
`

export const Input = Styled.input`
  margin:16px;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid purple;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  outline:none;
  &&:checked{
    accent-color: ${props=>props.theme.background.purple};
  }
  &&:not(:checked):before {
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  border: 1px solid #828FA3;
  border-radius: 3px;
  background-color: #2B2C37;
  padding: 1px;
};
  background:yellow;
`;