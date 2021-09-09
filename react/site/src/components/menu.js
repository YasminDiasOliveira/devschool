import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  position: sticky;
  top: 0px;

  .logo {
    background-color: #2b3031;
    padding: 2em 3.5em;
    font-size: 28px;
    font-family: Roboto;
    color: white;
    align-items: center;
    display: flex;
    font-weight: bold;
  }

  .logo img {
    width: 21.33px;
    height: 26.67px;
    margin: 0px 10px 0px 0px;
  }

  .categorias {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.8em;
    background-color: #2b3031;
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
  }

  .categorias img {
    width: 12px;
  }

  .categorias2 {
    flex-direction: row;
    align-items: center;
    display: flex;
    background-color: #ffffff;
    font-size: 18px;
    font-family: Roboto;
    color: #1a1a1a;
  }

  .menu2 {
    background-color: #262626;
    padding: 25.55em 0em;
  }
`;

export { Menu };
