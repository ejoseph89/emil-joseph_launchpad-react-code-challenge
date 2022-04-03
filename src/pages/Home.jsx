import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getPost } from '../store/slices/postsSlice'

import PostItem from '../components/PostItem'
import AddPostForm from '../components/modals/AddPostForm'

import classes from './Home.module.css'




const Home = () => {
  const [ modalVisible, setModalVisible ] = useState(false)
  const [ searchText, setSearchText ] = useState('')
  const [ formData, setFormData ] = useState({
    id: '',
    title: '',
    body: '',
    userId: ''
  })

  const dispatch = useDispatch()
  const posts = useSelector(state => state.postsState.posts)
  // const post = useSelector(state => state.postsState.posts)

  console.log(posts)
  

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  const changeHandler = (e) => {
    setSearchText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(getPost(searchText))
    setSearchText('')
  }


  return (
    <section className={classes.homeContainer}>
      {
        modalVisible && <AddPostForm setModalVisible={setModalVisible} formData={formData} setFormData={setFormData} />
      }
      <div className={classes.header}>
        <h2>POSTS</h2>
        {
          posts.length === 1 && <a href="/"><button className={classes.addPostBtn}>Go Back</button></a>

        }
        <div className={classes.homeActions}>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder='Search post by ID' onChange={changeHandler} value={searchText} />
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