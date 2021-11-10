import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.active ? "all" : "none")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: 0.4s;
  padding-top: 405px;
  z-index: 99;
`;

const ModalBody = styled.div`
  /* background-color: rgb(31, 32, 36); */
  /* margin-top: 250px; */
  background-color: #FFF5EE;
  color: #808080;
  border-radius: 0px;
  /* width: 86vw; */
  /* height: calc(90vh - 405px); */
  /* transform: translateX(112px); */
  /* @media (max-height: 1000px) {
    height: 90vh;
  } */
`;

export { ModalBackground, ModalBody };
