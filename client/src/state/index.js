import { createSlice } from "@reduxjs/toolkit";

// Global State

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e"
}


//Function that changes mode from dark to light
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
             state.mode = state.mode === 'light' ? "dark" : "light"
        }
    }
})

export const { setMode } = globalSlice.actions

export default globalSlice.reducer