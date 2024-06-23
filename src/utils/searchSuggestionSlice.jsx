import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
    name: "search",
    initialState:{

    },
    reducers: {
        addSearchSuggestion:(state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
})

export const { addSearchSuggestion } = searchSuggestionSlice.actions;
export default searchSuggestionSlice.reducer;