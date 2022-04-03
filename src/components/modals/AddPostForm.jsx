import React from 'react'

import { FaTimes } from 'react-icons/fa'

import classes from './AddPostForm.module.css'



const AddPostForm = ({ setModalVisible }) => {



  return (
    <div className={classes.addPostFormBackdrop}>
      <button onClick={() => setModalVisible(false)}><FaTimes className={classes.closeModal} /></button>
      <form className={classes.addPostForm}>
        <div  className={classes.formControl}>
          <label htmlFor="title">Post Title</label>
          <input type="text" name='title' id='title' placeholder='Enter post title' />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="body">Post Content</label>
          <textarea type="text" name='body' id='body' rows='5' placeholder='Enter post content' />
        </div>
        <div  className={classes.formControl}>
          <label htmlFor="userId ">User ID</label>
          <input type="text" name='userId' id='userId' placeholder='Enter User ID' />
        </div>
        <div className={classes.formBtns}>
          <button className={classes.cancelBtn}  onClick={() => setModalVisible(false)}>Cancel</button>
          <button type="submit" >Add Post</button>
        </div>
      </form>
    </div>
  )
}

export default AddPostForm