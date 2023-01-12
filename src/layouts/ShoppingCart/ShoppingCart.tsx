import React from "react";
import ShoppingCartContent from "./components/ShoppingCartContent";
import ShoppingCartDescription from "./components/ShoppingCartDescription";
import ShoppingCartHeader from "./components/ShoppingCartHeader";
import ShoppingCartSummary from "./components/ShoppingCartSummary";

function ShoppingCart(props: { open: boolean; closeShoppingCart: Function }) {
  return (
    <div className={
        props.open
          ? "shopping-cart-container shopping-cart-open"
          : "shopping-cart-container shopping-cart-close"
      }
    >
      <ShoppingCartHeader closeShoppingCart={props.closeShoppingCart} />
      <ShoppingCartDescription />
      <ShoppingCartContent />
      <ShoppingCartSummary />
    </div>
  );
}

export default ShoppingCart;
