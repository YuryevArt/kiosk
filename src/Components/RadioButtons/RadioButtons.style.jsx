import styled from "styled-components";

const RadioButtonTitle = styled.div`
    font-size: large;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 25px;

`;

const RadioButtonsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const RadioButtonsItem = styled.span`
  color: ${(props) => (props.active ? "rgb(0, 0, 0)" : "white")};
  margin-right: 15px;
  margin-bottom: 15px;
  background-color: ${(props) =>
    props.active ? "rgb(255, 236, 162)" : "white"};
  box-shadow: 0 0 1px 1px gray;
  color: #808080;
  padding: 0px 15px;
  width: calc(25% - 15px);
  border-radius: 2px;
  cursor: pointer;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  /* -webkit-box-align: center; */
  align-items: center;
  /* -webkit-box-pack: center; */
  justify-content: center;
  user-select: none;
`;

const OptionImage = styled.img`
  max-height: 80px;
  max-width: 90px;
`;

export { RadioButtonTitle, RadioButtonsGroup, RadioButtonsItem, OptionImage };
