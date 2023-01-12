import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { FILL_UP_FORM } from "../../../redux/slices/productsOrderingPageSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { shoppingCartListType } from "../../../types/shoppingCartListType";
import { productsOrderingPageSliceType } from "../../../types/slices/productsOrderingPageSliceType";
import { convertValueLessThanTen } from "../../../utils/convertValueLessThanTen";
import { priceFormater } from "../../../utils/priceFormater";

function DeliveryOrderForm() {
  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);
  const orderFormValues: productsOrderingPageSliceType = useAppSelector((state: RootState) => state.productsOrderingPage.value);

  const dispatch: AppDispatch = useAppDispatch();

  const additionalCosts = {
    'home-delivery': 4.00,
    'pickup-in-person': 0.00,
    'scheduled-home-delivery': 4.00,
    'scheduled-pickup-in-person': 0.00
}

const tomorrowDate = (): string => {
  const date: Date = new Date();

  date.setDate(date.getDate() + 1);

  const day: number = date.getDate();
  const month: number = date.getMonth() + 1;
  const year: number = date.getFullYear();

  let dayValue: number | string = convertValueLessThanTen(day);
  let monthValue: number | string = convertValueLessThanTen(month);

  return `${year}-${monthValue}-${dayValue}`;
}

const dateInTwoWeeksFromToday = (): string => {
  const date: Date = new Date();

  date.setDate(date.getDate() + 14);

  const day: number = date.getDate();
  const month: number = date.getMonth() + 1;
  const year: number = date.getFullYear();

  let dayValue: number | string = convertValueLessThanTen(day);
  let monthValue: number | string = convertValueLessThanTen(month);

  return `${year}-${monthValue}-${dayValue}`;
}

  return (
    <div className="blocks-container__block">
      <div className="block__title">Rodzaj dostawy</div>
      <div className="block__delivery-form">
        <label className="label-form">
          <input
            className="input-form"
            type="radio"
            name="delivery"
            value="home-delivery"
            required
            disabled={clientShoppingCart.length > 0 ? false : true}
            checked={orderFormValues.typeOfDelivery == "home-delivery"}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "typeOfDelivery" })
              );
            }}
          />
          <div className={orderFormValues.typeOfDelivery == "home-delivery" ? "label-form__status label-form__status--active" : "label-form__status"}>
            Dostawa do domu - ({priceFormater(additionalCosts["home-delivery"])}
            )
          </div>
        </label>
        <label className="label-form">
          <input
            className="input-form"
            type="radio"
            name="delivery"
            value="pickup-in-person"
            required
            disabled={clientShoppingCart.length > 0 ? false : true}
            checked={orderFormValues.typeOfDelivery == "pickup-in-person"}
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "typeOfDelivery" })
              );
            }}
          />
          <div className={orderFormValues.typeOfDelivery == "pickup-in-person" ? "label-form__status label-form__status--active" : "label-form__status"}>
            Odbiór osobisty - (
            {priceFormater(additionalCosts["pickup-in-person"])})
          </div>
        </label>
        <label className="label-form">
          <input
            className="input-form"
            type="radio"
            name="delivery"
            value="scheduled-home-delivery"
            required
            disabled={clientShoppingCart.length > 0 ? false : true}
            checked={
              orderFormValues.typeOfDelivery == "scheduled-home-delivery"
            }
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "typeOfDelivery" })
              );
            }}
          />
          <div className={orderFormValues.typeOfDelivery == "scheduled-home-delivery" ? "label-form__status label-form__status--active" : "label-form__status"}>
            Dostawa do domu (zaplanowana) - (
            {priceFormater(additionalCosts["scheduled-home-delivery"])})
            <div className="delivery-form__group-inputs">
              <input
                className="input-form"
                type="date"
                min={tomorrowDate()}
                max={dateInTwoWeeksFromToday()}
                disabled={
                  orderFormValues.typeOfDelivery == "scheduled-home-delivery"
                    ? false
                    : true
                }
                required={
                  orderFormValues.typeOfDelivery == "scheduled-home-delivery"
                    ? true
                    : false
                }
                value={orderFormValues.dateOfScheduledDeliveryHome}
                onChange={(e) => {
                  dispatch(
                    FILL_UP_FORM({
                      value: e.target.value,
                      name: "dateOfScheduledDeliveryHome",
                    })
                  );
                }}
              />
              <select
                className="select-form"
                disabled={
                  orderFormValues.typeOfDelivery == "scheduled-home-delivery"
                    ? false
                    : true
                }
                required={
                  orderFormValues.typeOfDelivery == "scheduled-home-delivery"
                    ? true
                    : false
                }
                value={orderFormValues.timeOfScheduledDeliveryHome}
                onChange={(e) => {
                  dispatch(
                    FILL_UP_FORM({
                      value: e.target.value,
                      name: "timeOfScheduledDeliveryHome",
                    })
                  );
                }}
              >
                <option value=""></option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          </div>
        </label>
        <label className="label-form">
          <input
            className="input-form"
            type="radio"
            name="delivery"
            value="scheduled-pickup-in-person"
            required
            disabled={clientShoppingCart.length > 0 ? false : true}
            checked={
              orderFormValues.typeOfDelivery == "scheduled-pickup-in-person"
            }
            onChange={(e) => {
              dispatch(
                FILL_UP_FORM({ value: e.target.value, name: "typeOfDelivery" })
              );
            }}
          />
          <div className={orderFormValues.typeOfDelivery == "scheduled-pickup-in-person" ? "label-form__status label-form__status--active" : "label-form__status"}>
            Odbiór osobisty (zaplanowany) - (
            {priceFormater(additionalCosts["scheduled-pickup-in-person"])})
            <div className="delivery-form__group-inputs">
              <input
                className="input-form"
                type="date"
                min={tomorrowDate()}
                max={dateInTwoWeeksFromToday()}
                disabled={
                  orderFormValues.typeOfDelivery == "scheduled-pickup-in-person"
                    ? false
                    : true
                }
                required={
                  orderFormValues.typeOfDelivery == "scheduled-pickup-in-person"
                    ? true
                    : false
                }
                value={orderFormValues.dateOfScheduledDeliveryPickup}
                onChange={(e) => {
                  dispatch(
                    FILL_UP_FORM({
                      value: e.target.value,
                      name: "dateOfScheduledDeliveryPickup",
                    })
                  );
                }}
              />
              <select
                className="select-form"
                disabled={
                  orderFormValues.typeOfDelivery == "scheduled-pickup-in-person"
                    ? false
                    : true
                }
                required={
                  orderFormValues.typeOfDelivery == "scheduled-pickup-in-person"
                    ? true
                    : false
                }
                value={orderFormValues.timeOfScheduledDeliveryPickup}
                onChange={(e) => {
                  dispatch(
                    FILL_UP_FORM({
                      value: e.target.value,
                      name: "timeOfScheduledDeliveryPickup",
                    })
                  );
                }}
              >
                <option value=""></option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default DeliveryOrderForm;
