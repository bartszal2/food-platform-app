import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformCategories } from '../../data/platformCategories';
import { platformOfferData } from '../../data/platformOfferData';
import { platformProductsIngredients } from '../../data/platformProductsIngredients';
import { platformProductsTags } from '../../data/platformProductsTags';
import { platformSpecialOfferData } from '../../data/platformSpecialOfferData';
import { platformDataSliceType } from '../../types/slices/platformDataSliceTypes';

export const getPlatformData = createAsyncThunk(
    'offerData/getPlatformData',
    async () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(platformOfferData)
            }, 1250)
        })

        return promise;
    }
)

export const getProductsCategoriesData = createAsyncThunk(
    'offerData/getCategoriesData',
    async () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(platformCategories)
            }, 1250)
        })

        return promise;
    }
)

export const getProductsIngredientsData = createAsyncThunk(
    'offerData/getProductsIngredientsData',
    async () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(platformProductsIngredients)
            }, 1250)
        })

        return promise;
    }
)

export const getProductsTagsData = createAsyncThunk(
    'offerData/getProductsTagsData',
    async () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(platformProductsTags)
            }, 1250)
        })

        return promise;
    }
)

export const getPlatformSpecialOfferData = createAsyncThunk(
    'offerData/getPlatformSpecialOfferData',
    async () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(platformSpecialOfferData)
            }, 1250)
        })

        return promise;
    }
)

const initialState: platformDataSliceType = {
    platformOfferData: {
        value: [],
        loading: true,
        error: null
    },
    platformCategoriesData: {
        value: [],
        loading: true,
        error: null
    },
    platformProductsIngredientsData: {
        value: [],
        loading: true,
        error: null
    },
    platformProductsTagsData: {
        value: [],
        loading: true,
        error: null
    },
    platformSpecialOfferData: {
        value: {},
        loading: true,
        error: null
    },
}

export const platformDataSlice = createSlice({
    name: 'offerData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPlatformData.pending, (state) => {
            state.platformOfferData.loading = true
        }),
        builder.addCase(getPlatformData.fulfilled, (state, action) => {
            state.platformOfferData.value = action.payload
            state.platformOfferData.loading = false
        }),
        builder.addCase(getPlatformData.rejected, (state, action) => {
            state.platformOfferData.error = 'Error'
            state.platformOfferData.loading = false
        }),


        builder.addCase(getProductsCategoriesData.pending, (state) => {
            state.platformCategoriesData.loading = true
        }),
        builder.addCase(getProductsCategoriesData.fulfilled, (state, action) => {
            state.platformCategoriesData.value = action.payload
            state.platformCategoriesData.loading = false
        }),
        builder.addCase(getProductsCategoriesData.rejected, (state, action) => {
            state.platformCategoriesData.error = 'Error'
            state.platformCategoriesData.loading = false
        }),


        builder.addCase(getProductsIngredientsData.pending, (state) => {
            state.platformProductsIngredientsData.loading = true
        }),
        builder.addCase(getProductsIngredientsData.fulfilled, (state, action) => {
            state.platformProductsIngredientsData.value = action.payload
            state.platformProductsIngredientsData.loading = false
        }),
        builder.addCase(getProductsIngredientsData.rejected, (state, action) => {
            state.platformProductsIngredientsData.error = 'Error'
            state.platformProductsIngredientsData.loading = false
        }),


        builder.addCase(getProductsTagsData.pending, (state) => {
            state.platformProductsTagsData.loading = true
        }),
        builder.addCase(getProductsTagsData.fulfilled, (state, action) => {
            state.platformProductsTagsData.value = action.payload
            state.platformProductsTagsData.loading = false
        }),
        builder.addCase(getProductsTagsData.rejected, (state, action) => {
            state.platformProductsTagsData.error = 'Error'
            state.platformProductsTagsData.loading = false
        }),


        builder.addCase(getPlatformSpecialOfferData.pending, (state) => {
            state.platformSpecialOfferData.loading = true
        }),
        builder.addCase(getPlatformSpecialOfferData.fulfilled, (state, action) => {
            state.platformSpecialOfferData.value = action.payload
            state.platformSpecialOfferData.loading = false
        }),
        builder.addCase(getPlatformSpecialOfferData.rejected, (state, action) => {
            state.platformSpecialOfferData.error = 'Error'
            state.platformSpecialOfferData.loading = false
        })
        
    }
})

export const {} = platformDataSlice.actions;

export const offerData = (state: { offerData: platformDataSliceType}) => state.offerData;

export default platformDataSlice.reducer;