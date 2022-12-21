import Styled from 'styled-components';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import Select from '../selectField/SelectField';

export const Title = Styled(Heading)`
    margin-bottom:1rem;
    margin: 1rem 0;

`;

export const Subtaks = Styled.ul`
    margin: 0;
    padding:1rem 0; 

`;

export const Label = Styled.label`
    font-size:12px;
    font-weight:600;
    color:${(props) => props.theme.fonts.colors.primary};
    margin:6px 0;
`;

export const AddBtn = Styled(Button)`
    background:${(props) => props.theme.background.light};
    color:${(props) => props.theme.background.purple};
    text-transform: capitalize;
    width:100%;
    padding:0.5rem 0;
    
    font-weight:600;

`;

export const SelectField = Styled(Select)`
    margin-top:6px;

`;

export const CreateBtn = Styled(Button)`
    background:${(props) => props.theme.background.purple};
    color:${(props) => props.theme.fonts.colors.light};
    text-transform: capitalize;
    width:100%;
    padding:0.5rem 0;
    font-weight:600;
    margin-top: 24px;

`;
