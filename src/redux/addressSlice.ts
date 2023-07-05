import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Value = {
    addresses: {
    address1: string,
    address2: string,
    city: string,
    state: string,
    pincode: number,
    country: string,
},
}

const initialState: Value = {
    addresses: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: 0,
        country: '',
    }
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        insertDataToStep2: (state, action: PayloadAction<any>) => {
            state.addresses = action.payload
        },
    }
})

export const { insertDataToStep2 } = addressSlice.actions

export default addressSlice.reducer