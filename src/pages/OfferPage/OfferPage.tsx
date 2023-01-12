import React, { useEffect } from "react";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "../../scss/pages/OfferPage/OfferPage.css";
import ProductOrderingModal from "../../layouts/OrderingModalWindow/OrderingModalWindow";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import SectionHeader from "./components/SectionHeader";
import SectionFilterPanel from "./components/SectionFilterPanel/SectionFilterPanel";
import SectionContentPanel from "./components/SectionContentPanel";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getPlatformData, getProductsCategoriesData, getProductsIngredientsData, getProductsTagsData } from "../../redux/slices/platformDataSlice";
import { modalOrderingWindowSliceTypes } from "../../types/slices/modalOrderingWindowSliceTypes";
import { dataType, platformDataSliceType } from "../../types/slices/platformDataSliceTypes";
import { AppDispatch, RootState } from "../../redux/store";

function OfferPage() {
  const modalOrderingWindow: modalOrderingWindowSliceTypes = useAppSelector((state: RootState) => state.modalOrderingWindow.value);
  const platformData: platformDataSliceType = useAppSelector((state: RootState) => state.platformData);
  const platformOfferData: dataType = platformData.platformOfferData;
  const platformCategoriesData: dataType = platformData.platformCategoriesData;
  const platformIngredientsData: dataType = platformData.platformProductsIngredientsData;
  const platformProductsTagsData: dataType = platformData.platformProductsTagsData;

  const dispatch: AppDispatch = useAppDispatch();

  useEffect((): void => {
    dispatch(getPlatformData());
    dispatch(getProductsCategoriesData());
    dispatch(getProductsIngredientsData());
    dispatch(getProductsTagsData());
  }, []);

  return (
    <div className="offer-container">
      {modalOrderingWindow.viewModalWindow ? <ProductOrderingModal /> : ""}
      <Header withContent={false} />
      <section className="section-offer">
        {platformOfferData.loading ||
        platformCategoriesData.loading ||
        platformIngredientsData.loading ||
        platformProductsTagsData.loading ? (
          <LoadingSpinner />
        ) : platformOfferData.error != undefined ||
          platformCategoriesData.error != undefined ||
          platformIngredientsData.error != undefined ||
          platformProductsTagsData.error != undefined ? (
          "Error"
        ) : platformOfferData.value.length > 0 ? (
          <>
            <div className="section-offer__header">
              <div className="section-offer__header__title">Oferta</div>
              <div className="section-offer__header__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, vitae! Mollitia nemo nobis, qui optio inventore
                temporibus fuga quae! Illo, placeat natus iusto, accusamus
                tempore nisi consequatur nostrum nulla id officia laborum libero
                praesentium maiores labore quasi odio neque, unde vitae.
                Expedita animi quisquam quis ad quidem laborum, explicabo vel,
                natus consequatur sit necessitatibus praesentium dolore ipsum a
                deserunt dolorum. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Inventore omnis quia perspiciatis repudiandae
                iusto, quam iste suscipit debitis nam. Dolor!
              </div>
            </div>
            <div className="section-offer__content">
              <SectionHeader />
              <SectionFilterPanel />
              <SectionContentPanel />
            </div>
          </>
        ) : (
          "Brak danych do wyświetlenia"
        )}
      </section>
      <Footer />
    </div>
  );
}

export default OfferPage;
