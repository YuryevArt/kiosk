import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CardBlock,
  CardBody,
  ProductImage,
  ProductInfo,
  ProductWeight,
  SlideContainer,
  ProductImageArea,
  GridLayout,
  FooterGrid,
  CartSummary,
  CartButton,
} from "./GridCard.style";
import { CartContext } from "../../Contexts/CartContext";
import CartIcon from '../../Assets/img/cartSVG';

const getCountProducts = (cart) => {
  return cart.reduce((sum, item) => { return sum + item.quantity }, 0)
};

export const getSummaryCart = (cart) => {
  return cart.reduce((sum, item) => { return sum + item.summaryPrice * item.quantity }, 0)
}

function GridCard({ products, showModal }) {
  const cart = useContext(CartContext)[0];
  return (
    <GridLayout>
      <SlideContainer>
        {products.map((item, index) => (
          <CardBlock key={`${item.id}_${index}`}>
            <CardBody onClick={() => showModal({ product: item, active: true })}>
              <ProductImageArea>
                <ProductImage src={`https://danar.ru/kiosk/${item.code}.jpg`} alt={`https://danar.ru/kiosk/${item.code}.jpg`} />
              </ProductImageArea>
              <ProductInfo>
                <div>{item.name}</div>
                <ProductWeight>{item.price}Р</ProductWeight>
              </ProductInfo>
            </CardBody>
          </CardBlock>
        ))}
      </SlideContainer>
      <FooterGrid>
        <CartSummary>
          Сумма заказа:
          <span>
            {getSummaryCart(cart)} р
          </span>
        </CartSummary>

        <Link style={{ textDecoration: "none", appearance: "none" }} to={"/cart"}>
          {cart.length > 0 && (<CartButton>
            Корзина
            <CartIcon width={"25px"} height={"25px"} />
            <span>{getCountProducts(cart)}</span>
          </CartButton>
          )}
        </Link>
      </FooterGrid>
    </GridLayout>
  );
}

export default GridCard;
