import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { FILL_UP_FORM } from "../../../redux/slices/productsOrderingPageSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { shoppingCartListType } from "../../../types/shoppingCartListType";
import { productsOrderingPageSliceType } from "../../../types/slices/productsOrderingPageSliceType";

function ClientOrderForm() {
  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);
  const orderFormValues: productsOrderingPageSliceType = useAppSelector((state: RootState) => state.productsOrderingPage.value);

  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="blocks-container__block">
      <div className="block__title">Dane do zamówienia</div>
      <div className="block__client-form">
        <label className="label-form">
          Imię i nazwisko*:
          <input
            className="input-form"
            type="text"
            required
            value={orderFormValues.clientName}
            disabled={clientShoppingCart.length > 0 ? false : true}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "clientName" })
              );
            }}
          />
        </label>
        <label className="label-form">
          Numer telefonu*:
          <input
            className="input-form"
            type="text"
            placeholder="000000000"
            pattern="[0-9]{9}"
            minLength={9}
            maxLength={9}
            required
            value={orderFormValues.phoneNumber}
            disabled={clientShoppingCart.length > 0 ? false : true}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "phoneNumber" })
              );
            }}
          />
        </label>
        <label className="label-form">
          Adres email*:
          <input
            className="input-form"
            type="email"
            required
            value={orderFormValues.addressEmail}
            disabled={clientShoppingCart.length > 0 ? false : true}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "addressEmail" })
              );
            }}
          />
        </label>
        <label className="label-form">
          Ulica i numer domu/mieszkania*:
          <input
            className="input-form"
            type="text"
            required
            value={orderFormValues.address}
            disabled={clientShoppingCart.length > 0 ? false : true}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "address" })
              );
            }}
          />
        </label>
        <div className="client-form__group-inputs">
          <label className="label-form">
            Kod pocztowy*:
            <input
              className="input-form"
              type="text"
              placeholder="00000"
              pattern="[0-9]{5}"
              minLength={5}
              maxLength={5}
              required
              value={orderFormValues.zipCode}
              disabled={clientShoppingCart.length > 0 ? false : true}
              onChange={(e) => {
                dispatch(
                  FILL_UP_FORM({ value: e.target.value, name: "zipCode" })
                );
              }}
            />
          </label>
          <label className="label-form">
            Miejscowość*:
            <input
              className="input-form"
              type="text"
              required
              value={orderFormValues.city}
              disabled={clientShoppingCart.length > 0 ? false : true}
              onChange={(e) => {
                dispatch(FILL_UP_FORM({ value: e.target.value, name: "city" }));
              }}
            />
          </label>
        </div>
        <label className="label-form">
          Dodatkowe informacje:
          <textarea
            className="textarea-form"
            value={orderFormValues.additionalInformation}
            disabled={clientShoppingCart.length > 0 ? false : true}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({
                  value: e.target.value,
                  name: "additionalInformation",
                })
              );
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default ClientOrderForm;
