import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://countriesnow.space/api/v0.1/countries/'

// GET countries
export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const response = await fetch(`${baseURL}info?returns=none`)
      const formattedResponse = await response.json()
      const countries = await formattedResponse.data
      return countries
      
    } catch (error) {
      
    }
  } 
)

// GET countries iso2
export const getIsoCode = createAsyncThunk(
  'countries/getIsoCode',
  async (country) => {
    try {
      const response = await fetch(`${baseURL}/iso`, {
        method: 'POST',
        body: `{\n    "${country}": "${country}"\n}`,
        redirect: 'follow'
      })
      const formattedResponse = await response.json()
      const isoCodes = await formattedResponse.data
      console.log(isoCodes);
      return isoCodes
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
    },
    [getIsoCode.fulfilled]: (state, action) => {
      return {
        ...state,
        countries: action.payload,
      }
    }
  }
})

export default countrySlice.reducer


