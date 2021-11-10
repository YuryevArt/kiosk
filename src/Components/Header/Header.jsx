import React from "react";
import {
  HeaderBlock,
  CategoryList,
  CategoryListItem,
  // Logo,
  // CartButtonArea,
} from "./Header.style";
// import { Link } from "react-router-dom";
// import logoSVG from "../../Assets/img/logo.svg";

import { Icon } from '../.'
function Header({ categories, activeCategory, clickOnCategory }) {
  return (
    <HeaderBlock>
      {/* <Logo src={logoSVG} alt={logoSVG} /> */}
      <CategoryList>
        {categories.filter(cat => cat.products.length > 0).map((item, index) => (
          <CategoryListItem
            key={`${item.id}_${index}`}
            active={item.id === activeCategory}
            onClick={() => {
              clickOnCategory(item.id);
            }}
          >
            <div>
              <Icon iconName={item.icon} />
            </div>
            {item.name}
          </CategoryListItem>
        )
        )}
      </CategoryList>
      {/* <CartButtonArea>
        {countInCart > 0 && (<Link style={{ width: "100%", textDecoration: "none", appearance: "none" }} to={"/cart"}>
          

      </CartButtonArea> */}
    </HeaderBlock>
  );
}

export default Header;
