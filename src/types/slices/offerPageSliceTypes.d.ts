export interface offerPageSliceType {
    clientMinPrice: number | null,
    clientMaxPrice: number | null,
    listView: listViewTypes,
    searchValues: string,
    categories: string[],
    ingredients: string[],
    tags: string[],
    mainFilteredData: [],
    isCategoryParams: boolean | null,
    listViewData: {
      numbersProductOnPage: numbersProductOnThePageTypes,
      selectedNumberProductOnPage: selectedNumberProductOnThePageTypes,
      activePage: number,
      dataSelectedSettings: [] | {page: number, firstProductIndex: number, lastProductIndex: number}[]
    },
    clearSidebarFilter: boolean
}

export type listViewTypes =
  | "default"
  | "available"
  | "not-available"
  | "min-price"
  | "max-price";

export type numbersProductOnThePageTypes = [10, 20, 40, 60];

export type selectedNumberProductOnThePageTypes = 10 | 20 | 40 | 60;