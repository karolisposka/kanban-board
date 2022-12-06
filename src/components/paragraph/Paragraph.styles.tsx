import Styled from 'styled-components';

type props = {
  size?: string
}


export const Paragrapth = Styled.p<props>`
  color:${props=>props.theme.fonts.colors.secondary};
  line-height: ${props=>props.size === 'medium' ? '15px' : '23px'};
  font-weight:${props=>props.size === 'medium' ? '700' : '500'};
  font-size:${props=>props.size ==='medium' ? '13px' : '12px'};
`