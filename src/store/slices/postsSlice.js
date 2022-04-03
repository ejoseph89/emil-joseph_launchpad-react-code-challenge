import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

// GET
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    try {
      const response = await fetch(`${baseURL}?_start=0&_limit=20`)
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

// POST
export const addPost = createAsyncThunk(
  'posts/addPost',
  async (post) => {
    try {
      const response = await fetch(`${baseURL}`, {
        method: 'POST',
        body: JSON.stringify({
          title: post.title,
          body: post.body,
          userId: post.userId

        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      alert(`Response Status: ${response.status}`)
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      
    }
  }
)

// GET: get post by id
export const getPost = createAsyncThunk(
  'posts/getPost',
  async (id) => {
    try {
      const response = await fetch(`${baseURL}/${id}`)
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }
)


const initialPostState = {
  posts: [],
  getPostsStatus: '',
  getPostsError: '',
  addPostStatus: '',
  addPostError: '',
  getPostByIdStatus: '',
  getPostByIdError: '',
  editPostStatus: '',
  editPostError: '',
  deletePostStatus: '',
  deletePostError: ''
}
const postSlice = createSlice({
  name: 'posts',
  initialState: initialPostState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      return {
        ...state,
        getPostsStatus: 'pending',
        getPostsError: '',
        addPostStatus: '',
        addPostError: '',
        getPostByIdStatus: '',
        getPostByIdError: '',
        editPostStatus: '',
        editPostError: '',
        deletePostStatus: '',
        deletePostError: ''
      }
    },
    [getPosts.fulfilled]: (state, action) => {
      return {
        ...state,
        posts: action.payload,
        getPostsStatus: 'success',
        getPostsError: '',
        addPostStatus: '',
        addPostError: '',
        getPostByIdStatus: '',
        getPostByIdError: '',
        editPostStatus: '',
        editPostError: '',
        deletePostStatus: '',
        deletePostError: ''
      }
    },
    [getPosts.rejected]: (state, action) => {
      return {
        ...state,
        getPostsStatus: 'rejected',
        getPostsError: action.payload,
        addPostStatus: '',
        addPostError: '',
        getPostByIdStatus: '',
        getPostByIdError: '',
        editPostStatus: '',
        editPostError: '',
        deletePostStatus: '',
        deletePostError: ''
      }
    },
    [addPost.fulfilled]: (state, action) => {
      return {
        ...state,
        getPostsStatus: '',
        getPostsError: '',
        addPostStatus: action.payload,
        addPostError: '',
        getPostByIdStatus: '',
        getPostByIdError: '',
        editPostStatus: '',
        editPostError: '',
        deletePostStatus: '',
        deletePostError: ''
      }
    },
    [getPost.fulfilled]: (state, action) => {
      return {
        ...state,
        posts: [action.payload],
        getPostsStatus: '',
        getPostsError: '',
        addPostStatus: '',
        addPostError: '',
        getPostByIdStatus: '',
        getPostByIdError: '',
        editPostStatus: '',
        editPostError: '',
        deletePostStatus: '',
        deletePostError: ''
      }
    },

  }
})

export default postSlice.reducer