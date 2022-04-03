import React from 'react'


import classes from './Home.module.css'

const Home = () => {



  return (
    <section className={classes.homeContainer}>
      <div className={classes.header}>
        <h2>POSTS</h2>
        <div className={classes.homeActions}>
          <form>
            <input type="text" placeholder='Search post by ID' />
            <button>Search</button>
          </form>
          <button>Add Post</button>
        </div>
      </div>
    </section>
  )
}

export default Home