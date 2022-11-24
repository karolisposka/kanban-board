import Styled from 'styled-components';


export const Container = Styled.div`
    position: absolute;
    z-index:3;
    top: 0;
    left: 0;
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.3);
`;

export const Section = Styled.section`
    width:90%;
    max-width:480px;
    background:${props=>props.theme.background.secondary};
    border-radius:0.5rem;
`

      
