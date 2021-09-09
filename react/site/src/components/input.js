import styled from "styled-components";

const Input = styled.div`
    display: flex;
    flex-direction: row;

    
  label {
    font-family: Roboto;
    font-size: 18px;
    color: #615858;
  }

  .text-input {
    width: 209px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;
    margin: 0px 5px;
  }

  .input1 {
    display: flex;
    flex-direction: column;
    padding: 37px 10px 38px 10px;
  }

  .input2 {
    display: flex;
    flex-direction: column;
    padding: 37px 10px 38px 10px;

  }

  .box1 {
    margin: 5px 55px;
  }

  .box {
    margin: 5px 30px;
  }
  }
`;

export { Input };
