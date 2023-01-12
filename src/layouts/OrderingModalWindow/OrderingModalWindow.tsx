import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { priceFormater } from "../../utils/priceFormater";
import { ADD_TO_CART } from "../../redux/slices/clientShoppingCartSlice";
import "../../scss/layout/ProductOrderingModal/ProductOrderingModal.css";
import { AppDispatch, RootState } from "../../redux/store";
import { CLOSE_MODAL_WINDOW, REMOVE_PRODUCT_ADDON, RESET_PRODUCT_ADDON, SET_PRODUCT_ADDON } from "../../redux/slices/modalOrderingWindowSlice";
import { modalOrderingWindowSliceTypes } from "../../types/slices/modalOrderingWindowSliceTypes";

function OrderingModalWindow() {
  const modalOrderingWindow: modalOrderingWindowSliceTypes = useAppSelector((state: RootState) => state.modalOrderingWindow.value);
  const dispatch: AppDispatch = useAppDispatch();

  const productAddonHandler = (e: any, addonElement: any): void => {
    if (e.target.checked) {
      dispatch(SET_PRODUCT_ADDON(addonElement));
    } else {
      const addonIndex: number = modalOrderingWindow.productCompleted.addons.indexOf(addonElement);
      dispatch(REMOVE_PRODUCT_ADDON(addonIndex));
    }
  };

  const sumPriceAddons = (): number => {
    let sumValue: number = 0;

    for (const v of modalOrderingWindow.productCompleted.addons) {
      sumValue += v.addonPrice;
    }

    return sumValue;
  };

  return (
    <div className="product-ordering-modal-container">
      <div className="product-ordering-modal__content">
        <div className="modal__content__header">
          <div className="header__title">Dodawanie produktu do koszyka</div>
          <div className="header__nav">
            <button
              className="nav__button"
              onClick={() => dispatch(CLOSE_MODAL_WINDOW())}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <form className="modal__content__form">
          <div className="form__main">
            <div className="main__product-info">
              <div className="product-info__image">
                <img
                  src={require(`../../assets/images/${modalOrderingWindow.productElement.productImage}`)}
                />
              </div>
              <div className="product-info__name">
                {modalOrderingWindow.productElement.productName}
                <div className="product-info__price">
                  Wybierz dodatki do zamówienia
                </div>
              </div>
            </div>
            <div className="main__product-addons">
              {modalOrderingWindow.productElement.availableAddons.length > 0 ? (
                modalOrderingWindow.productElement.availableAddons.map(
                  (v: any) => (
                    <label key={v} className="product-addon">
                      <input
                        type="checkbox"
                        onClick={(e) => productAddonHandler(e, v)}
                      />
                      <div className="product-addon__checkbox-element"></div>
                      {v.addonName} ({priceFormater(v.addonPrice)})
                    </label>
                  )
                )
              ) : (
                <div className="product-addon-notification">
                  Brak dodatków dla danego produktu
                </div>
              )}
            </div>
          </div>
          <div className="modal__content__footer">
            <div className="footer__summary">
              Łączna cena za produkt wynosi:
              <div className="summary__price">
                {priceFormater(
                  modalOrderingWindow.productElement.price + sumPriceAddons()
                )}
              </div>
            </div>
            <div className="footer__buttons">
              {modalOrderingWindow.productElement.availableAddons.length > 0 ? (
                <input
                  className="input-element"
                  type="reset"
                  value="Wyczyść"
                  onClick={() => {
                    dispatch(RESET_PRODUCT_ADDON());
                  }}
                />
              ) : (
                ""
              )}
              <input
                className="input-element"
                type="submit"
                value="Dodaj do koszyka"
                onClick={(e) => {
                  dispatch(
                    ADD_TO_CART(
                      {
                        id: modalOrderingWindow.productCompleted.id,
                        image: modalOrderingWindow.productCompleted.image,
                        title: modalOrderingWindow.productCompleted.productName,
                        addons: modalOrderingWindow.productCompleted.addons,
                        count: 1,
                        price: modalOrderingWindow.productElement.price + sumPriceAddons()
                      }
                    )
                  ),
                    e.preventDefault(),
                    dispatch(CLOSE_MODAL_WINDOW());
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderingModalWindow;
