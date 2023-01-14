import { createSlice } from '@reduxjs/toolkit'

export const modalShowSlice = createSlice({
  name: 'modaal show',
  initialState: {
    value: false,
    headingText: "",
    buttonText: "",
    modalType: "",
    index: null,
    id: null
  },
  reducers: {
    showModal: (state, { payload }) => {
      state.value = true;
      if (payload.type === 'default') {
        state.headingText = "Add TODO"
        state.buttonText = "Add Task"
        state.modalType = "default"
        state.index = payload.index
        state.id = payload.id
      }
      else if (payload.type === 'update') {
        state.headingText = "Update TODO"
        state.buttonText = "Update Task"
        state.modalType = "update"
        state.index = payload.index
        state.id = payload.id
      }
    },
    hideModal: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { showModal, hideModal } = modalShowSlice.actions

export default modalShowSlice.reducer