import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getIsoCode } from '../store/slices/countriesSlice'

import SelectOption from '../components/SelectOption'


import classes from './PostalLookup.module.css'




const PostalLookup = () => {
  const [ country, setCountry ] = useState(null)

  const dispatch = useDispatch()
  const iso = useSelector(state => state.countriesState.countries)

  console.log(country);

  

  return (
    <section className={classes.postalContainer}>
      <div className={classes.header}>
        <h2>Look up area details by zip code</h2>
        <div className={classes.postalSelect}>
          <SelectOption label="Select Country" country={country} setCountry={setCountry} />
        </div>
      </div>
    </section>
  )
}

export default PostalLookup