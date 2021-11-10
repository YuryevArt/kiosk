import styled from "styled-components";

const AddonsName = styled.div`
  font-weight: bold;
  font-size: large;
`;

const AddonsList = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: flex-start;
`;

const AddonItem = styled.div`
  /* height: 30px; */
  margin-bottom: 10px;
  padding: 0px 15px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: calc(33% - 10px);
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: ${(props) => (props.active ? "rgb(255, 236, 162)" : "white")};
  /* color: ${(props) => (props.active ? "black" : "white")}; */
  color: #808080;
  box-shadow: 0 0 1px 1px gray;
`;

const CountBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 150px;
  height: 30px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-bottom: 5px;
  padding-top: 2px;
  /* margin-left: 15px;
  padding-left: 7px;
  border-left: 2px solid rgb(31, 32, 36); */
  button {
    background-color: #82828247;
    border-radius: 2px;
    width: 41px;
    box-shadow: 0 0 1px 1px #8080807a;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: large;
    padding: 2px 0;
  }
  button:focus,
  button:hover {
    outline: none;
  }
`;

const AddonImage = styled.img`
  /* max-width: 80px; */
  /* max-height: 80px;; */
  height: 70px;
`;


export { AddonsName, AddonsList, AddonItem, CountBlock, AddonImage };
