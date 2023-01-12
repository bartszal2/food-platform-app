import { shoppingCartListType } from "../types/shoppingCartListType";

export const getSumPriceProductsShoppingCart = (shoppingCart: shoppingCartListType[], setSumPriceShoppingCart: Function): void => {
    let price: number = 0;

    for (let i = 0; i < shoppingCart.length; i++) {
        price += shoppingCart[i].count * shoppingCart[i].price;
    }

    setSumPriceShoppingCart(price);
}