import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  padding: 7px;
  width: 100%;
  text-align: center;
  font-size: 17px;
  margin: 0 auto;
`;

export const StyledFormChild = styled.div`
--gray: #555555;
  color: white;
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: space-evenly;
  border: 4px solid var(--gray);
  padding: 20px;
  position: relative;
  border-radius: 25px;
  width: 30%;
  font-size: 20px;
  h3 {
    position: absolute;
    top: -10px;
    left: 20px;
    background-color: #101010;
    padding: 0 5px;
  }
  
  select:active, button:hover, input:focus {
    opacity: 0.8;
    transition: opacity .5s;
  }
  select, button, input {
    text-align: center;
    font-size: 20px;
    background-color: #101010;
    cursor: pointer;
    margin: 5px 0;
    border-radius: 5px;
    border: 2px solid var(--gray);
    color: white;
    padding: 5px;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: #FDEB00;
    color: black;
  }

  label {
    display: flex;
    justify-content: center;
  }

  label > input {
    margin-right: 5px;
  }

  .styled-form-child-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid var(--gray);
    border-radius: 5px;
    padding: 5px;
    margin: 3px 0;
  }

  .styled-form-child-div p {
    margin-left: 10px;
  }

  .styled-form-child-div button {
    margin-right: 10px;
    transition: background-color .2s;
  }

  .styled-form-child-div button:hover {
    background-color: red;
  }

  h1 {
    text-align: center;
  }
  .sort-label:hover {
    cursor: pointer;
  }
`;
