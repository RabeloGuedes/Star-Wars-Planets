import styled from 'styled-components';

export const StyledTable = styled.table` 
  --gray: #555555;
  border-radius: 25px;
  border: 1px solid var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  margin: 20px auto 0;
  flex-direction: column;  tr {
    border: 1px solid var(--gray);
    display: flex;
    justify-content: space-evenly;
    width: 95vw;
    border-collapse: collapse;
  }
  tr > th > h2 {
    padding: 0 2px;
  }
  thead > tr:nth-of-type(1) {
    border-radius: 25px 25px 0 0;
  }
  tr > th:nth-of-type(1) {
    border-radius: 25px 0 0 0;
  }
  tr > th:nth-of-type(13) {
    border-radius: 0 25px 0 0;
  }

  tr:nth-of-type(10) {
    border-radius: 0 0 25px 25px;
  }

  tr:nth-of-type(10) > td:nth-of-type(1) {
    border-radius: 0 0 0 25px;
  }

  tr:nth-of-type(10) > td:nth-of-type(13) {
    border-radius: 0 0 25px 0;
  }

  tr > td, tr > th {
    display: flex;
    justify-content: center;
    algin-item: center;
    flex-direction: column;
    width: calc(100% / 13);
    overflow-wrap: break-word;
    text-align: center;
    border: 1px solid var(--gray);
    padding: 0 15px;
  }
  color: white;
`;