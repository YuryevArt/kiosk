import React from "react";
import {
  RadioButtonTitle,
  RadioButtonsGroup,
  RadioButtonsItem,
  OptionImage,
} from "./RadioButtons.style";
function RadioButtons({
  variants,
  activeVariant,
  setActive,
  type,
  codeOption,
  name = "",
}) {
  console.log(variants)
  return (
    <>
      <RadioButtonTitle>{name}</RadioButtonTitle>
      <RadioButtonsGroup>
        {variants.map((item, index) => {
          return (
            <RadioButtonsItem
              active={type === "togglingOption" ? !!activeVariant.find(x => x.name === item.name) : item.id === activeVariant.id}
              key={`${item.id}_${index}`}
              onClick={
                type === "variant"
                  ? () => setActive(item)
                  : () => setActive(codeOption, item)
              }
            >{item.code !== "" &&
              <OptionImage src={`https://danar.ru/kiosk/${item.code}.jpg`} alt={`https://danar.ru/kiosk/${item.code}.jpg`} />
              }
              {item.name}
            </RadioButtonsItem>
          );
        })}
      </RadioButtonsGroup>
    </>
  );
}

export default RadioButtons;
