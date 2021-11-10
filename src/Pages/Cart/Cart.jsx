import React, { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { PlaceContext } from "../../Contexts/PlaceContext";
import { useIdleTimer } from 'react-idle-timer'
import { CartItemCounter, TechMenu, ProductForm, Modal } from "../../Components";
import axios from "axios";
import {
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
  RecommendationList,
  RecommendationBody,
  RecommendationItem,
  RecommendationName
} from "./Cart.style";

import { ProductImageArea, ProductImage } from "../../Components/GridCard/GridCard.style";
import { Link, useHistory } from "react-router-dom";

import { getSummaryCart } from '../../Components/GridCard/GridCard';
import { TechButton } from '../../Components/CatalogContent/CatalogContent.style'
import pinpadLogo from "../../Assets/img/pinpad.png";
import errorLogo from "../../Assets/img/errorPaying.png";
import successLogo from "../../Assets/img/successPaying.png";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  console.log("cart", cart);
  const history = useHistory();
  if (cart.length === 0) {
    history.goBack();
  }
  const [activeModal, setActiveModal] = useState({
    active: false,
    product: null,
  });

  const [activePlace, setActivePlace] = useContext(PlaceContext);
  const [activeTechMenu, setActiveTechMenu] = useState({
    active: false,
  });
  const [payingProcess, setPayingProcess] = useState({
    banner: false,
  });
  const [recommendation, setRecommendation] = useState([]);
  React.useEffect(() => {
    axios.post(`${process.env.REACT_APP_SERVER_API}/recommendations`, cart).then(r => {
      setRecommendation(r.data);
    }).catch(e => {
      console.log(e);
    });
  }, []);


  const handleOnIdle = event => {
    setCart([])
    setActivePlace({ active: true, place: null })
    history.push("/waiting")
  }
  const emptyFunction = () => { };

  useIdleTimer({
    timeout: 1000 * 60,
    onIdle: handleOnIdle,
    onActive: emptyFunction,
    onAction: emptyFunction,
    debounce: 500
  })

  const deleteCartItem = (index) => {
    setCart((prevstate) => {
      prevstate.splice(index, 1);
      return [...prevstate];
    });
  };
  const makeOrder = () => {
    setPayingProcess((prevstate) => {
      return {
        banner: true,
      };
    });
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/add-order`, { cart: cart, place: activePlace.place })
      .then((r) => {
        console.log(r.data);
        const res = r.data;
        if (res.kkt === 0 && res.pos === 0) {
          setPayingProcess({ banner: true, success: "" + (res.id % 50 + 51) });
          setTimeout(() => {
            setCart([])
            setActivePlace({ active: true, place: null })
            history.push("/waiting")
          }, 20000);
        } else {
          if (res.pos === 2000 || res.pos === 992) {
            setPayingProcess({ banner: false });
          } else {
            if (res.kkt === 44) {
              setPayingProcess({ banner: true, papper: true });
              // setPayingProcess({ banner: true, success: "" + (res.id % 50 + 51) });
              // setTimeout(() => {
              //   setCart([])
              //   setActivePlace({ active: true, place: null })
              //   history.push("/waiting")
              // }, 20000);
            } else {
              setPayingProcess({ banner: true, error: true });
              // setTimeout(() => {
              //   setPayingProcess({ banner: false });
              // }, 5000);
            }
          }
        }
      })
      .catch((e) => {
        setPayingProcess({ banner: true, error: true });
      });
  };
  const payHandler = () => {
    axios.get(`${process.env.REACT_APP_SERVER_API}/check-service-uts`).then(
      (r) => {
        makeOrder();
      }).catch((e) => {
        history.push("/error");
      })
  }
  return (
    <PageBackground>
      <TechButton style={{ zIndex: "1" }} onClick={() => { setActiveTechMenu({ active: true }) }}>Н</TechButton>
      <CartList>
        {cart.map((line, index) => (
          <CartItem key={`${line.id}_${index}_${line.code}`}>
            <LineImage src={`https://danar.ru/kiosk/${line.code}.jpg`} alt={`https://danar.ru/kiosk/${line.code}.jpg`} />
            <div style={{ width: "100%" }}>
              <CartItemName>
                {line.name}
                {line.variantName && line.variantName !== line.name
                  ? ` (${line.variantName}; ${line.comment})`
                  : line.comment}
              </CartItemName>
              {line.options.length > 0 && (
                <CartItemOptions>
                  {line.options.map((optLine, index) => (
                    <div key={`${optLine.id}_${index}`}>
                      <span style={{ paddingLeft: "30px" }}>
                        {optLine.name} x {optLine.quantity} шт.
                      </span>
                    </div>
                  ))}
                </CartItemOptions>
              )}
            </div>
            <CartItemCounter
              count={line.quantity}
              index={index}
              setCart={setCart}
            />
            {line.summaryPrice * line.quantity} р
            <CartItemRemove onClick={() => deleteCartItem(index)}>
              ×
            </CartItemRemove>
          </CartItem>
        ))}
      </CartList>
      {recommendation.length > 0 && (<RecommendationList>
        <span>Добавь к заказу:</span>
        {recommendation.map(item => (
          <RecommendationItem key={item.id}>
            <RecommendationBody onClick={() => setActiveModal({ product: item, active: true })}>
              <ProductImageArea>
                <ProductImage src={`https://danar.ru/kiosk/${item.code}.jpg`} alt={`https://danar.ru/kiosk/${item.code}.jpg`} />
              </ProductImageArea>
              <RecommendationName>{item.name}</RecommendationName>  </RecommendationBody>
          </RecommendationItem>
        ))}
      </RecommendationList>)}

      <OrderSummary>Сумма заказа: <span>{getSummaryCart(cart)} р</span></OrderSummary>
      <FooterButton>
        <Link style={{ textDecoration: "none", appearance: "none" }} to={"/"}>
          <CartButton>
            Назад
          </CartButton>
        </Link>
        <CartButton onClick={payHandler}>Оплатить</CartButton>
      </FooterButton>
      <PayingBanner active={payingProcess.banner}>
        {payingProcess.error || payingProcess.papper ? (
          <PayingContent>
            <img src={errorLogo} alt={errorLogo} />
            {payingProcess.error ? (<h3>Во время оплаты произошла ошибка,
              <br />обратитесь к администратору
            </h3>) : (<h3>Закончилась бумага, обратитесь к администратору
              <br /> Если вам нужен чек, его вам могут распечатать на кассе
            </h3>)}

          </PayingContent>
        ) : payingProcess.success ? (
          <PayingContent>
            <img src={successLogo} alt={successLogo} />
            <h3>
              Заказ <span>{payingProcess.success}</span> успешно создан!
              {/* <br/> Чек вы можете получить на кассе! */}
            </h3>
            <CartButton
              onClick={() => {
                setCart([])
                setActivePlace({ active: true, place: null })
                history.push("/waiting")
              }}
            >
              ОК
            </CartButton>
          </PayingContent>
        ) : (
          <PayingContent>
            <img src={pinpadLogo} alt={pinpadLogo} />
            <h3>Для оплаты заказа следуйте инструкциям на пин-паде</h3>
          </PayingContent>
        )}
      </PayingBanner>
      <TechMenu active={activeTechMenu} setActive={setActiveTechMenu} />
      <Modal active={activeModal.active} setActive={setActiveModal}>
        {activeModal.product != null &&
          <ProductForm setCart={setCart} closeModal={() => {
            setActiveModal(prevstate => {
              return {
                ...prevstate,
                active: false,
              }
            }
            )
          }
          } product={activeModal.product} />}
      </Modal>
    </PageBackground>
  );
}

export default Cart;
