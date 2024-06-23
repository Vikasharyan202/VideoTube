import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import searchSuggestionSlice from "./searchSuggestionSlice";

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        search: searchSuggestionSlice,
    }
})

export default store;