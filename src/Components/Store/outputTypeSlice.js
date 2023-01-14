import { createSlice } from '@reduxjs/toolkit'

export const outputTypeSlice = createSlice({
    name: 'output Type',
    initialState: {
        value: 'All',
    },
    reducers: {
        setOutputType: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setOutputType } = outputTypeSlice.actions

export default outputTypeSlice.reducer