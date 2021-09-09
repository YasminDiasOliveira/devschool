import styled from "styled-components";

const Tabela = styled.table`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 29px 0px;

  tbody {
    font-family: Roboto;
    font-size: 18px;
    color: #6d6868;
  }

  table {
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  th {
    border: none;
    color: #ffffff;
    height: 67px;
    width: 119px;
    text-align: center;
  }
`;

export { Tabela };
