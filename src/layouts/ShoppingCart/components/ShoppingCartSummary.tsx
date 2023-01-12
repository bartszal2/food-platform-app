import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountProductsShoppingCart } from "../../../features/countProductsShoppingCart";
import { getSumPriceProductsShoppingCart } from "../../../features/sumPriceProductsShoppingCart";
import { useAppSelector } from "../../../hooks/hooks";
import { RootState } from "../../../redux/store";
import { shoppingCartListType } from "../../../types/shoppingCartListType";
import { priceFormater } from "../../../utils/priceFormater";

function ShoppingCartSummary() {
  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);

  const [sumPriceShoppingCart, setSumPriceShoppingCart] = useState<number>(0)
  const [countProductsShoppingCart, setCountProductsShoppingCart] = useState<number>(0)

  useEffect((): void => {
    if (clientShoppingCart.length > 0) {
      getSumPriceProductsShoppingCart(clientShoppingCart, setSumPriceShoppingCart)
      getCountProductsShoppingCart(clientShoppingCart, setCountProductsShoppingCart)
    }
  }, [clientShoppingCart])

  return (
    <div className="shopping-cart__summary">
      <div className="summary__container">
        <div className="container__information">
          <p className="information__paragraph">INFORMACJE DODATKOWE:</p>
          <p className="information__paragraph">Ilość produktów: {countProductsShoppingCart}</p>
          <p className="information__paragraph">
            W późniejszym etapie składania zamówienia wybierzesz sposób dostawy
            oraz płatności.
          </p>
        </div>
        <div className="container__amount">
          Razem: {priceFormater(sumPriceShoppingCart)}
          <div className="shopping-cart__summary__nav"></div>
          {countProductsShoppingCart > 0 ? (
            <Link to="/orderform">
              <button className="btn-primary">Podsumowanie</button>
            </Link>
          ) : (
            <button className="btn-disabled">Podsumowanie</button>
          )}
        </div>
      </div>
      <div className="summary__payment">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus
        voluptatum nostrum voluptate vel, nulla repellat soluta deserunt, rerum
        officia quos cumque voluptas similique rem non totam nisi unde optio.
        Laudantium eveniet perferendis fugit ut.
      </div>
    </div>
  );
}

export default ShoppingCartSummary;
