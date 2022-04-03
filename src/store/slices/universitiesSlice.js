import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://universities.hipolabs.com/search?country='

// GET universities
export const getUniversities = createAsyncThunk(
  'universities/getUniversities',
  async (country) => {
    try {
      const response = await fetch(`${baseURL}${country}`)
      const data = await response.json()
      return data
      
    } catch (error) {
      console.log(error)
    }
  } 
)

const initialUniversitiesState = {
  universities: [],
  getUniversitiesStatus: '',
  getUniversitiesError: ''
}

const universitySlice = createSlice({
  name: 'countries',
  initialState: initialUniversitiesState,
  reducers: {},
  extraReducers: {
    [getUniversities.fulfilled]: (state, action) => {
      return {
        ...state,
        universities: action.payload,
        getUniversitiesStatus: 'success',
        getUniversitiesError: ''
      }
    }
  }
})

export default universitySlice.reducer