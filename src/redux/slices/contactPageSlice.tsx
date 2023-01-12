import { createSlice } from '@reduxjs/toolkit';
import { contactPageSliceType } from '../../types/slices/contactPageSliceType';

const initialState: {value: contactPageSliceType} = {
    value: {
        clientName: '',
        typeOfMessage: '',
        orderNumber: '',
        textMessage: '',
        sendMessage: false
    }
}

export const contactPageSlice = createSlice({
    name: 'contactPage',
    initialState,
    reducers: {       
        SET_CONTACT_MESSAGE_VALUE: (state, action) => {
            switch(action.payload.type) {
                case 'client-name':
                    state.value.clientName = action.payload.value;
                    break;

                case 'message-type':
                    state.value.typeOfMessage = action.payload.value;
                    break;

                case 'order-number':
                    state.value.orderNumber = action.payload.value;
                    break;

                case 'message-text':
                    state.value.textMessage = action.payload.value;
                    break;

                default:
                    state.value;
            }
        },
        SEND_CONTACT_MESSAGE: (state) => {
            state.value.sendMessage = true;
        },
        RESET_CONTACT_MESSAGE_VALUES: (state) => {
            state.value.clientName = '';
            state.value.typeOfMessage = '';
            state.value.orderNumber = '';
            state.value.textMessage = '';
            state.value.sendMessage = false;
        }
    }
})

export const {SET_CONTACT_MESSAGE_VALUE, SEND_CONTACT_MESSAGE,RESET_CONTACT_MESSAGE_VALUES} = contactPageSlice.actions;

export const contactPage = (state: {contactPage: {value: contactPageSliceType}}) => state.contactPage.value;

export default contactPageSlice.reducer;