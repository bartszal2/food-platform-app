import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import ShoppingCartList from "../../../components/ShoppingCartList/ShoppingCartList";
import { FILL_UP_FORM } from "../../../redux/slices/productsOrderingPageSlice";
import { shoppingCartListType } from "../../../types/shoppingCartListType";
import { AppDispatch, RootState } from "../../../redux/store";

function ShoppingCartSection() {
  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);
  const dispatch: AppDispatch = useAppDispatch();

  const checkClientShoppingCart = (): void => {
    if (clientShoppingCart.length == 0) {
      dispatch(FILL_UP_FORM({ value: "", name: "reset-values" }));
    }
  };

  useEffect((): void => {
    checkClientShoppingCart();
  }, [clientShoppingCart]);

  return (
    <div className="blocks-container__block">
      <div className="block__title">Koszyk</div>
      <div className="block__shopping-cart">
        {clientShoppingCart.length > 0 ? (
          <ShoppingCartList/>
        ) : (
          <div className="shopping-cart__notification">
            Twój koszyk jest pusty
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartSection;
