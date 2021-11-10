import styled from "styled-components";

const PageBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: rgb(13 13 13); */
  background-color: #cccccc;
  color: #808080;
  right: 0;
  bottom: 0;
  padding: 40px 20px 10px;
`;

const CartList = styled.div`
  width: 100%;
  height: 77%;
  padding: 20px 0;
  /* background-color: rgb(31 32 36); */
  background-color: #FFF5EE;
  border-radius: 2px;
`;

const CartItem = styled.div`
  /* border-bottom: 1px solid rgb(13, 13, 13); */
  margin: 15px;
    /* background-color: #4e4e4e; */
    box-shadow: 0 0 1px 1px #808080e6;
    
    border-radius: 2px;
  padding: 5px 20px;
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr 0.4fr 0.4fr;
  align-items: center;
  justify-items: center;
  /* justify-content: center; */
`;

const CartItemName = styled.div`
  width: 100%;
  text-align: center;
`;

const CartItemRemove = styled.div`
  font-size: 50px;
`;

const CartItemOptions = styled.div`
  width: 100%;
  border-top: 1px solid gray;
`;

const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: rgb(252, 207, 20);
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  padding: 20px 90px;
  width: 312px;
  min-width: 99px;
  /* margin: 5px auto 0; */
`;

const PayingBanner = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: rgb(13 13 13); */
  background-color: #cccccc;
  color: #808080;
  right: 0;
  bottom: 0;
  padding: 40px 20px 10px;
  overflow: hidden;
`;

const PayingContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 65%;
  margin: auto;
  align-items: center;
  /* background-color: rgb(31 32 36); */
  background-color: white;
  box-shadow: 0 0 2px 2px #808080e6;
  padding: 10px 50px;
  border-radius: 20px;
  font-size: 30px;
  img{
    max-width: 70%;
    max-height: 400px;
    margin: auto;
  }
  h3{
    text-align: center;
    margin-bottom: 100px;
  }
  span{
    color: rgb(252, 207, 20);
    font-size: 35px;
    text-shadow: 1px 0 1px #2c2c2c;
  }
`;

const LineImage = styled.img`
  max-height: 167px;
  max-width: 176px;
`;

const FooterButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 0 100px 50px;
`;

const OrderSummary = styled.div`
  margin-top: 20px;
  font-size: 28px;
  background-color: white;
  border-radius: 2px;
  padding: 10px;
  span {
    font-size: 30px;
    color: rgb(252, 207, 20);
    text-shadow: 1px 1px 2px #333333;
    font-size: 26px;
  }
`;

const RecommendationList = styled.div`
  margin-top: 20px;
  width: 100%;
  /* height: 80%; */
  padding: 20px 0;
  /* background-color: rgb(31 32 36); */
  background-color: #FFF5EE;
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  max-height: 314px;
  overflow-y: hidden;
  span {
    padding: 0 15px;
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

const RecommendationItem = styled.div`
  width: 16.66%;
  padding: 15px;
  /* flex: 0 0 30%; */
  /* height: 297px; */
  :hover{
    color: black;
  }
`;

const RecommendationBody = styled.div`
  /* background-color: #c7c7c7; */
  box-shadow: 1px 1px 5px 2px #8080806f;
  /* border-radius: 0px; */
  height: 100%;
  width: 100%;
  position: relative;
`;

const RecommendationName = styled.div`
  padding: 10px 15px;
`;

export {
  PageBackground,
  CartList,
  CartItem,
  CartItemName,
  CartItemRemove,
  CartItemOptions,
  CartButton,
  PayingBanner,
  PayingContent,
  LineImage,
  FooterButton,
  OrderSummary,
  RecommendationBody,
  RecommendationItem,
  RecommendationList,
  RecommendationName
};
