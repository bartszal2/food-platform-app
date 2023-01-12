import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { REMOVE_FILTER_ELEMENT, SET_FILTER_ELEMENT } from "../../../../../redux/slices/offerPageSlice";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { offerPageSliceType } from "../../../../../types/slices/offerPageSliceTypes";
import { dataType, platformDataSliceType } from "../../../../../types/slices/platformDataSliceTypes";

function TagFilterPanel() {
  const offerPageValues: offerPageSliceType = useAppSelector((state: RootState) => state.offerPage.value);
  const platformData: platformDataSliceType = useAppSelector((state: RootState) => state.platformData);
  const platformProductsTagsData: dataType = platformData.platformProductsTagsData;

  const dispatch: AppDispatch = useAppDispatch();

  const handlerFilterOffer = (element: any, filterName: string): void => {
    const elementValue = element.target.value;

    if (element.currentTarget.checked) {
      dispatch(SET_FILTER_ELEMENT({ value: elementValue, type: filterName }));
    } else {
      const elementTagIndex: number = offerPageValues.tags.indexOf(elementValue);
      dispatch(
        REMOVE_FILTER_ELEMENT({ index: elementTagIndex, type: filterName })
      );
    }
  };

  return (
    <div className="section-offer__content__filter-panel">
      <div className="section-offer__content__filter-panel-title">
        Kategoria{" "}
        {offerPageValues.tags.length > 0
          ? `| Wybrano: ${offerPageValues.tags.length}`
          : ""}
      </div>
      <div className="section-offer__content__filter-panel__elements__container">
        {platformProductsTagsData.value
          .slice()
          .sort((a: number, b: number) => (a > b ? 1 : -1))
          .map((e: any) => (
            <label key={e}>
              <input
                type="checkbox"
                value={e}
                onClick={(e) => {
                  handlerFilterOffer(e, "tags");
                }}
              />
              <div className="checkbox-custom"></div>
              {e}
            </label>
          ))}
      </div>
    </div>
  );
}

export default TagFilterPanel;
