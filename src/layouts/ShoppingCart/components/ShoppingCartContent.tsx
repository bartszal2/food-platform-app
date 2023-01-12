import React from "react";
import ShoppingCartList from "../../../components/ShoppingCartList/ShoppingCartList";
import { useAppSelector } from "../../../hooks/hooks";
import { RootState } from "../../../redux/store";
import { shoppingCartListType } from "../../../types/shoppingCartListType";

function ShoppingCartContent() {
  const shoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);

  return (
    <div className="shopping-cart__content">
      {shoppingCart.length > 0 ? (
        <ShoppingCartList />
      ) : (
        <div className="content-notification">Twój koszyk jest pusty</div>
      )}
    </div>
  );
}

export default ShoppingCartContent;
