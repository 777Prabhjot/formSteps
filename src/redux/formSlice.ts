import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Value = {
    value: {name: string,
    email: string,
    phone: string},
}

const initialState: Value = {
    value: {
        name: '',
        email: '',
        phone: ''
    }
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        insertDataToStep1: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
    }
})

export const { insertDataToStep1 } = formSlice.actions

export default formSlice.reducer