import styled from "styled-components";

const CounterBody = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(252, 207, 20);
  border-radius: 4px;
`;

const CountButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 5px;
  width: 50px;
  height: 40px;
  line-height: 21px;
  font-size: 21px;
  cursor: pointer;
`;
const CountValue = styled.span`
  /* background-color: rgb(31 32 36); */
  background-color: #FFF5EE;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin: 1px 0;
`;
export { CounterBody, CountButton, CountValue };
