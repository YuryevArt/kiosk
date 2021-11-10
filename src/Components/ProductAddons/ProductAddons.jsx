import React from "react";
import {
  AddonsName,
  AddonsList,
  AddonItem,
  CountBlock,
  AddonImage,
} from "./ProductAddons.style";
function ProductAddons({ name, addons, activeAddons, codeAddon, setActive }) {
  //
  const minusCount = (id, addon, count) => {
    setActive((prevstate) => {
      if (count !== 0) {
        prevstate[id].find((x) => x.id === addon.id).count = count;
      } else {
        prevstate[id].splice(
          prevstate[id].findIndex((x) => x.id === addon.id),
          1
        );
      }
      return { ...prevstate };
    });
    setActive((prevstate) => {
      return { ...prevstate };
    });
  };
  //
  const plusCount = (id, addon, count) => {
    setActive((prevstate) => {
      if (count > 1) {
        prevstate[id].find((x) => x.id === addon.id).count = count;
      } else {
        addon.count = count;
        prevstate[id].push(addon);
      }
      return { ...prevstate };
    });
  };
  //
  if (addons)
    return (
      <>
        <AddonsName>{name}</AddonsName>
        <AddonsList>
          {addons.map((item, index) => {
            let addonInActive = activeAddons.find((x) => x.id === item.id);
            return (
              <AddonItem key={`${item.id}_${index}`} active={!!addonInActive}>
                <AddonImage src={`https://danar.ru/kiosk/${item.code}.jpg`} alt={`https://danar.ru/kiosk/${item.code}.jpg`} />
                {item.name} ({item.price}Р)
                <CountBlock>
                  <button
                    onClick={
                      addonInActive
                        ? () =>
                            minusCount(
                              codeAddon,
                              addonInActive,
                              addonInActive.count - 1
                            )
                        : null
                    }
                  >
                    -
                  </button>
                  <span>{addonInActive ? addonInActive.count : "0"}</span>
                  <button
                    onClick={() =>
                      plusCount(
                        codeAddon,
                        item,
                        addonInActive ? addonInActive.count + 1 : 1
                      )
                    }
                  >
                    +
                  </button>
                </CountBlock>
              </AddonItem>
            );
          })}
        </AddonsList>
      </>
    );
  else return <></>;
}

export default ProductAddons;
