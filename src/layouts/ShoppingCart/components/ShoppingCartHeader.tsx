import React from "react";

function ShoppingCartHeader(props: { closeShoppingCart: Function }) {
  return (
    <div className="shopping-cart__header">
      <div className="header__banner">
        <img className="image-element" src={require("../../../assets/images/product-template.png")}/>
        Twoje zamówienie
      </div>
      <div className="header__nav">
        <span className="material-symbols-outlined" onClick={() => {props.closeShoppingCart()}}>
          close
        </span>
      </div>
    </div>
  );
}

export default ShoppingCartHeader;
