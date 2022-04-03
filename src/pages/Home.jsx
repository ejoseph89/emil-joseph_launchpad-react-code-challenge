import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/slices/postsSlice'

import PostItem from '../components/PostItem'
import AddPostForm from '../components/modals/AddPostForm'

import classes from './Home.module.css'




const Home = () => {
  const [ modalVisible, setModalVisible ] = useState(false)

  const dispatch = useDispatch()
  const posts = useSelector(state => state.postsState.posts)

  console.log(posts)
  

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  

  return (
    <section className={classes.homeContainer}>
      {
        modalVisible && <AddPostForm setModalVisible={setModalVisible} />
      }
      <div className={classes.header}>
        <h2>POSTS</h2>
        <div className={classes.homeActions}>
          <form>
            <input type="text" placeholder='Search post by ID' />
            <button className={classes.searchBtn} >Search</button>
          </form>
          <button className={classes.addPostBtn} onClick={() => setModalVisible(true)}>Add</button>
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