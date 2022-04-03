import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getUniversities } from '../store/slices/universitiesSlice'

import SelectOption from '../components/SelectOption'

import classes from './Universities.module.css'


const Universities = () => {
  const [ country, setCountry ] = useState('')
  
  const dispatch = useDispatch()
  const universities = useSelector(state => state.universitiesState.universities)

  console.log(country);

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
        <article className={classes.uniItem}>
      <div>
        <h3>Lambton College</h3>
        <h4>Sarnia, CA</h4>
        <p>Website: <a href="https://www.lambtoncollege.ca">Lambton College</a></p>
      </div>
    </article>
      </div>
    </section>
  )
}

export default Universities