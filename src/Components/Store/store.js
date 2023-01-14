import { configureStore } from '@reduxjs/toolkit'
import modalShowSlice from './modalShowSlice'
import outputDataSlice from './outputDataSlice'
import outputTypeSlice from './outputTypeSlice'

export default configureStore({
    reducer: {
        modalHandler: modalShowSlice,
        outputDataHandler: outputDataSlice,
        outputTypeHandler: outputTypeSlice,
    },
})