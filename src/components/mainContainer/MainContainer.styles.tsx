import Styled from 'styled-components';


type props = {
    size?: string,
}

export const Container = Styled.div<props>`
    background:${props=>props.theme.background.primary};
    font-family:${props=>props.theme.fonts.name};
    width:100%;
    min-height:${props=>props.size === 'full' ? '100vh' : 'calc(100vh - 67.1px)'};
    display:flex;
    align-items:stretch;
    margin: 0 auto;
    @media(min-width:576px){
        justify-content:center;
        min-height:${props=>props.size === 'full' ? '100vh' : 'calc(100vh - 71px)'};
    }

`

export const Section = Styled.section`
    padding:20px 16px;
`