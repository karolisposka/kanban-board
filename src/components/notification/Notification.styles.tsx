import Styled, { keyframes, css } from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

type item = {
  type: string;
};

type notification = {
  exit: boolean;
};

const rendered = keyframes`
  0%{
    margin-left:110%;
  }  
  100%{
    margin-left: 0;
  }
`;

const closed = keyframes`
  0%{
    margin-left:0;
    
  }  
  100%{
    margin-left: 120%;
  }
`;

const animationEnter = css`
  animation: 0.3s ${rendered} forwards;
`;

const animationClose = css`
  animation: 0.3s ${closed} forwards;
`;

export const NotificationItem = Styled.div<notification>`
  font-family:'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  background:white;
  border-radius:0.25rem;
  margin: 5px 0;
  padding:5px;
  overflow:hidden;
  cursor: pointer;
  width:300px;
  ${(props) => (props.exit ? animationClose : animationEnter)};
`;

export const ItemMessage = Styled.p`
  margin:0;
  padding:30px 0 10px 0;

`;

export const Button = Styled.button`
  background:transparent;
  float: right;
  border:none;
`;

export const Icon = Styled(AiFillCloseCircle)`


`;

export const ProgressBar = Styled.div<item>`
  height:5px;
  background:${(props) => (props.type === 'err' ? 'crimson' : 'green')};
`;
