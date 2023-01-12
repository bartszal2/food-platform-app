import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { OPEN_MODAL_WINDOW } from "../../../redux/slices/modalOrderingWindowSlice";
import { getPlatformSpecialOfferData } from "../../../redux/slices/platformDataSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { dataType } from "../../../types/slices/platformDataSliceTypes";

function SectionSeasonOffer() {
  const dispatch: AppDispatch = useAppDispatch();
  const specialOfferData: dataType = useAppSelector((state: RootState) => state.platformData.platformSpecialOfferData);

  let result: string | JSX.Element;

  if (specialOfferData.error != null) {
    result = "Błąd ładowania danych";
  } else {
    if (Object.keys(specialOfferData.value).length != 0) {
      const getSpecialOfferProductCard = () => {
        return (
          <>
            <div className="product-container">
              <div className="product__card">
                <Link to={`product/${specialOfferData.value.product.id}`}>
                  <div className="product__card__image">
                    <img
                      src={require(`../../../assets/images/${specialOfferData.value.product.productImage}`)}
                    />
                  </div>
                </Link>
                <div className="product__card__header">
                  <div className="product__card__categories">
                    {specialOfferData.value.product.productTag.map(
                      (e: string) => (
                        <div className="product__category">{e}</div>
                      )
                    )}
                  </div>
                  <div className="product__card__settings">
                    {specialOfferData.value.product.productAvailable ? (
                      new Date(specialOfferData.value.availableDate) <
                      new Date() ? (
                        <div
                          className="product__add-to-shopping-cart"
                          onClick={() => {
                            dispatch(
                              OPEN_MODAL_WINDOW(specialOfferData.value.product)
                            );
                          }}
                        >
                          <span className="material-symbols-outlined">
                            shopping_cart
                          </span>
                        </div>
                      ) : (
                        <div className="product__add-to-shopping-cart product-not-available">
                          <span className="material-symbols-outlined">
                            shopping_cart
                          </span>
                        </div>
                      )
                    ) : (
                      <div className="product__add-to-shopping-cart product-not-available">
                        <span className="material-symbols-outlined">
                          shopping_cart
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="product__card__main">
                  <div className="product__card__prev-price">
                    {specialOfferData.value.product.prevPrice.toFixed(2)}zł
                  </div>
                  <div className="product__card__price">
                    {specialOfferData.value.product.price.toFixed(2)}zł
                  </div>
                  <div className="product__card__title">
                    {specialOfferData.value.product.productName}
                  </div>
                  <div className="product__card__description">
                    {specialOfferData.value.product.longProductDescription}
                  </div>
                </div>
              </div>
            </div>
            <div className="season-offer-content">
              <div className="season-offer__main-title">
                {specialOfferData.value.specialOfferTitle}
              </div>
              <div className="season-offer__status">
                Dostępne od{" "}
                {new Date(
                  specialOfferData.value.availableDate
                ).toLocaleDateString()}
              </div>
              <div className="season-offer__title">
                {specialOfferData.value.product.productName}
              </div>
              <div className="season-offer__description">
                {specialOfferData.value.specialOfferDescription}
              </div>
            </div>
          </>
        );
      };

      result = getSpecialOfferProductCard();
    } else {
      result = "Brak danych do wyświetlenia";
    }
  }

  useEffect((): void => {
    dispatch(getPlatformSpecialOfferData());
  }, []);

  return (
    <section className="section-season-offer">
      <div
        className={
          specialOfferData.loading ||
          specialOfferData.error != null ||
          Object.keys(specialOfferData.value).length == 0
            ? "season-offer__container center-item"
            : "season-offer__container"
        }
      >
        {specialOfferData.loading ? <LoadingSpinner /> : result}
      </div>
    </section>
  );
}

export default SectionSeasonOffer;
