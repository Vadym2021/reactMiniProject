import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import React from "react";

import {movieService} from "../services/movies.service";

const initialState = {
    movies: [],
    movie: [],
    page: 1,
    imgs: [],
    mgenres: [],
    smgenres: [],
    totalpages: 0,
    year: [],
}

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async ({data, page, year}, {rejectWithValue}) => {
        try {
            const movies = await movieService.getMovieByFilter(data, page, year);
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getAllMovies = createAsyncThunk(
    'movies/getMovies',
    async (_, {dispatch}) => {
        const movies = await movieService.getMovies();
        return movies
    }
)

export const getMovieImById = createAsyncThunk(
    'getMovieImById',
    async ({id}, {dispatch}) => {
        const movie = await movieService.getMovieImById(id);
        return movie
    }
)

export const getMovieImgs = createAsyncThunk(
    'getMovieImg',
    async ({id}, {dispatch}) => {
        const imgs = await movieService.getMovieImg(id);
        return imgs
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getMovies.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.movies = action.payload.results
            state.page = action.payload.page
            state.totalpages = action.payload.total_pages
            state.totalresults = action.payload.total_results
            state.mgenres = action.payload.genre_ids
        },
        [getMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getMovieImById.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getMovieImById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movie = action.payload
            state.smgenres = action.payload.genres

        },
        [getMovieImById.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getMovieImgs.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.imgs.push({
                link: [...action.payload.backdrops],
            })
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'resolved'
            // state.movies = action.payload
            state.movies = action.payload.results
            state.page = action.payload.page
            state.totalpages = action.payload.total_pages
            state.totalresults = action.payload.total_results
            state.mgenres = action.payload.genre_ids
        },
    }
});

export default movieSlice.reducer;