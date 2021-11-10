import styled from "styled-components";

const ButtonBody = styled.button`
  padding: 0 15px;
  /* color: rgb(252, 207, 20);*/
  color: #000000;
  font-size: large;
  font-weight: bold;
  height: 45px;
  border-radius: 2px;
  /* background-color: rgb(31, 32, 36); */
  /* border: 2px solid rgb(60, 61, 66);*/
  border: none;
  background-color: rgb(252, 207, 20);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: rgb(31, 32, 36);
    background-color: rgb(255, 219, 77);
    /* border-color: rgb(252, 207, 20); */
  }
  svg{
    margin: 0px 8px 0px 0px;
    width: 14.4px;
    height: 12px;
  }
`;
export { ButtonBody };
