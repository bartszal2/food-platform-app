import { shoppingCartListType } from "../types/shoppingCartListType";

export const getCountProductsShoppingCart = (shoppingCart: shoppingCartListType[], setCountProductsShoppingCart: Function): void => {
    let count: number = 0;

    for (let i = 0; i < shoppingCart.length; i++) {
        count += shoppingCart[i].count;
    }    

    setCountProductsShoppingCart(count);
}