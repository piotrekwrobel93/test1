import { createAction, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IDesignerState {
    backgroundColor: string,
}

const initialState : IDesignerState = {
    backgroundColor: 'red'
}

const designerSlice = createSlice({
    name: 'designer',
    initialState,
    reducers: {
        changeBackground(state) {
            state.backgroundColor = '#333'
        },
        changeBackgroundWithAction(state, action: PayloadAction<string>) {
            console.log("changing background to ", action.payload);
            state.backgroundColor = action.payload
        }
    }
})


export const { changeBackground, changeBackgroundWithAction } = designerSlice.actions
export default designerSlice.reducer