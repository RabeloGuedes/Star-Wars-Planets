import styled from 'styled-components';
import { keyframes } from 'styled-components';

const starAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(2.5) translateY(-0.75em);
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
    transform: scale(2.5) translateY(0.5em);
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

const turnLetters = keyframes`
  0% {
    transform: rotateY(90deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
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

  .planets-title {
    color: white;
    font-size: 100px;
    letter-spacing: 30px;
    text-align: center;
  }

  .letter {
    display: inline-block;
    animation: ${ turnLetters } 10s linear
  }
`;