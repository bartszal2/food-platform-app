import { createSlice } from '@reduxjs/toolkit';
import { productsOrderingPageSliceType } from '../../types/slices/productsOrderingPageSliceType';

const initialState: {value: productsOrderingPageSliceType} = {
    value: {
    clientName: '',
    phoneNumber: '',
    addressEmail: '',
    address: '',
    zipCode: '',
    city: '',
    additionalInformation: '',
    typeOfDelivery: '',
    dateOfScheduledDeliveryHome: '',
    timeOfScheduledDeliveryHome: '',
    dateOfScheduledDeliveryPickup: '',
    timeOfScheduledDeliveryPickup: '',
    typeOfPayment: '',
    agreement: false
    }
}

export const productsOrderingPageSlice = createSlice({
    name: 'productsOrderingPage',
    initialState,
    reducers: {
        FILL_UP_FORM: (state, action: {payload: {value: string, name: string}, type: string}) => {
            switch(action.payload.name) {
                case 'clientName':
                    state.value.clientName = action.payload.value
                    break;

                case 'phoneNumber':
                    state.value.phoneNumber = action.payload.value
                    break;

                case 'addressEmail':
                    state.value.addressEmail = action.payload.value
                    break;

                case 'address':
                    state.value.address = action.payload.value
                    break;

                case 'zipCode':
                    state.value.zipCode = action.payload.value
                    break;

                case 'city':
                    state.value.city = action.payload.value
                    break;

                case 'additionalInformation':
                    state.value.additionalInformation = action.payload.value
                    break;

                case 'typeOfDelivery':
                    state.value.typeOfDelivery = action.payload.value
                    break;

                case 'dateOfScheduledDeliveryHome':
                    state.value.dateOfScheduledDeliveryHome = action.payload.value
                    break;

                case 'timeOfScheduledDeliveryHome':
                    state.value.timeOfScheduledDeliveryHome = action.payload.value
                    break;

                case 'dateOfScheduledDeliveryPickup':
                    state.value.dateOfScheduledDeliveryPickup = action.payload.value
                    break;

                case 'timeOfScheduledDeliveryPickup':
                    state.value.timeOfScheduledDeliveryPickup = action.payload.value
                    break;

                case 'typeOfPayment':
                    state.value.typeOfPayment = action.payload.value
                    break;

                case 'agreement':
                    let value;

                    if (action.payload.value == 'true') {
                        value = true;
                    } else {
                        value = false;
                    }

                    state.value.agreement = value;
                    break;
                    
                case 'reset-values':
                    state.value.clientName = '',
                    state.value.phoneNumber = '',
                    state.value.addressEmail = '',
                    state.value.address = '',
                    state.value.zipCode = '',
                    state.value.city = '',
                    state.value.additionalInformation = '',
                    state.value.typeOfDelivery = '',
                    state.value.dateOfScheduledDeliveryHome = '',
                    state.value.timeOfScheduledDeliveryHome = '',
                    state.value.dateOfScheduledDeliveryPickup = '',
                    state.value.timeOfScheduledDeliveryPickup = '',
                    state.value.typeOfPayment = '',
                    state.value.agreement = false
                    break;

                default:
                    return state
            }
        }
    }
})

export const {FILL_UP_FORM} = productsOrderingPageSlice.actions;

export const productsOrderingPage = (state: { productsOrderingPage: { value: productsOrderingPageSliceType; }; }) => state.productsOrderingPage.value;

export default productsOrderingPageSlice.reducer;