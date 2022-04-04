import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../store/slices/countriesSlice'

import classes from './SelectOption.module.css'



const SelectOption = ({ country, setCountry, label }) => {
  

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countriesState.countries)
  
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])
  
  const changeHandler = (e) => {
    setCountry(e.target.value)
  }
  
  

  return (
    <form classes={classes.selectForm}>
      <label className={classes.selectLabel} htmlFor="">{ label }</label>
      <select className={classes.select} name="" id="" onChange={changeHandler}>
        {
          countries.map(country => {
            return (
              <option className={classes.option} key={country.name} >{ country.name }</option>
            )
          })
        }
      </select>
    </form>
  )
}

export default SelectOption