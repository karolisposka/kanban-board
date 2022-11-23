import Styled from 'styled-components';

export const Container = Styled.div`
    background:${props=>props.theme.background.primary};
    width:100%;
    min-height:calc(100vh - 67.1px);
    display:flex;
    align-items:stretch;
    margin: 0 auto;
    @media(min-width:576px){
        justify-content:center;
        min-height:(100vh - 71px);
    }

`

export const Section = Styled.section`
    padding:20px 16px;
`