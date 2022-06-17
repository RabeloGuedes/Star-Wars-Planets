import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  margin: 10px auto 0;
  padding: 70px 0;
  background-color: #332;
  color: #aaa;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  div h2 {
    margin-top: 10px;
  }
`;
