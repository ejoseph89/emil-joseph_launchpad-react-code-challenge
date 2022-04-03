import React, { useState } from 'react'

import { FaTimes, FaCheckCircle } from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../store/slices/postsSlice'

import classes from './AddPostForm.module.css'



const AddPostForm = ({ setModalVisible, formData, setFormData }) => {
  const dispatch = useDispatch()
  const responseData = useSelector(state => state.postsState.addPostStatus)
  

  // const [ formData, setFormData ] = useState({
  //   title: '',
  //   body: '',
  //   userId: ''
  // })
  
  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost(formData))
    setFormData({
      title: '',
      body: '',
      userId: ''
    })
    if (responseData) {
      setShowSuccessMessage(true)
    }
    // setModalVisible(false)
  }

  const closeModal = () => {
    setModalVisible(false)
    setShowSuccessMessage(false)
  }


  return (
    <div className={classes.addPostFormBackdrop}>
      <button onClick={closeModal}><FaTimes className={classes.closeModal} /></button>
      <form className={classes.addPostForm} onSubmit={handleSubmit}>
        <div  className={classes.formControl}>
          <label htmlFor="title">Post Title</label>
          <input type="text" name='title' id='title' placeholder='Enter post title' 
            value={formData.title} onChange={handleChange}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="body">Post Content</label>
          <textarea type="text" name='body' id='body' rows='5' placeholder='Enter post content' value={formData.body} onChange={handleChange} />
        </div>
        <div  className={classes.formControl}>
          <label htmlFor="userId ">User ID</label>
          <input type="text" name='userId' id='userId' placeholder='Enter User ID' 
            value={formData.userId} onChange={handleChange} />
        </div>
        <div className={classes.formBtns}>
          <button className={classes.cancelBtn}  onClick={closeModal}>Cancel</button>
          <button type="submit" >Add Post</button>
        </div>
        {
          showSuccessMessage &&
          <div className={classes.addPostSuccess}><p>Post Added</p> <FaCheckCircle /> </div>
        }
      </form>
    </div>
  )
}

export default AddPostForm