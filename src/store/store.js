import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/postsSlice'

const store = configureStore({
  reducer: {
    postsState: postsReducer
  }
})

export default store