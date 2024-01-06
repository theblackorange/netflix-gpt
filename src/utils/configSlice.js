import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        language: 'en'
    },
    reducers: {
        preferredLangauge: (state, action) => {
            state.language = action.payload
        }
    }
})

export const {preferredLangauge} = configSlice.actions
export default configSlice.reducer