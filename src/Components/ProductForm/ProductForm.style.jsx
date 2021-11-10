import styled from "styled-components";

const ProductFormBody = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* height: 100%;
  width: 100%; */
  width: 86vw;
  height: calc(90vh - 405px);
`;

const ProductImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: wheat; */
  width: 100%;
  /* height: 100%; */
  padding: 15px;
  max-height: 400px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const ProductInfo = styled.div`
  overflow-y: auto;
  /* height: calc(100% - 40px); */
  border-top: solid 1px #808080;
  width: 100%;
  padding: 20px 40px;
  /* *::-webkit-scrollbar {
    width: "0.4em";
  }
  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  } */
`;

const ProductName = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const ProductWeight = styled.div`
  color: gray;
  font-size: small;
`;
const ProductDescription = styled.div`
  margin-top: 10px;
  margin-right: 50px;
`;
const ProductStructure = styled.div`
  margin-top: 20px;
  margin-right: 50px;
  span {
    font-weight: bolder;
  }
`;
const ProductNutritionalValue = styled.div`
  margin-bottom: 30px;
  margin-right: 50px;
  span {
    font-weight: bolder;
  }
`;
const ProductPrice = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: auto;
  padding: 20px 60px 30px;
  box-shadow: 0 -1px 2px 0 #808080e6;
  span {
    color: rgb(252, 207, 20);
    text-shadow: 1px 0 2px #131313;
    font-weight: bold;
    font-size: 26px;
  }
`;

const TabMenu = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  text-align: center;
  /* width: 100%; */
  background-color: #FFF5EE;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 10px;
`;
const TabMenuItem = styled.div`
  color: ${props => props.active ? "#808080" : "black"};
  background-color: ${props => props.active ? "transparent" : "transparent"};
  /* margin:4px; */
  /* border-top-left-radius: 3px;
  border-top-right-radius: 3px; */
  ${props => props.active ? "border: solid 1px #808080;" : ""}
  border-bottom: solid 1px transparent;
  position: relative;
  padding-bottom: 5px;
  :before{
    ${props => props.active ? "content: '';" : ""}
    width: 100%;
    height: 0;
    bottom: -3px;
    left:0;
    right: 0;
    position: absolute;
    border-bottom: solid 3px #FFF5EE;
  }
  /* box-shadow: inset 0 0 4px 1px #808080; */
`;
export {
  ProductFormBody,
  ProductImageBlock,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductWeight,
  ProductDescription,
  ProductStructure,
  ProductNutritionalValue,
  ProductPrice,
  TabMenu,
  TabMenuItem
};
