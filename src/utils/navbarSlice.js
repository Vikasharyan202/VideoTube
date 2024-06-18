import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbar',
    initialState:{
        isNavbarOpen: false,
    },
    reducers:{
        toggleSidebar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen
        },
    },
})

export const {toggleSidebar} = navbarSlice.actions;
export default navbarSlice.reducer;