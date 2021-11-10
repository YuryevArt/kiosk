import styled from 'styled-components'

const ContainersGrid = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 405px);
`;

const TechButton = styled.button`
  /* box-shadow: 0 0 1px 1px #808080e6; */
  background-color: white;
  opacity: 0.2;
  border: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  color: black;
  z-index: 99;
  &:focus{
    outline: none;
  }
`;

export { ContainersGrid, TechButton };