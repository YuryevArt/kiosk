import styled from "styled-components";

const productImageHeight = "150px";

const GridLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #808080;
  /* justify-content: center; */
  align-content: flex-start;
  justify-items: flex-start;
  width: 100%;
  height: calc(100% - 100px);
  overflow-y: auto;
  padding: 0 15px 15px 15px;
`;

const CardBlock = styled.div`
  width: 33.33333%;
  padding: 15px;
  /* flex: 0 0 30%; */
  /* height: 297px; */
  :hover{
    color: black;
  }
`;

const CardBody = styled.div`
  /* background-color: #c7c7c7; */
  box-shadow: 1px 1px 5px 2px #8080806f;
  /* border-radius: 0px; */
  height: 100%;
  width: 100%;
  position: relative;
  
  /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
`;
const ProductImageArea = styled.div`
  height: ${productImageHeight};
  padding: 10px 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProductInfo = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
  /* height: calc(100% - ${productImageHeight}); */
`;

const ProductWeight = styled.div`
  /* color: gray; */
  position: absolute;
  bottom: 15px;
  
`;

const FooterGrid = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  box-shadow: 0 -1px 2px 0 #808080e6;
  justify-content: space-around;
  align-items: center;
`;

const CartSummary = styled.div`
  color: #808080;
  font-size: 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  span{
    color: rgb(252, 207, 20);
    text-shadow: 1px 1px 2px #333333;
    /* font-size: 40px; */
  }
`;

const CartButton = styled.div`
  background-color: rgb(252, 207, 20);
  line-height: 100%;
  text-align: center;
  cursor: pointer;
  color: black;
  font-size: 22px;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  padding: 20px 30px 20px 45px;
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    background-color: black;
    color: white;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    position: relative;
    top: -10px;
    left:-14px;
  }
`;

export {
  SlideContainer,
  CardBlock,
  CardBody,
  ProductImageArea,
  ProductImage,
  ProductInfo,
  ProductWeight,
  GridLayout,
  FooterGrid,
  CartSummary,
  CartButton,
};
