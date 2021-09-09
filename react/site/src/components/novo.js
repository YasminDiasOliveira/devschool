import styled from "styled-components";

const Novo = styled.div`
  margin: 50px 0px 0px;
  width: 920px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

  img {
    width: 31px;
    height: 31px;
  }
  
  td {
    background-color: #f5f5f5;
    width: 119px;
    text-align: center;
  }
  
  button {
    border: none;
  }

  tbody {
    font-family: Roboto;
    font-size: 18px;
    color: #6d6868;
  }

  table {
    border: none;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-collapse: collapse;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 29px 43px;
  }

  th {
    border: none;
    color: #ffffff;
    height: 67px;
    width: 119px;
  }

  tr {
    background-color: #986cdf;
    font-family: Roboto;
    font-size: 18px;
    padding: 2em 2em;
    font-weight: bold;
    text-align: center;
  }

 .linha-alternada {
   background-color: #FFFFFF;
 }


 .coluna-acao > button {
   visibility: hidden;
 }

 tr:hover {
  .coluna-acao > button {
    visibility: visible;
  }
 }
`;

export { Novo };
