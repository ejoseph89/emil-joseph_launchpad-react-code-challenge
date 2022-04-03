import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/slices/postsSlice'

import PostItem from '../components/PostItem'

import classes from './Home.module.css'




const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.postsState.posts)

  console.log(posts)
  

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


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
      <div className={classes.main}>
        {
          posts.map(post => (
            <PostItem
              key={post.id}
              post={post}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Home