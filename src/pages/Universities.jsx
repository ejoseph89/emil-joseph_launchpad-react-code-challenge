import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import { getUniversities } from '../store/slices/universitiesSlice'

import SelectOption from '../components/SelectOption'

import classes from './Universities.module.css'
import UniversityItem from '../components/UniversityItem'


const Universities = () => {
  const [ country, setCountry ] = useState('')
  
  const dispatch = useDispatch()
  const universities = useSelector(state => state.universitiesState.universities)

  console.log(country);
  console.log(universities);

  useEffect(() => {
    dispatch(getUniversities(country))
  }, [dispatch, country])

  return (
    <section className={classes.uniContainer}>
      <div className={classes.header} >
        <h2>LOOK UP UNIVERSITIES</h2>
        <div className={classes.uniActions} >
          <SelectOption country={country} setCountry={setCountry} />
        </div>
      </div>
      <div className={classes.main}>
        {
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