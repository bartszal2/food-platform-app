import { createSlice } from '@reduxjs/toolkit';
import { modalOrderingWindowSliceTypes } from '../../types/slices/modalOrderingWindowSliceTypes';

const initialState: {value: modalOrderingWindowSliceTypes} = {
    value: {
        viewModalWindow: false,
        productElement: null,
        productCompleted: {
            id: 0,
            image: '',
            productName: '',
            addons: [],
            price: 0
        }
    },
}

export const modalOrderingWindowSlice = createSlice({
    name: 'modalOrderingWindow',
    initialState,
    reducers: {
        OPEN_MODAL_WINDOW: (state, action) => {
            state.value.viewModalWindow = true;
            state.value.productElement = action.payload;

            state.value.productCompleted.id = action.payload.id;
            state.value.productCompleted.image = action.payload.productImage;
            state.value.productCompleted.productName = action.payload.productName;
            state.value.productCompleted.addons = [];
            state.value.productCompleted.price = action.payload.price;
        },
        SET_PRODUCT_ADDON: (state, action) => {
            state.value.productCompleted.addons.push(action.payload);
        },
        REMOVE_PRODUCT_ADDON: (state, action) => {
            state.value.productCompleted.addons.splice(action.payload, 1);
        },
        CLOSE_MODAL_WINDOW: (state) => {
            state.value.viewModalWindow = false;
        },
        RESET_PRODUCT_ADDON: (state) => {
            state.value.productCompleted.addons = [];
        }
    }
})

export const {OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW, SET_PRODUCT_ADDON, REMOVE_PRODUCT_ADDON, RESET_PRODUCT_ADDON} = modalOrderingWindowSlice.actions;

export const modalOrderingWindow = (state: { modalOrderingWindow: { value: modalOrderingWindowSliceTypes }}) => state.modalOrderingWindow.value;

export default modalOrderingWindowSlice.reducer;