import { createSlice } from '@reduxjs/toolkit';
import { shoppingCartListType } from '../../types/shoppingCartListType';
import { clientShoppingCartType } from '../../types/slices/clientShoppingCartSliceType';

const initialState: clientShoppingCartType = {
    value: [],
}

export const clientShoppingCartSlice = createSlice({
    name: 'clientShoppingCart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            state.value.push(action.payload)
        },

        RESET_SHOPPING_CART: (state) => {
            state.value = []
        },

        REMOVE_FROM_CART: (state, action) => {
            const newData = state.value;
            const [element] = newData.filter((e: shoppingCartListType) => e.id == action.payload);
            const elementIndex = newData.indexOf(element);
            state.value.splice(elementIndex, 1);     
        },

        INCREMENT_QUANTITY: (state, action) => {
            const [thisProduct] = state.value.filter(product => product.id == action.payload)
            thisProduct.count++;
        },
        
        DECREMENT_QUANTITY: (state, action) => {
            const [thisProduct] = state.value.filter(product => product.id == action.payload)

            if (thisProduct.count > 1) {
                thisProduct.count--;
            }
        }
    }
})

export const {
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    INCREMENT_QUANTITY, 
    DECREMENT_QUANTITY, 
    RESET_SHOPPING_CART
} = clientShoppingCartSlice.actions;

export const clientShoppingCart = (state: { clientShoppingCart: clientShoppingCartType}) => state.clientShoppingCart.value;

export default clientShoppingCartSlice.reducer;