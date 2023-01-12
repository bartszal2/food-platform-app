import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import "../../scss/pages/ProductPage/ProductPage.css";
import ProductOrderingModal from "../../layouts/OrderingModalWindow/OrderingModalWindow";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { priceFormater } from "../../utils/priceFormater";
import { OPEN_MODAL_WINDOW } from "../../redux/slices/modalOrderingWindowSlice";
import { getPlatformData, getPlatformSpecialOfferData } from "../../redux/slices/platformDataSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { dataType, platformDataSliceType } from "../../types/slices/platformDataSliceTypes";
import { modalOrderingWindowSliceTypes } from "../../types/slices/modalOrderingWindowSliceTypes";

function ProductPage() {
  let { id } = useParams();

  const dispatch: AppDispatch = useAppDispatch();
  const platformData: platformDataSliceType = useAppSelector((state: RootState) => state.platformData);

  const platformOfferData: dataType = platformData.platformOfferData;
  const specialOfferData: dataType = platformData.platformSpecialOfferData;

  const modalOrderingWindow: modalOrderingWindowSliceTypes = useAppSelector((state: RootState) => state.modalOrderingWindow.value);

  const stringToInt = (string: string): number => {
    return parseInt(string);
  };

  const idNumber: number | string = id != null ? stringToInt(id) : "";

  let resultProductCard;

  if (platformOfferData.error != null || specialOfferData.error != null) {
    resultProductCard = "Błąd ładowania danych";
  } else {
    if (
      platformOfferData.value.length > 0 &&
      Object.keys(specialOfferData.value).length > 0
    ) {
      const productElement = platformOfferData.value.filter((e: { id: number }) => e.id == idNumber)[0];
      const productIsSpecialOffer: boolean =specialOfferData.value.product.id == idNumber;

      resultProductCard = (
        <>
          <div className={
              productIsSpecialOffer
                ? "product-section__image product-section__image-special-offer"
                : "product-section__image"
            }>
            <img src={require("../../assets/images/product-template.png")} />
          </div>
          <div className="product-section__content">
            <div className="content__header">
              <div>
                <div className="header__prevprice">{priceFormater(productElement.prevPrice)}</div>
                <div className="header__price">{priceFormater(productElement.price)}</div>
              </div>

              {productIsSpecialOffer
                ? (
                  specialOfferData.value.product.productAvailable
                    ? (
                      new Date(specialOfferData.value.availableDate) < new Date()
                        ? (
                          <div className="header__add-to-cart" onClick={() => {dispatch(OPEN_MODAL_WINDOW(productElement))}}>
                            <span className="material-symbols-outlined">
                              shopping_cart
                            </span>
                          </div>
                        )
                        : (
                          <div className="header__status">NIEDOSTĘPNY</div>
                        )
                    )
                    : (
                      <div className="header__status">NIEDOSTĘPNY</div>
                    )
                )
                : (
                  productElement.productAvailable 
                    ? (
                      <div className="header__add-to-cart" onClick={() => {dispatch(OPEN_MODAL_WINDOW(productElement))}}>
                        <span className="material-symbols-outlined">
                          shopping_cart
                        </span>
                      </div>
                    )
                    : (
                      <div className="header__status">NIEDOSTĘPNY</div>
                    )
                )
              }
              
            </div>
            <div className="content__title">{productElement.productName}</div>
            <div className="content__categories">
              {productElement.productTag.map((e: any) => (
                <div key={e} className="categories__element">
                  {e}
                </div>
              ))}
            </div>
            <div className="content__description">
              {productElement.longProductDescription}
              <div className="description__ingredient-container">
                <div className="ingredient-title">Składniki:</div>
                <div className="ingredient-container-element">
                  {productElement.ingredients.map((e: any) => (
                    <div key={e} className="ingredient-element">
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      resultProductCard = "Brak danych do wyświetlenia";
    }
  }

  useEffect(() => {
    if (
      platformOfferData.value.length > 0 &&
      Object.keys(specialOfferData.value).length > 0
    ) {
      const productElement = platformOfferData.value.filter(
        (e: { id: number }) => e.id == idNumber
      )[0];
      const prevTitle = document.title;
      document.title = prevTitle + " - " + productElement.productName;
      return () => {
        document.title = prevTitle;
      };
    }
  }, [platformOfferData.loading]);

  useEffect((): void => {
    dispatch(getPlatformData());
    dispatch(getPlatformSpecialOfferData());
  }, []);

  return (
    <div className="product-container">
      {modalOrderingWindow.viewModalWindow ? <ProductOrderingModal /> : ""}
      <Header withContent={false} />
      <section className="product-section">
        {platformOfferData.loading || specialOfferData.loading ? (
          <LoadingSpinner />
        ) : (
          resultProductCard
        )}
      </section>
      <Footer />
    </div>
  );
}

export default ProductPage;
