import React, { useEffect } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { platformCategories } from "../../../../data/platformCategories";
import { platformOfferData } from "../../../../data/platformOfferData";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { SET_MAIN_FILTERED_DATA, SET_DATA_SELECTED_SETTINGS, SET_ACTIVE_PAGE, RESET_ACTIVE_PAGE, RESET_DATA_SELECTED, RESET_FILTER_ELEMENTS, SET_SEARCH_VALUE, SET_FILTER_ELEMENT, SET_IS_CATEGORY_PARAMS } from "../../../../redux/slices/offerPageSlice";
import { AppDispatch, RootState } from "../../../../redux/store";
import { listViewTypes, offerPageSliceType } from "../../../../types/slices/offerPageSliceTypes";
import CategoryFilterPanel from "./components/CategoryFilterPanel";
import IngredientFilterPanel from "./components/IngredientFilterPanel";
import PriceFilterPanel from "./components/PriceFilterPanel";
import TagFilterPanel from "./components/TagFilterPanel";

function SectionFilterPanel() {
  const { searchvalue } = useParams();
  const { categoryname } = useParams();

  const navigate: NavigateFunction = useNavigate();

  const dispatch: AppDispatch = useAppDispatch();
  const offerPageValues: offerPageSliceType = useAppSelector((state: RootState) => state.offerPage.value);
  const offerPlatformData = platformOfferData;

  const filterListViewType: listViewTypes = offerPageValues.listView;
  const filterSearchValues: string = offerPageValues.searchValues;
  const filterCategories: string[] = offerPageValues.categories;
  const filterIngredients: string[] = offerPageValues.ingredients;
  const filterTags: string[] = offerPageValues.tags;

  const filteringByCategoryValues = (filterCategories: any, dataToFilter: any) => {
    if (filterCategories.length > 0) {
        let filteredData = [];

        for (let i = 0; i < dataToFilter.length; i++) {
            if (filterCategories.some((e: any) => dataToFilter[i].category.categoryName.includes(e))) {
                filteredData.push(dataToFilter[i]);
            } else {}
        }
        return filteredData;
    } else {
        return dataToFilter;
    } 
  }

const filteringByIngredientsValues = (filterIngredients: any, dataToFilter: any) => {
    if (filterIngredients.length > 0) {
        let filteredData = [];

        for (let i = 0; i < dataToFilter.length; i++) {
            if (filterIngredients.some((e: any) => dataToFilter[i].ingredients.includes(e))) {
              filteredData.push(dataToFilter[i]);
            } else {}
        }

        return filteredData;

    } else {
        return dataToFilter;
    } 
  }


const filteringByTagsValues = (filterTags: any, dataToFilter: any) => {
    if (filterTags.length > 0) {
        let filteredData = [];

        for (let i = 0; i < dataToFilter.length; i++) {
            if (filterTags.some((e: any) => dataToFilter[i].productTag.includes(e))) {
              filteredData.push(dataToFilter[i]);
            } else {}
        }

        return filteredData;

    } else {
        return dataToFilter;
    }  
  }

const filteringByPriceValues = (minClientPrice: any, maxClientPrice: any, dataToFilter: any) => {

    let filteredData = [];

    if (minClientPrice != null && maxClientPrice != null) {
      for (let i = 0; i < dataToFilter.length; i++) {

        if (dataToFilter[i].price >= minClientPrice && dataToFilter[i].price <= maxClientPrice) {
          filteredData.push(dataToFilter[i]);
        } else {}
      }

      return filteredData;

    } else if (minClientPrice != null && maxClientPrice === null) {
      for (let i = 0; i < dataToFilter.length; i++) {
        if (dataToFilter[i].price >= minClientPrice) {
          filteredData.push(dataToFilter[i]);
        } else {}
      }

      return filteredData;

    } else if (minClientPrice === null && maxClientPrice != null) {
      for (let i = 0; i < dataToFilter.length; i++) {
        if (dataToFilter[i].price <= maxClientPrice) {
          filteredData.push(dataToFilter[i]);
        } else {}
      }
      return filteredData;
      
    } else {
      filteredData = dataToFilter;
      return filteredData;
    }
  }

const filteringListView = (filterListViewType: any, dataToFilter: any) => {
    let filteredData = [];

    switch (filterListViewType) {
      case "available":
        filteredData = dataToFilter.filter((e: any) => e.productAvailable == true).sort((a: { productTag: string | any[]; }, b: { productTag: string | any[]; }) => b.productTag.length - a.productTag.length);
        break;

      case "not-available":
        filteredData = dataToFilter.filter((e: any) => e.productAvailable == false).sort((a: { productTag: string | any[]; }, b: { productTag: string | any[]; }) => b.productTag.length - a.productTag.length);
        break;

      case "min-price":
        filteredData = dataToFilter.slice().sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
        break;

      case "max-price":
        filteredData = dataToFilter.slice().sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
        break;

      default:
        filteredData = dataToFilter.slice().sort((a: { productTag: string | any[]; }, b: { productTag: string | any[]; }) => b.productTag.length - a.productTag.length);
    }

    return filteredData;
}

const filteringBySearchValue = (filterSearchValues: any, dataToFilter: any) => {
  if (filterSearchValues.length > 0) {
    let filteredData = dataToFilter.filter((e: any) => e.productName.toUpperCase().includes(filterSearchValues.toUpperCase()));
    return filteredData;

  } else {
    return dataToFilter;
  }  
}

  const filterData = (data: any, filterCategories: any, filterIngredients: any, filterTags: any, offerPageValues:any, filterListViewType: any, filterSearchValues: any) => {

    let filteredData = [];

    filteredData = filteringByCategoryValues(filterCategories, data)
    filteredData = filteringByIngredientsValues(filterIngredients, filteredData)
    filteredData = filteringByTagsValues(filterTags, filteredData)
    filteredData = filteringByCategoryValues(filterCategories, filteredData)
    filteredData = filteringByPriceValues(offerPageValues.clientMinPrice, offerPageValues.clientMaxPrice, filteredData)
    filteredData = filteringListView(filterListViewType, filteredData)
    filteredData = filteringBySearchValue(filterSearchValues, filteredData)
    return filteredData
  }
  

  const filteringList = (): void => {
    const filteredData = renderWithQuantity(
      filterData(
        offerPlatformData,
        filterCategories,
        filterIngredients,
        filterTags,
        offerPageValues,
        filterListViewType,
        filterSearchValues
      )
    );

    dispatch(SET_MAIN_FILTERED_DATA(filteredData));
  };

  // Information about the selected page from all available pages
const getInformationAboutPage = (pagesForProducts: any, pageNumber: number, filteredData: any) => {
  let result = [];

  const [selectedPage] = [pagesForProducts[pageNumber - 1]];
  const firstProductIndex = selectedPage.firstProductIndex;
  const lastProductIndex = selectedPage.lastProductIndex;

  const maxIndexInData = filteredData.length - 1;

  for (let i = firstProductIndex; i <= lastProductIndex; i++) {
    if (i <= maxIndexInData) {
      result.push(filteredData[i]);
    } else {}
  }

  return result
}

  // Information about the pages and indexes of elements are written to state from offerPageSlice
const setPagesForProducts = (offerPageValues:any, filteredData: any) => {
  const numbersProductOnPage = offerPageValues.listViewData.selectedNumberProductOnPage;

  const numberOfPages = Math.ceil(filteredData.length/numbersProductOnPage);
  let dataFromThePages = [];
  let count = 0; 
    
  for (let i = 1; i <= numberOfPages; i++) {
      dataFromThePages.push({
          page: i,
          firstProductIndex: count,
          lastProductIndex: numbersProductOnPage * i - 1,
      });

  count = numbersProductOnPage * i;
  }

  return dataFromThePages
}


const checkCategoryParamWithData = (categoryName: string) => {
  const elementValue = platformCategories.filter((e:any) => e.combinedName == categoryName);

  if (elementValue.length > 0) {
    return elementValue;
  } else {
    return null;
  }
}
  

  const renderWithQuantity = (filteredData: any) => {
    // Information about the pages and indexes of elements are written to state from offerPageSlice

    if (filterData.length > 0) {
      const pageNumber = offerPageValues.listViewData.activePage;
      const dataFromThePages = setPagesForProducts(
        offerPageValues,
        filteredData
      );

      dispatch(SET_DATA_SELECTED_SETTINGS(dataFromThePages));

      // Information about the selected page from all available pages

      let newFilteredData = [];

      if (dataFromThePages.length > 1) {
        newFilteredData = getInformationAboutPage(
          dataFromThePages,
          pageNumber,
          filteredData
        );
      } else {
        dispatch(SET_ACTIVE_PAGE(1));
        newFilteredData = filteredData;
      }

      return newFilteredData;
    } else {
      return filteredData;
    }
  };

  useEffect((): void => {
    dispatch(RESET_ACTIVE_PAGE());
    dispatch(RESET_DATA_SELECTED());
    dispatch(RESET_FILTER_ELEMENTS());

    if (searchvalue != undefined) {
      const searchElementValue = searchvalue.replaceAll("_", " ");

      dispatch(SET_SEARCH_VALUE(searchElementValue));
    } else {
    }

    if (categoryname != undefined) {
      const elementValue = checkCategoryParamWithData(categoryname);

      if (elementValue == null) {
        navigate("/error");
      } else {
        const [element] = elementValue;
        dispatch(
          SET_FILTER_ELEMENT({
            value: element.categoryName,
            type: "categories",
          })
        );
        dispatch(SET_IS_CATEGORY_PARAMS("true"));
      }
    } else {
    }
  }, []);

  useEffect((): void => {
    filteringList();
  }, [
    offerPageValues.listView,
    offerPageValues.searchValues,
    offerPageValues.listViewData.selectedNumberProductOnPage,
    offerPageValues.listViewData.activePage,
    offerPageValues.listViewData.selectedNumberProductOnPage,
    offerPageValues.clearSidebarFilter,
    offerPageValues.isCategoryParams,
  ]);

  return (
    <div className="section-offer__content__panel">
      <form
        onSubmit={(e) => {
          e.preventDefault(), filteringList();
        }}
      >
        <CategoryFilterPanel
          categoryname={categoryname != undefined ? categoryname : null}
        />
        <IngredientFilterPanel />
        <PriceFilterPanel />
        <TagFilterPanel />
        <div className="section-offer__content__filter-panel-buttons">
          <input
            type="reset"
            value="Wyczyść filtry"
            onClick={() => {
              dispatch(RESET_FILTER_ELEMENTS()),
                dispatch(SET_IS_CATEGORY_PARAMS("false")),
                filteringList();
            }}
          />
          <input type="submit" value="Filtruj" />
        </div>
      </form>
    </div>
  );
}

export default SectionFilterPanel;
