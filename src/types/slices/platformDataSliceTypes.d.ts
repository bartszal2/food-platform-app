export interface platformDataSliceType {
    platformOfferData: dataType,
    platformCategoriesData: dataType,
    platformProductsIngredientsData: dataType,
    platformProductsTagsData: dataType,
    platformSpecialOfferData: dataType
}

export interface dataType {
    value: any,
    loading: boolean | null,
    error: any
}