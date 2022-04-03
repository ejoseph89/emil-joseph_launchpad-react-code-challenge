import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

// GET
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    try {
      const response = await fetch(`${baseURL}? _start=0&_limit=20`)
      const data = await response.json()
      console.log(data)
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

  }
})

export default postSlice.reducer