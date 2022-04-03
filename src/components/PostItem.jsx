import React from 'react'

import { FaEdit, FaTimes } from 'react-icons/fa'

import { editPost, deletePost } from '../store/slices/postsSlice'
import { useDispatch, useSelector } from 'react-redux'


import classes from './PostItem.module.css'

const PostItem = ({ post }) => {
  const dispatch = useDispatch()
  const editResponseData = useSelector(state => state.postsState.editPostStatus)
  const deleteResponseData = useSelector(state => state.postsState.deletePostStatus)

  const editHandler = () => {
    dispatch(editPost(post))
  }
  
  const deleteHandler = () => {
    dispatch(deletePost(post.id))
  }

  return (
    <section className={classes.postItemContainer}>
      <div className={classes.header}>
        <h4 className={classes.postID}>Post ID: { post.id }</h4>
        <div className={classes.postActions} >
          <button className={classes.editPost} onClick={editHandler} >
            <FaEdit/> 
          </button>
          <button className={classes.deletePost} onClick={deleteHandler}>
            <FaTimes /> 
          </button>
        </div>
      </div>
      <div className={classes.main}>
        <h3 className={classes.postTitle} >{post.title}</h3>
        <p className={classes.postBody} >{post.body}</p>
        <p>Post by User ID: {post.userId}</p>
      </div>
    </section>
  )
}

export default PostItem