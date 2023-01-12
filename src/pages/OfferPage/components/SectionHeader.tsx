import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { SET_SEARCH_VALUE, SET_LIST_VIEW, SET_SELECTED_NUMBER_PRODUCT_ON_PAGE } from "../../../redux/slices/offerPageSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { offerPageSliceType } from "../../../types/slices/offerPageSliceTypes";

function SectionHeader() {
  const offerPageValues: offerPageSliceType = useAppSelector((state: RootState) => state.offerPage.value);
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="section-offer__content__header">
      <label>
        Wyszukiwanie produktu
        <input
          type="text"
          placeholder="Szukaj..."
          value={offerPageValues.searchValues}
          onChange={(e) => {
            dispatch(SET_SEARCH_VALUE(e.target.value));
          }}
        />
      </label>
      <div className="header-filter-select-group">
        <label>
          Sortowanie listy
          <select
            value={offerPageValues.listView}
            onChange={(e) => {
              dispatch(SET_LIST_VIEW(e.target.value));
            }}
          >
            <option value="default">Domyślnie</option>
            <option value="available">Dostępne</option>
            <option value="not-available">Niedostępne</option>
            <option value="min-price">Od najtańszego</option>
            <option value="max-price">Od najdroższego</option>
          </select>
        </label>
        <label>
          Ilość produktów na stronie
          <select
            defaultValue={
              offerPageValues.listViewData.selectedNumberProductOnPage
            }
            value={offerPageValues.listViewData.selectedNumberProductOnPage}
            onChange={(e) => {
              dispatch(SET_SELECTED_NUMBER_PRODUCT_ON_PAGE(e.target.value));
            }}
          >
            {offerPageValues.listViewData.numbersProductOnPage.map(
              (e: number) => (
                <option key={e} value={e}>
                  {e}
                </option>
              )
            )}
          </select>
        </label>
      </div>
    </div>
  );
}

export default SectionHeader;
