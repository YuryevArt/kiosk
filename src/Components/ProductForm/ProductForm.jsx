import React, { useState, Fragment } from "react";
import {
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
} from "./ProductForm.style";

import { RadioButtons, ProductAddons, AddToCartButton } from "../../Components";


const calculatePrice = (product, addons) => {
  return Object.keys(addons)
    .map((id) => {
      return addons[id].reduce((sum, item) => sum + item.price * item.count, 0);
    })
    .reduce((sum, item) => sum + item, product.price);
  // return product.price;
};

const getItemCart = (newLine, cart) => {
  for (let itemCart of cart) {
    if (
      newLine.comment === itemCart.comment &&
      newLine.options.length === itemCart.options.length
    ) {
      if (
        itemCart.options.filter((itemOption) =>
          newLine.options.find(
            (x) => x.id === itemOption.id && x.quantity === itemOption.quantity
          )
        ).length === itemCart.options.length
      ) {
        return itemCart;
      }
    }
  }
  return null;
};

function ProductForm({ product, setCart, closeModal }) {
  // console.log(product);
  const [variant, setVariant] = useState(null);
  const [activeOptions, setActiveOptions] = useState(null);
  const [activeTogglingOptions, setActiveTogglingOptions] = useState(null);
  const [activeAddons, setActiveAddons] = useState(null);
  const [activeTab, setActiveTab] = useState(null)
  const addToCart = () => {
    console.log(variant)
    setCart((prevstate) => {
      let productsInCart = prevstate.filter((x) => x.variant === variant.id);
      // start generate cart line
      let cartLine = {
        code: variant.code,
        artikul: variant.artikul,
        codecafe: variant.codecafe,
        artikulcafe: variant.artikulcafe,
        variant: variant.id,
        variantName: variant.name,
        name: product.name,
        options: [],
        comment: "",
        quantity: 1,
        summaryPrice: calculatePrice(variant, activeAddons),
        price: variant.price,
      };
      Object.keys(activeOptions).forEach((key) => {
        console.log(activeOptions[key]);
        if (activeOptions[key].id !== null) {
          if (activeOptions[key].code !== "") {
            console.log("active option", activeOptions[key]);
            cartLine.options.push({
              quantity: 1,
              id: activeOptions[key].id,
              code: activeOptions[key].code,
              artikul: activeOptions[key].artikul,
              codecafe: activeOptions[key].codecafe,
              artikulcafe: activeOptions[key].artikulcafe,
              name: activeOptions[key].name,
              price: activeOptions[key].price,
            });
          } else {
            cartLine.comment += `${activeOptions[key].name}; `;
          }
        }
      });
      Object.keys(activeTogglingOptions).forEach((key) => {
        let currentOption = product.options.find((x) => x.id === Number(key));
        if (currentOption.products[0].code !== "") {
          activeTogglingOptions[key].forEach((item) => {
            cartLine.options.push({
              quantity: 1,
              id: item.id,
              code: item.code,
              artikul: item.artikul,
              codecafe: item.codecafe,
              artikulcafe: item.artikulcafe,
              name: item.name,
            });
          });
        } else {
          // currentOption
          let fliteringArr = activeTogglingOptions[key].map((item) => {
            return item.id;
          });
          currentOption.products
            .filter((x) => !fliteringArr.includes(x.id))
            .forEach((item) => {
              cartLine.comment += `${currentOption.bez ? "Без " : ""}${item.name
                }; `;
            });
        }
      });
      Object.keys(activeAddons).forEach((key) => {
        activeAddons[key].forEach((item) => {
          if (item.code !== "") {
            cartLine.options.push({
              quantity: item.count,
              id: item.id,
              code: item.code,
              artikul: item.artikul,
              codecafe: item.codecafe,
              artikulcafe: item.artikulcafe,
              name: item.name,
              price: item.price,
            });
          } else {
            cartLine.comment += `${item.name}; `;
          }
        });
      });
      //
      // End generate cartline
      //
      if (productsInCart.length > 0) {
        let EqualItem = getItemCart(cartLine, productsInCart);
        if (EqualItem) {
          EqualItem.quantity += 1;
        } else {
          prevstate.push(cartLine);
        }
      } else {
        prevstate.push(cartLine);
      }
      return [...prevstate];
    });
    closeModal();
  };
  React.useEffect(() => {
    let startVariant = product?.variants.find((x) => x.vibran === true);
    if (!startVariant) {
      startVariant = product?.variants[0];
    }
    setVariant(startVariant);
    if (product) {
      let options = [];
      let togglingOptions = {};
      let addons = [];
      let optionsIsBeing = false;
      let togglingOptionsIsBeing = false;
      let addonsIsBeing = false;
      console.log('product', product)
      product.options.forEach((element) => {
        console.log(element);
        if (element.tolko1) {
          if (element.obyaz) {
            optionsIsBeing = true;
            let foundIt = element.products.find((x) => x.vibran === true);
            if (foundIt) {
              options[element.id] = foundIt;
            } else {
              options[element.id] = element.products[0];
            }
          } else {
            options[element.id] = { id: null };
          }
        } else if (!element.tolko1 && !element.obyaz && element.bez) {
          togglingOptionsIsBeing = true;
          togglingOptions[element.id] = element.products.filter(
            (x) => x.vibran === true
          );
        } else if (!element.tolko1 && !element.obyaz && !element.bez) {
          console.log(element);
          addonsIsBeing = true;
          addons[element.id] = [];
        }
      });
      setActiveOptions(options);
      console.log('options', options);
      console.log("toggling", togglingOptions)
      setActiveTogglingOptions(togglingOptions);
      setActiveAddons(addons);
      if (optionsIsBeing || togglingOptionsIsBeing || product.variants.length > 1) {
        setActiveTab("sostav")
      } else {
        if (addonsIsBeing) {
          setActiveTab("addons")
        }
        else {
          setActiveTab("info")
        }
      }

    }
  }, [product]);
  //
  //
  const changeOption = (id, product) => {
    setActiveOptions((prevstate) => {
      return { ...prevstate, [id]: product };
    });
  };
  //
  const changeTogglingOption = (id, product) => {
    setActiveTogglingOptions((prevstate) => {
      let productOption = prevstate[id].findIndex(
        (x) => x.name === product.name
      );
      if (productOption === -1) {
        prevstate[id].push(product);
      } else {
        prevstate[id].splice(productOption, 1);
      }
      return { ...prevstate };
    });
  };
  return (
    <ProductFormBody>
      <ProductImageBlock>
        <ProductImage src={variant ? `https://danar.ru/kiosk/${product.code}.jpg` : ''} alt={variant ? `https://danar.ru/kiosk/${product.code}.jpg` : ''} />
      </ProductImageBlock>
      <ProductName>{variant ? product.name : ""}</ProductName>
      <TabMenu>
        <TabMenuItem active={activeTab === 'sostav'} onClick={() => setActiveTab('sostav')}>Состав</TabMenuItem>
        <TabMenuItem active={activeTab === 'addons'} onClick={() => setActiveTab('addons')}>Дополнительно</TabMenuItem>
        <TabMenuItem active={activeTab === 'info'} onClick={() => setActiveTab('info')}>Информация</TabMenuItem>
      </TabMenu>
      {variant ? (
        <>
          <ProductInfo>
            {activeTab === 'info' && (
              <>
                <ProductWeight>{variant.vihod}</ProductWeight>
                <ProductDescription>{variant.opisanie}</ProductDescription>
                <ProductStructure>
                  <span>Состав: </span>
                  {variant.sostav}
                </ProductStructure>
                <ProductNutritionalValue>
                  <span>Пищевая ценность: </span>
                  {variant.kalorii}
                </ProductNutritionalValue>
              </>
            )}
            {activeTab === "sostav" && (
              <>
                {product.variants.length > 1 && (
                  <RadioButtons
                    variants={product.variants}
                    setActive={setVariant}
                    activeVariant={variant}
                    type="variant"
                  />
                )}
                {activeOptions && activeTogglingOptions &&
                  product.options.map((item, index) => activeOptions[item.id] ? (
                    <RadioButtons
                      name={item.name}
                      key={item.id}
                      variants={item.products}
                      setActive={changeOption}
                      activeVariant={activeOptions[item.id]}
                      type="option"
                      codeOption={item.id}
                    />
                  ) : activeTogglingOptions[item.id] ? (
                    <RadioButtons
                      name={item.name}
                      key={item.id}
                      variants={item.products}
                      setActive={changeTogglingOption}
                      activeVariant={activeTogglingOptions[item.id]}
                      type="togglingOption"
                      codeOption={item.id}
                    />
                  ) : null
                  )}
              </>
            )}


            {activeTab === "addons" && activeOptions && activeTogglingOptions && product.options.map((item, index) => {
              if (activeAddons[item.id])
                return (
                  <ProductAddons
                    name={item.name}
                    key={item.id}
                    addons={item.products}
                    activeAddons={activeAddons[item.id]}
                    codeAddon={item.id}
                    setActive={setActiveAddons}
                  />
                );
              else return null;
            })}
          </ProductInfo>
          <ProductPrice>
            <span>{calculatePrice(variant, activeAddons)} Р</span>
            <AddToCartButton onClickHandler={() => { addToCart() }} />
          </ProductPrice>
        </>
      ) : (
        <></>
      )}

    </ProductFormBody>
  );
}

export default ProductForm;
