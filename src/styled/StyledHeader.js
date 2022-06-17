import styled from 'styled-components';
import { keyframes } from 'styled-components';

const starAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5) translateY(-0.75em);
  }
  20% {
    opacity: 1;
  }
  100% {
    tranform: scale(1);
  }
`;

const warsAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5) translateY(0.5em);
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;

  .star-img {
    margin-top: 30px;
    animation: ${ starAnimation } 5s linear;
    z-index: -2;
  }

  .wars-img {
    animation: ${ warsAnimation } 5s linear;
    margin-bottom: 50px;
    z-index: -2;
  }
`;