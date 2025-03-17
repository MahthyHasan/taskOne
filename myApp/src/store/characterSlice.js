import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";
import axios from "axios";
import { startTransition } from "react";


// Here I qam Fetching Character Data

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async() => {
    const response = await axios.get('https://thronesapi.com/api/v2/characters');
    return response.data;
});

const characterSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        status: 'idle',
        error: null
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCharacters.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCharacters.fulfilled, (state, action) => {
            state.status = 'succeed';
            state.characters = action.payload;
        })
        .addCase(fetchCharacters.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default characterSlice.reducer;