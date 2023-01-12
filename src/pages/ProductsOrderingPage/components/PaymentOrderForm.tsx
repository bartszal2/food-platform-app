import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { FILL_UP_FORM } from "../../../redux/slices/productsOrderingPageSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { shoppingCartListType } from "../../../types/shoppingCartListType";
import { productsOrderingPageSliceType } from "../../../types/slices/productsOrderingPageSliceType";

function PaymentOrderForm() {
  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);
  const orderFormValues: productsOrderingPageSliceType = useAppSelector((state: RootState) => state.productsOrderingPage.value);

  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="blocks-container__block">
      <div className="block__title">Rodzaj płatności</div>
      <div className="block__payment-form">
        <label className="label-form">
          <input
            className="input-form"
            type="radio"
            name="payment"
            value="card-payment"
            required
            disabled={clientShoppingCart.length > 0 ? false : true}
            checked={orderFormValues.typeOfPayment == "card-payment"}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "typeOfPayment" })
              );
            }}
          />
          <div className={orderFormValues.typeOfPayment == "card-payment" ? "label-form__status label-form__status--active" : "label-form__status"}>Płatność z góry</div>
        </label>
        <label className="label-form">
          <input
            className="input-form"
            type="radio"
            name="payment"
            value="cash-payment"
            required
            disabled={clientShoppingCart.length > 0 ? false : true}
            checked={orderFormValues.typeOfPayment == "cash-payment"}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "typeOfPayment" })
              );
            }}
          />
          <div className={orderFormValues.typeOfPayment == "cash-payment" ? "label-form__status label-form__status--active" : "label-form__status"}>Płatność gotówką</div>
        </label>
      </div>
    </div>
  );
}

export default PaymentOrderForm;
