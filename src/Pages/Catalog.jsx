import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useIdleTimer } from 'react-idle-timer';
import { useHistory } from "react-router-dom";
import Carousel from 're-carousel'
import "../App.css";
import { CatalogContent } from "../Components";
import { CartContext } from "../Contexts/CartContext";
import { PlaceContext } from "../Contexts/PlaceContext";

const CatalogPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFF5EE;
  right: 0;
  bottom: 0;
`;

const CarouselBlock = styled.div`
  width: 100%;
  height: 405px;
`;
const emptyFunction = () => { };

function Catalog({ UTSdump, setData }) {
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/catalog`)
      .then((r) => {
        setData(r.data);
      });
  }, [])

  const setCart = useContext(CartContext)[1];
  const setActivePlace = useContext(PlaceContext)[1];
  const history = useHistory();

  const handleOnIdle = () => {
    setCart([])
    setActivePlace({ active: true, place: null })
    history.push("/waiting")
  }

  useIdleTimer({
    timeout: 1000 * 60,
    onIdle: handleOnIdle,
    onActive: emptyFunction,
    onAction: emptyFunction,
    debounce: 500
  })

  // const setCart = useContext(CartContext)[1];
  UTSdump.category.sort(function (a, b) {
    if (a.nomer > b.nomer) {
      return 1;
    }
    if (a.nomer < b.nomer) {
      return -1;
    }
    return 0;
  });


  // const carousel = useRef();


  // let fullSlidesCount =
  //   (products.length -
  //     (products.length % itemInSlide)) /
  //   itemInSlide;
  // let slides = [];
  // for (let i = 0; i < fullSlidesCount; i++) {
  //   slides.push(
  //     products.slice(
  //       i * itemInSlide,
  //       i * itemInSlide +
  //       itemInSlide
  //     )
  //   );
  // }
  // slides.push(
  //   products.slice(-products.length % itemInSlide)
  // );

  // const changeCategory = (id) => {
  //   // carousel.current.scroll(0,0);
  //   // carousel.current.goTo(0);
  //   setCategory(id);
  // };
  return (
    <CatalogPage>
      {/* <Carousel style={{ height: "405px", paddingBottom: "0px" }} enableAutoPlay itemsToShow={1} pagination={false} showArrows={false} transitionMs={500} autoPlaySpeed={2500}>
        {UTSdump.banners.map((item, index) => {
          return (
            <img key={`${item}_${index}`} src={`${process.env.REACT_APP_SERVER_API}/static/img/promo/${item}`} style={{ width: "100%", height: "405px" }} alt={`${process.env.REACT_APP_SERVER_API}/static/img/promo/${item}`} />
          )
        })}
      </Carousel> */}
      <CarouselBlock>
        <Carousel auto loop>
          {UTSdump.banners.map((item, index) => {
            return (
              <img style={{ width: "100%", height: "405px" }} key={`${item}_${index}`} src={`${process.env.REACT_APP_SERVER_API}/static/img/promo/${item}`} alt={`${process.env.REACT_APP_SERVER_API}/static/img/promo/${item}`} />
            )
          })}
        </Carousel>
      </CarouselBlock>
      <CatalogContent UTSdump={UTSdump} setCart={setCart} />
    </CatalogPage>
  );
}

export default Catalog;
