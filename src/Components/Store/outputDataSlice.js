import { createSlice } from '@reduxjs/toolkit'

const obj = JSON.parse(localStorage.getItem("objAr"));
// console.log(obj);
let initial;
if (obj) {
    initial = obj;
}
else initial = [];



console.log(typeof initial);

export const outputDataSlice = createSlice({
    name: 'output data',
    initialState: initial,
    // initialState: obj ? obj:[],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("objAr", JSON.stringify(state));
        },
        removeItem: (state, action) => {
            state.splice(action.payload, 1);
            localStorage.setItem("objAr", JSON.stringify(state));
        },
        editItem: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload.id);
            state[index] = payload.obj
            localStorage.setItem("objAr", JSON.stringify(state));
        },
        editType: (state, { payload }) => {
            state[payload.index].type = payload.type;
            // localStorage.setItem("obj", state);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, editItem, editType } = outputDataSlice.actions

export default outputDataSlice.reducer