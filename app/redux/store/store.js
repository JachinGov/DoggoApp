import { configureStore, createSlice } from '@reduxjs/toolkit';

export const breedsSlice = createSlice({
    name: 'breeds',
    initialState: {
        breeds: [],
        loading: true,
        error: null,
    },
    reducers: {
        setBreeds(state, action) {
            state.breeds = action.payload;
            state.loading = false;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setBreeds, setLoading, setError } = breedsSlice.actions;

export const store = configureStore({
    reducer: {
        breeds: breedsSlice.reducer,
    },
});

export default store;



