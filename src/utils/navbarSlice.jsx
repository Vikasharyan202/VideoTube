import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbar',
    initialState:{
        isNavbarOpen: false,
        isSidebarOpen: true,
    },
    reducers:{
        toggleSidebar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen
        },
        closedSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    },
})

export const {toggleSidebar, closedSidebar} = navbarSlice.actions;
export default navbarSlice.reducer;