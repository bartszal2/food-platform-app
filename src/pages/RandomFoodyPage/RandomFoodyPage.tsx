import React, { useEffect, useState } from "react";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "../../scss/pages/RandomFoodyPage/RandomFoodyPage.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { priceFormater } from "../../utils/priceFormater";
import ProductOrderingModal from "../../layouts/OrderingModalWindow/OrderingModalWindow";
import { OPEN_MODAL_WINDOW } from "../../redux/slices/modalOrderingWindowSlice";
import { getPlatformData } from "../../redux/slices/platformDataSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { dataType, platformDataSliceType } from "../../types/slices/platformDataSliceTypes";
import { modalOrderingWindowSliceTypes } from "../../types/slices/modalOrderingWindowSliceTypes";

function RandomFoodyPage() {
  const dispatch: AppDispatch = useAppDispatch();
  const platformData: platformDataSliceType = useAppSelector((state: RootState) => state.platformData);

  const platformOfferData: dataType = platformData.platformOfferData;

  const modalOrderingWindow: modalOrderingWindowSliceTypes = useAppSelector((state: RootState) => state.modalOrderingWindow.value);

  const [randomProduct, setRandomProduct] = useState<boolean>(false);
  const [randomProductIndex, setRandomProductIndex] = useState<number>(0);

  const availableOfferPlatformData = platformOfferData.value.filter((e: any) => e.productAvailable === true);

  const randomProductIndexFnc = (): number => {
    const lengthAvailableOfferData: number = availableOfferPlatformData.length;
    const minValue: number = Math.ceil(0);
    const maxValue: number = Math.floor(lengthAvailableOfferData - 1);

    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  };

  const randomProductElement = availableOfferPlatformData[randomProductIndex];

  let result;

  if (platformOfferData.error != null) {
    result = "Błąd ładowania danych";
  } else {
    if (platformOfferData.value.length > 0) {
      result = (
        <>
          {randomProduct ? (
            <>
              <div className="main__random__container__text">
                <div className="main__random__container__text__title">
                  Oferta wylosowana specjalnie dla Ciebie!
                </div>
                <div className="main__random__container__text__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, eum! Cupiditate accusamus ducimus, iusto placeat
                  voluptas ipsam unde earum doloribus possimus in sint dolores
                  minus? Lorem ipsum dolor sit.
                </div>
              </div>
              <div className="random__product">
                <Link to={`/product/${randomProductElement.id}`}>
                  <div className="random__product__image">
                    <img
                      src={require(`../../assets/images/${randomProductElement.productImage}`)}
                    />
                  </div>
                </Link>
                <div className="random__product__header">
                  <div className="random__product__categories">
                    {randomProductElement.productTag.map((e: any) => (
                      <div key={e} className="random__product__category">
                        {e}
                      </div>
                    ))}
                  </div>
                  <div className="random__product__card__settings">
                    <div
                      className="random__product__add-to-shopping-cart"
                      onClick={() => {
                        dispatch(OPEN_MODAL_WINDOW(randomProductElement));
                      }}
                    >
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                    </div>
                  </div>
                </div>
                <div className="random__product__main">
                  <div className="random__product__prev-price">
                    {priceFormater(randomProductElement.prevPrice)}
                  </div>
                  <div className="random__product__price">
                    {priceFormater(randomProductElement.price)}
                  </div>
                  <div className="random__product__title">
                    {randomProductElement.productName}
                  </div>
                  <div className="random__product__description">
                    {randomProductElement.longProductDescription}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="main__random__container__loading">
              <LoadingSpinner />
              <div className="loading__container__status">
                Szukamy oferty dla Ciebie...
              </div>
              <div className="loading__container__title">RandomFOODY</div>
              <div className="loading__container__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, consectetur et? Esse aliquid voluptates commodi
                pariatur ullam eum modi beatae porro, atque vitae delectus
                deleniti.
              </div>
            </div>
          )}
        </>
      );
    } else {
      result = "Brak danych do wyświetlenia";
    }
  }

  useEffect((): void => {
    dispatch(getPlatformData());
  }, []);

  useEffect((): void => {
    if (platformOfferData.value.length > 0) {
      setTimeout(() => {
        setRandomProduct(true);
        setRandomProductIndex(randomProductIndexFnc());
      }, 2500);
    }
  }, [platformOfferData.value])

  return (
    <div className="randomfoody-container">
      {modalOrderingWindow.viewModalWindow ? <ProductOrderingModal /> : ""}
      <Header withContent={false} />
      <main>
        <div className="main__random__container">
          {platformOfferData.loading ? <LoadingSpinner /> : result}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RandomFoodyPage;
