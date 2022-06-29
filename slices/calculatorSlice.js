import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: '',
    result: 0,
    displayResult: false,
    fourLastResults: [NaN, NaN, NaN, NaN],
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        updateInput: (state, action) => {
            state.input += action.payload;
            state.displayResult = false;
        },
        updateResult: (state) => {
            state.result = eval(state.input);
            state.input = '';
            state.displayResult = true;
            state.fourLastResults.shift();
            state.fourLastResults.push(state.result);
        },
        clearInput: (state) => {
            state.input = '';
            state.displayResult = false;
        }
    }
});

export const { updateInput, updateResult, clearInput } = calculatorSlice.actions;

export default calculatorSlice.reducer;