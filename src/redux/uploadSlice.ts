import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Value = {
    values: any
}

const initialState: Value = {
    values: null
}

const uploadSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        addFiles: (state, action: PayloadAction<any>) => { 
            state.values = action.payload;
        },
    }
})



export const { addFiles } = uploadSlice.actions

export default uploadSlice.reducer