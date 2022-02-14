import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import React from "react";

import {movieService} from "../services/movies.service";
import {genreService} from "../services/genre.services"


const initialState = {
    genres: [],
    genresfilter: [{id: 16, name: 'Animation', status: false},
        {id: 37, name: 'Western', status: false},
        {id: 10752, name: 'War', status: false},
        {id: 53, name: 'Thriller', status: false},
        {id: 10770, name: 'TV Movie', status: false},
        {id: 878, name: 'Science Fiction', status: false},
        {id: 10749, name: 'Romance', status: false},
        {id: 9648, name: 'Mystery', status: false},
        {id: 10402, name: 'Music', status: false},
        {id: 27, name: 'Horror', status: false},
        {id: 36, name: 'History', status: false},
        {id: 14, name: 'Fantasy', status: false},
        {id: 10751, name: 'Family', status: false},
        {id: 18, name: 'Drama', status: false},
        {id: 99, name: 'Documentary', status: false},
        {id: 80, name: 'Crime', status: false},
        {id: 35, name: 'Comedy', status: false},
        {id: 12, name: 'Adventure', status: false},
        {id: 28, name: 'Action', status: false}],
    genresrequest: [],
    localfilter: [],
    localfiltertwo: [],
    genyear: [],
}

export const getGenres = createAsyncThunk(
    'genres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await genreService.getGenres();
            return genres

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: 'genres/getGenres',
    initialState,
    reducers: {
        getMovieImById: (state, action) => {
            state.movieImages = movieService.getMovieImById()
        },
        checkBoxChange: (state, action) => {
            state.genresrequest = [];
            state.localfiltertwo = [];
            const filter = state.genresfilter.find(filter => filter.id === action.payload.id);
            filter.status = !filter.status
            state.localfilter = state.genresfilter.filter(filter => filter.status === true);

            for (let element of state.localfilter) {
                for (let index in element) {
                    state.localfiltertwo.push(element[index])
                }
            }
            for (let i = 0; i < state.localfiltertwo.length; i += 3) {
                state.genresrequest.push(state.localfiltertwo[i])
            }
        },
        genresRequest: (state, action) => {
            const genresrequest = state.genresfilter.filter(genrefilter => genrefilter.status !== false);
            state.genresrequest = genresrequest
        }
    },
    extraReducers: {
        [getGenres.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getGenres.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.genres = action.payload.genres
        },
        [getGenres.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

export const {checkBoxChange} = genreSlice.actions;
export default genreSlice.reducer;