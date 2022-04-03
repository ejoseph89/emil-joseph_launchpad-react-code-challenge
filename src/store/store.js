import { configureStore } from "@reduxjs/toolkit";

import postsReducer from './slices/postsSlice'
import countriesReducer from './slices/countriesSlice'
import universitiesReducer from './slices/universitiesSlice'

const store = configureStore({
  reducer: {
    postsState: postsReducer,
    countriesState: countriesReducer,
    universitiesState: universitiesReducer,
  }
})

export default store