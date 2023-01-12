import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { SET_ACTIVE_PAGE } from "../../../redux/slices/offerPageSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { platformProductType } from "../../../types/platformProductType";
import { offerPageSliceType } from "../../../types/slices/offerPageSliceTypes";

function SectionContentPanel() {
  const offerPageValues: offerPageSliceType = useAppSelector((state: RootState) => state.offerPage.value);
  const dispatch: AppDispatch = useAppDispatch();

  const mainFilteredData: offerPageSliceType[] = offerPageValues.mainFilteredData;
  const data: offerPageSliceType[] = mainFilteredData;

  const getProductCards = (data:any) => {
    return data.map((e: platformProductType) => {
        return (
          <ProductCard
            key={e.id}
            largeSize={false}
            productId={e.id}
            productName={e.productName}
            productShortDescription={e.shortProductDescription}
            productLongDescription={e.longProductDescription}
            productTag={e.productTag}
            productPrice={e.price}
            productPrevPrice={e.prevPrice}
            productImage={e.productImage}
            productAvailable={e.productAvailable}
          />
        );
      });
  }

  const renderCard = getProductCards(data);

  const firstPage = () => {
    const newPage = 1;
    return newPage
  }

const previousPage = (data: any) => {
    const activePage = data.listViewData.activePage;
    let newPage = activePage - 1;

    newPage = newPage < 1 ? 1 : newPage;

    return newPage
  }

const nextPage = (data: any) => {
    const activePage = data.listViewData.activePage;
    const pagesDataLength = data.listViewData.dataSelectedSettings.length;
    const lastPage = data.listViewData.dataSelectedSettings[pagesDataLength - 1].page;
    
    let newPage = activePage + 1;

    newPage = newPage > lastPage ? newPage - 1 : newPage;

    return newPage
  }

const lastPage = (data:any) => {
    const pagesDataLength = data.listViewData.dataSelectedSettings.length;
    const newPage = data.listViewData.dataSelectedSettings[pagesDataLength - 1].page;

    return newPage
  }

  return (
    <div className="section-offer__content__products">
      <div
        className={
          data.length > 0
            ? "section-offer__content__products-container"
            : "section-offer__content__products-container up-item"
        }
      >
        {data.length > 0 ? (
          renderCard
        ) : (
          <div className="products-container__notification">
            <span className="material-symbols-outlined">info</span>
            Brak elementów do wyświetlenia
          </div>
        )}
      </div>
      <div className="section-offer__content__products-nav">
        {data.length > 0 ? (
          <>
            <div className="static-nav-container">
              <div
                className="section-offer__content__page static-nav"
                onClick={() => {
                  dispatch(SET_ACTIVE_PAGE(firstPage()));
                }}
              >
                Pierwsza
              </div>
              <div
                className="section-offer__content__page static-nav"
                onClick={() => {
                  dispatch(SET_ACTIVE_PAGE(previousPage(offerPageValues)));
                }}
              >
                Poprzednia
              </div>
            </div>
            {offerPageValues.listViewData.dataSelectedSettings.map((e: any) => (
              <div
                key={e.page}
                className={
                  e.page == offerPageValues.listViewData.activePage
                    ? "section-offer__content__page active-page"
                    : "section-offer__content__page"
                }
                onClick={() => dispatch(SET_ACTIVE_PAGE(e.page))}
              >
                {e.page}
              </div>
            ))}
            <div className="static-nav-container">
              <div
                className="section-offer__content__page static-nav"
                onClick={() => {
                  dispatch(SET_ACTIVE_PAGE(nextPage(offerPageValues)));
                }}
              >
                Następna
              </div>
              <div
                className="section-offer__content__page static-nav"
                onClick={() => {
                  dispatch(SET_ACTIVE_PAGE(lastPage(offerPageValues)));
                }}
              >
                Ostatnia
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SectionContentPanel;
