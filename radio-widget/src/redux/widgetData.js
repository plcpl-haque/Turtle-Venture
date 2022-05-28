import { createSlice } from "@reduxjs/toolkit";

const widgetData = createSlice({
    name: 'fm',
    initialState: [],
    reducers: {
        fmData(state, action) {
            if (state.indexOf(action.payload) === -1) {
                state.push(action.payload)
            }
        },
    }
});

export const { fmData } = widgetData.actions;
export default widgetData.reducer;