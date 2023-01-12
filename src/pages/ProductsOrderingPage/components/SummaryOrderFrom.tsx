import React, { useEffect, useState } from "react";
import { priceFormater } from "../../../utils/priceFormater";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { FILL_UP_FORM } from "../../../redux/slices/productsOrderingPageSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { productsOrderingPageSliceType } from "../../../types/slices/productsOrderingPageSliceType";
import { shoppingCartListType } from "../../../types/shoppingCartListType";
import { getSumPriceProductsShoppingCart } from "../../../features/sumPriceProductsShoppingCart";

function SummaryOrderFrom() {
  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);
  const orderFormValues: productsOrderingPageSliceType = useAppSelector((state: RootState) => state.productsOrderingPage.value);

  const dispatch: AppDispatch = useAppDispatch();

  const [sumPriceShoppingCart, setSumPriceShoppingCart] = useState<number>(0)

  const additionalCosts = {
    'home-delivery': 4.00,
    'pickup-in-person': 0.00,
    'scheduled-home-delivery': 4.00,
    'scheduled-pickup-in-person': 0.00
}

  const deliveryNameWithCostFormat = (formValues: productsOrderingPageSliceType, deliveryType: string): string => {
    switch (deliveryType) {
        case 'home-delivery':
            return (
                `Dostawa do domu - 
                ${priceFormater(additionalCosts["home-delivery"])}`
            );
            
        case 'pickup-in-person':
            return (
                `Odbiór osobisty - 
                ${priceFormater(additionalCosts["pickup-in-person"])}`
            );

        case 'scheduled-home-delivery':
            return (
                `Dostawa do domu ${
                    formValues.dateOfScheduledDeliveryHome && formValues.timeOfScheduledDeliveryHome
                    ? `${formValues.dateOfScheduledDeliveryHome}, 
                       ${formValues.timeOfScheduledDeliveryHome}`
                    : '(zaplanowana)'
                } - 
                ${priceFormater(additionalCosts["scheduled-home-delivery"])}`
            );

        case 'scheduled-pickup-in-person':
            return (
                `Odbiór osobisty ${
                    formValues.dateOfScheduledDeliveryPickup && formValues.timeOfScheduledDeliveryPickup
                    ? `${formValues.dateOfScheduledDeliveryPickup}, 
                       ${formValues.timeOfScheduledDeliveryPickup}`
                    : '(zaplanowany)'
                } - 
                ${priceFormater(additionalCosts["scheduled-pickup-in-person"])}`
            );
          
        default: 
            return ''
    }
}

const paymentNameFormat = (paymentType: string): string => {
  switch (paymentType) {
      case 'card-payment':
          return 'Płatność z góry';
      case 'cash-payment':
          return 'Płatność gotówką';
      default:
          return ''
  }
}

const deliveryCost = (deliveryType: string): number => {
  switch (deliveryType) {
      case 'home-delivery':
          return additionalCosts["home-delivery"];
          
      case 'pickup-in-person':
          return additionalCosts["pickup-in-person"];

      case 'scheduled-home-delivery':
          return additionalCosts["scheduled-home-delivery"];

      case 'scheduled-pickup-in-person':
          return additionalCosts["scheduled-pickup-in-person"];

      default:
          return 0;
  }
}

useEffect((): void => {
  if (clientShoppingCart.length > 0) {
    getSumPriceProductsShoppingCart(clientShoppingCart, setSumPriceShoppingCart)
  }
}, [clientShoppingCart])

  return (
    <div className="footer-blocks-container__block">
      <div className="block__title">Podsumowanie</div>
      <div className="block__summary">
        <div className="summary__group-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam
          eius nesciunt optio nam et blanditiis atque ut distinctio dolorem.
          Lorem ipsum dolor.
          <div className="group-text__elements-container">
            <div className="group-text__element">
              Zamówienie: {priceFormater(sumPriceShoppingCart)}
            </div>
            {orderFormValues.typeOfDelivery ? (
              <div className="group-text__element">
                {deliveryNameWithCostFormat(
                  orderFormValues,
                  orderFormValues.typeOfDelivery
                )}
              </div>
            ) : (
              ""
            )}
            {orderFormValues.typeOfPayment ? (
              <div className="group-text__element">
                {paymentNameFormat(orderFormValues.typeOfPayment)}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="group-text__sum">
            Razem:{" "}
            {priceFormater(
              sumPriceShoppingCart +
                deliveryCost(orderFormValues.typeOfDelivery)
            )}
          </div>
        </div>
        <div className="summary__group-inputs">
          <input
            className={
              clientShoppingCart.length > 0
                ? "input-btn-form"
                : "input-btn-form--disabled"
            }
            disabled={clientShoppingCart.length > 0 ? false : true}
            type="reset"
            value="Wyczyść formularz"
            onClick={() => {
              dispatch(FILL_UP_FORM({ value: "", name: "reset-values" }));
            }}
          />
          <input
            className={
              clientShoppingCart.length > 0
                ? "input-btn-form"
                : "input-btn-form--disabled"
            }
            disabled={clientShoppingCart.length > 0 ? false : true}
            type="submit"
            value="Złoż zamówienie"
          />
        </div>
      </div>
    </div>
  );
}

export default SummaryOrderFrom;
