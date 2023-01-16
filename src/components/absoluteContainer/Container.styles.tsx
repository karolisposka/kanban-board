import Styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Container = Styled.div`
    position: absolute;
    z-index:3;
    top: 0;
    left: 0;
    height:100%;
    width:100%;
    display:flex;
    overflow:auto;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.3);
`;

export const Section = Styled.section`
    width:90%;
    max-width:480px;
    background:${(props) => props.theme.background.taskBg};
    border-radius:0.5rem;
`;

export const CloseBtn = Styled(AiOutlineCloseCircle)`
    font-size:36px;
    color:#ffffff;
    position:absolute;
    cursor:pointer;
    top:1rem;
    right:1rem;
    z-index:99;
`;
