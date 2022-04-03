import React from 'react'

import { Link } from 'react-router-dom'
import { FaCode } from 'react-icons/fa'

import classes from './Header.module.css'


const Header = () => {



  return (
    <div className={classes.navContainer}>
      <nav>
        <div >
          <Link to='/' className={classes.logo}><FaCode /></Link>
        </div>
        <div className={classes.linkContainer}>
          <Link className={classes.links} to='/'> <p>Home</p> </Link>
          <Link className={classes.links} to='/universities'> <p>Universities</p> </Link>
          <Link className={classes.links} to='/postal-lookup'> <p>Postal Lookup</p> </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header