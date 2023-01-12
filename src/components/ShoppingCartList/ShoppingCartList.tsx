import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../../redux/slices/clientShoppingCartSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { shoppingCartListType } from "../../types/shoppingCartListType";
import { priceFormater } from "../../utils/priceFormater";

function ShoppingCartList() {
  const shoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);

  const dispatch: AppDispatch = useAppDispatch();

  const shoppingCartProductsData: JSX.Element[] = shoppingCart.map((e: shoppingCartListType, index) => {
      return (
        <tr key={e.id}>
          <td className="shopping-cart-table__td">
            <div className="shopping-cart__product-image">
              <img
                className="product-image"
                src={require(`../../assets/images/${e.image}`)}
              />
            </div>
            <div className="shopping-cart__product-name">{e.title}</div>
            <div className="shopping-cart__product-description">
              {e.addons.length > 0 ? (
                e.addons.map((e) => (
                  <div
                    key={e.addonName}
                    className="shopping-cart__product-addition"
                  >
                    {e.addonName}
                  </div>
                ))
              ) : (
                <div className="shopping-cart__product-addition">
                  Brak dodatków
                </div>
              )}
            </div>
          </td>
          <td className="shopping-cart-table__td">
            <div className="shopping-cart__count-container">
              <div
                className="shopping-cart__count-down"
                onClick={() => {
                  dispatch(DECREMENT_QUANTITY(e.id));
                }}
              >
                <span className="material-symbols-outlined">remove</span>
              </div>
              <div className="shopping-cart__count-value">{e.count}</div>
              <div
                className="shopping-cart__count-up"
                onClick={() => {
                  dispatch(INCREMENT_QUANTITY(e.id));
                }}
              >
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
          </td>
          <td className="shopping-cart-table__td">
            {priceFormater(e.count * e.price)}
          </td>
          <td
            className="shopping-cart-table__td"
            onClick={() => {
              dispatch(REMOVE_FROM_CART(e.id));
            }}
          >
            <div className="shopping-cart__product-delete">
              <span className="material-symbols-outlined">delete</span>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <table className="shopping-cart-table">
      <thead>
        <tr>
          <th className="shopping-cart-table__th">Produkt</th>
          <th className="shopping-cart-table__th">Sztuk</th>
          <th className="shopping-cart-table__th">Cena</th>
          <th className="shopping-cart-table__th">Opcje</th>
        </tr>
      </thead>
      <tbody>{shoppingCartProductsData}</tbody>
    </table>
  );
}

export default ShoppingCartList;
