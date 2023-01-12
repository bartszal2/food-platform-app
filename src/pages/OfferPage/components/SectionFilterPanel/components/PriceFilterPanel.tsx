import React from "react";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { SET_MAX_CLIENT_PRICE, SET_MIN_CLIENT_PRICE } from "../../../../../redux/slices/offerPageSlice";
import { AppDispatch } from "../../../../../redux/store";

function PriceFilterPanel() {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="section-offer__content__filter-panel">
      <div className="section-offer__content__filter-panel-title">
        Kwota (zł)
      </div>
      <div className="section-offer__content__filter-panel__elements__container filter-panel-amount">
        <label>
          Od
          <input
            type="number"
            step="0.01"
            min={0}
            placeholder={"0.00"}
            onChange={(e) => {
              dispatch(
                SET_MIN_CLIENT_PRICE(
                  e.target.value == "" ? null : parseInt(e.target.value)
                )
              );
            }}
          />
        </label>
        <label>
          Do
          <input
            type="number"
            step="0.01"
            min={0}
            placeholder={"0.00"}
            onChange={(e) => {
              dispatch(
                SET_MAX_CLIENT_PRICE(
                  e.target.value == "" ? null : parseInt(e.target.value)
                )
              );
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default PriceFilterPanel;
