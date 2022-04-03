import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://countriesnow.space/api/v0.1/countries/info?returns=none'

// GET countries
export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const response = await fetch(`${baseURL}`)
      const data = await response.json()
      const countries = await data.data
      return countries
      
    } catch (error) {
      
    }
  } 
)

const initialCountriesState = {
  countries: [],
  getCountriesStatus: '',
  getCountriesError: ''
}

const countrySlice = createSlice({
  name: 'countries',
  initialState: initialCountriesState,
  reducers: {},
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => {
      return {
        ...state,
        countries: [...action.payload],
        getCountriesStatus: 'success',
        getCountriesError: ''
      }
    }
  }
})

export default countrySlice.reducer