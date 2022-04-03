import React from 'react'


import classes from './UniversityItem.module.css'

const UniversityItem = ({ university }) => {



  return (
    <article className={classes.uniItem}>
      <div>
        <h3>{ university.name }</h3>
        <h4>{ university.country }</h4>
        <p>Website: <a href={university.web_pages[0]}>{ university.name }</a></p>
      </div>
    </article>
  )
}

export default UniversityItem