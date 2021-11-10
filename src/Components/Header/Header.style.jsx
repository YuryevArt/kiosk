import styled from "styled-components";
const HeaderBlock = styled.div`
box-shadow: 1px 0 2px 0 #808080e6;
  display: flex;
  flex-direction: column;
  
  height: 100%;
  overflow-y: auto;
  width: 280px;
  background-color: #FFF5EE;
  ::-webkit-scrollbar {
  /* background-color: #dbdbdb; */
  width: 5px;
}
`;

const CategoryList = styled.div`
  padding: 10px 20px;
  /* padding-left: 20px;
  padding-right: 20px; */
  color: #808080;
  text-align: center;
  /* height: 100%; */
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const CategoryListItem = styled.div`
  margin-bottom: 27px;
  font-size: 20px;
  padding: 8px 0;
  color: ${(props) => (props.active ? "#000000" : "#808080")};
  cursor: pointer;
`;

const Logo = styled.img`
  margin-bottom: 10px;
  padding: 20px;
`;


export {
  HeaderBlock,
  CategoryList,
  CategoryListItem,
  Logo,
};
