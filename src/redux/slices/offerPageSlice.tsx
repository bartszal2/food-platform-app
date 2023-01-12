import { createSlice } from "@reduxjs/toolkit";
import { offerPageSliceType } from "../../types/slices/offerPageSliceTypes";

const initialState: { value: offerPageSliceType } = {
  value: {
    clientMinPrice: null,
    clientMaxPrice: null,
    listView: "default",
    searchValues: "",
    categories: [],
    ingredients: [],
    tags: [],
    mainFilteredData: [],
    isCategoryParams: null,
    listViewData: {
      numbersProductOnPage: [10, 20, 40, 60],
      selectedNumberProductOnPage: 10,
      activePage: 1,
      dataSelectedSettings: []
    },
    clearSidebarFilter: false
  },
};

export const offerPageSlice = createSlice({
  name: "offerPage",
  initialState,
  reducers: {
    SET_MAIN_FILTERED_DATA: (state, action) => {
      state.value.mainFilteredData = action.payload;
    },
    SET_SELECTED_NUMBER_PRODUCT_ON_PAGE: (state, action) => {
      state.value.listViewData.selectedNumberProductOnPage = action.payload;
    },
    SET_IS_CATEGORY_PARAMS: (state, action) => {
      switch (action.payload) {
        case "true":
          state.value.isCategoryParams = true;
          break;
        case "false":
          state.value.isCategoryParams = false;
          break;
      }
    },
    SET_DATA_SELECTED_SETTINGS: (state, action) => {
      state.value.listViewData.dataSelectedSettings = action.payload;
    },
    SET_ACTIVE_PAGE: (state, action) => {
      state.value.listViewData.activePage = action.payload;
    },
    RESET_ACTIVE_PAGE: (state) => {
      state.value.listViewData.activePage = 1;
    },
    RESET_FILTER_ELEMENTS: (state) => {
      state.value.clientMinPrice = null,
      state.value.clientMaxPrice = null,
      state.value.listView = "default",
      state.value.searchValues = "",
      state.value.categories = [],
      state.value.ingredients = [],
      state.value.tags = [],
      state.value.clearSidebarFilter = !state.value.clearSidebarFilter
    },
    RESET_DATA_SELECTED: (state) => {
      state.value.listViewData.selectedNumberProductOnPage = 10;
      state.value.listViewData.dataSelectedSettings = [];
    },
    SET_FILTER_ELEMENT: (state, action) => {
      switch (action.payload.type) {
        case "categories":
          state.value.categories.push(action.payload.value);
          break;
        case "ingredients":
          state.value.ingredients.push(action.payload.value);
          break;
        case "tags":
          state.value.tags.push(action.payload.value);
          break;
      }
    },
    REMOVE_FILTER_ELEMENT: (state, action) => {
      switch (action.payload.type) {
        case "categories":
          state.value.categories.splice(action.payload.index, 1);
          break;
        case "ingredients":
          state.value.ingredients.splice(action.payload.index, 1);
          break;
        case "tags":
          state.value.tags.splice(action.payload.index, 1);
          break;
      }
    },
    SET_LIST_VIEW: (state, action) => {
      state.value.listView = action.payload;
    },
    SET_SEARCH_VALUE: (state, action) => {
      state.value.searchValues = action.payload;
    },
    SET_MIN_CLIENT_PRICE: (state, action) => {
      state.value.clientMinPrice = action.payload;
    },
    SET_MAX_CLIENT_PRICE: (state, action) => {
      state.value.clientMaxPrice = action.payload;
    }
  },
});

export const {
  SET_MAIN_FILTERED_DATA,
  SET_SELECTED_NUMBER_PRODUCT_ON_PAGE,
  SET_DATA_SELECTED_SETTINGS,
  SET_IS_CATEGORY_PARAMS,
  SET_ACTIVE_PAGE,
  RESET_ACTIVE_PAGE,
  RESET_FILTER_ELEMENTS,
  RESET_DATA_SELECTED,
  SET_FILTER_ELEMENT,
  REMOVE_FILTER_ELEMENT,
  SET_LIST_VIEW,
  SET_SEARCH_VALUE,
  SET_MIN_CLIENT_PRICE,
  SET_MAX_CLIENT_PRICE
} = offerPageSlice.actions;

export const offerPage = (state: { offerPage: { value: offerPageSliceType } }) =>
  state.offerPage.value;

export default offerPageSlice.reducer;
