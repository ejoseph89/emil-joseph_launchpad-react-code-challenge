import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import { getUniversities } from '../store/slices/universitiesSlice'

import SelectOption from '../components/SelectOption'

import UniversityItem from '../components/UniversityItem'

import classes from './Universities.module.css'



const Universities = () => {
  const [ country, setCountry ] = useState('')
  
  const dispatch = useDispatch()
  const universities = useSelector(state => state.universitiesState.universities)


  useEffect(() => {
    dispatch(getUniversities(country))
  }, [dispatch, country])

  return (
    <section className={classes.uniContainer}>
      <div className={classes.header} >
        <h2>LOOK UP UNIVERSITIES</h2>
        <div className={classes.uniActions} >
          <SelectOption country={country} setCountry={setCountry} label="Search by Country" />
        </div>
      </div>
      <div className={classes.main}>
        {
          country === '' ? <div className={classes.instruction} ><h2>Select a country from the dropdown</h2></div> :
          universities.map(university => {
            return (
              <UniversityItem key={uuidv4()} university={university} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Universities