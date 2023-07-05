import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Value = {
    step: number
}

const initialState: Value = {
    step: 0
}

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        changeStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        },
    }
})

export const { changeStep } = stepSlice.actions

export default stepSlice.reducer