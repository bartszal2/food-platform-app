import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { REMOVE_FILTER_ELEMENT, SET_FILTER_ELEMENT } from "../../../../../redux/slices/offerPageSlice";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { offerPageSliceType } from "../../../../../types/slices/offerPageSliceTypes";
import { dataType, platformDataSliceType } from "../../../../../types/slices/platformDataSliceTypes";

function CategoryFilterPanel(props: { categoryname: string | null }) {
  const offerPageValues: offerPageSliceType = useAppSelector((state: RootState) => state.offerPage.value);
  const platformData: platformDataSliceType = useAppSelector((state: RootState) => state.platformData);
  const platformCategoriesData: dataType = platformData.platformCategoriesData;

  const dispatch: AppDispatch = useAppDispatch();

  const isSelectedCategoryFromParams = (inputCategoryValue: string, categoryNameParam: string | null, categoriesData: any, offerPageData: any) => {
    if (categoryNameParam != null) {       
      const [categoryElement] = categoriesData.value.filter((e:any) => e.combinedName === categoryNameParam);
  
        if (categoryElement != undefined) {
          if (categoryElement.categoryName == inputCategoryValue && offerPageData.isCategoryParams != false) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
  
    } else {
      return false;
    }
    }

  const handlerFilterOffer = (element: any, filterName: string): void => {
    const elementValue = element.target.value;

    if (element.currentTarget.checked) {
      dispatch(SET_FILTER_ELEMENT({ value: elementValue, type: filterName }));
    } else {
      const elementCategoryIndex = offerPageValues.categories.indexOf(
        elementValue
      );
      dispatch(
        REMOVE_FILTER_ELEMENT({
          index: elementCategoryIndex,
          type: filterName,
        })
      );
    }
  };

  return (
    <div className="section-offer__content__filter-panel">
      <div className="section-offer__content__filter-panel-title">
        Rodzaj{" "}
        {offerPageValues.categories.length > 0
          ? `| Wybrano: ${offerPageValues.categories.length}`
          : ""}
      </div>
      <div className="section-offer__content__filter-panel__elements__container">
        {platformCategoriesData.value
          .slice()
          .sort((a: { categoryName: number }, b: { categoryName: number }) =>
            a.categoryName > b.categoryName ? 1 : -1
          )
          .map((e: any) => (
            <label key={e.categoryName}>
              <input
                type="checkbox"
                value={e.categoryName}
                defaultChecked={isSelectedCategoryFromParams(
                  e.categoryName,
                  props.categoryname,
                  platformCategoriesData,
                  offerPageValues
                )}
                onClick={(e) => {
                  handlerFilterOffer(e, "categories");
                }}
              />
              <div className="checkbox-custom"></div>
              {e.categoryName}
            </label>
          ))}
      </div>
    </div>
  );
}

export default CategoryFilterPanel;
