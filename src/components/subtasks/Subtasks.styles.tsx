import Styled from 'styled-components';
import Heading from '../heading/Heading';
import Loader from '../loader/Loader';

export const SubtasksWrapper = Styled.div`
    display:flex;
    flex-direction:column;
`;

export const StyledHeading = Styled(Heading)`
    

`;

export const Loading = Styled(Loader)`
    align-self: center;
`;