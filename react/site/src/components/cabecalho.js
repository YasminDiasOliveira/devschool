import styled from "styled-components";

const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  background-color: #ffffff;
  width: 1005px;

  .usuario {
    display: flex;
    align-items: center;
    font-family: Roboto;
    color: #615858;
  }

  .usuario img {
    border-radius: 50%;
    width: 57px;
    height: 57px;
    margin: 0px 15px 0px 0px;
  }

  .botoes {
    display: flex;
    align-items: center;
  }

  .botoes img {
    width: 44px;
    height: 44px;
  }
`;

export { Cabecalho };
