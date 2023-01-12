import { configureStore } from "@reduxjs/toolkit";
import clientShoppingCart from "./slices/clientShoppingCartSlice";
import modalOrderingWindow from "./slices/modalOrderingWindowSlice";
import platformData from "./slices/platformDataSlice";
import productsOrderingPage from "./slices/productsOrderingPageSlice";
import contactPage from "./slices/contactPageSlice";
import offerPage from "./slices/offerPageSlice";

export const store = configureStore({
    reducer: {
        clientShoppingCart: clientShoppingCart,
        productsOrderingPage: productsOrderingPage,
        platformData: platformData,
        modalOrderingWindow: modalOrderingWindow,
        contactPage: contactPage,
        offerPage: offerPage
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;