import Styled from 'styled-components';
import Button from '../button/Button';
import Form from '../form/Form';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';

export const StyledForm = Styled(Form)`
    

`;

export const Header = Styled(Heading)`
    color: ${(props) => props.theme.fonts.colors.danger};
    

`;

export const Para = Styled(Paragraph)`
    

`;

export const ConfirmBtn = Styled(Button)`
    background: ${(props) => props.theme.background.red};
    color: ${(props) => props.theme.fonts.colors.light};
    display:inline;
    width:calc(50% - 12px);
    margin-right:12px;
    padding:0.5rem 0;
    
`;

export const CancelBtn = Styled(Button)`
    background: ${(props) => props.theme.background.light};
    color: ${(props) => props.theme.fonts.colors.purple};
    display:inline;
    width:calc(50% - 12px);
    margin-left:12px;
    padding:0.5rem 0;

`;
