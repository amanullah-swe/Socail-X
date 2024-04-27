import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseApiUrl } from "store/constant";
// Define an asyncThunk using Axios
export const fetchPersonsInfoAsync = createAsyncThunk(
  "user/fetchPersonsInfo",
  async ({ personId, token }, thunkAPI) => {
    try {
      const response = await axios(`${baseApiUrl}/users/${personId}`, {
        method: "get",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchPersonsPostsAsync = createAsyncThunk(
  "user/fetchPersonsPosts",
  async ({ personId, token }, thunkAPI) => {
    try {
      const response = await axios(`${baseApiUrl}/posts/${personId}/posts`, {
        method: "get",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const submitCommentAsync = createAsyncThunk(
  "person/submitCommentAsync",
  async ({ userId, postId, token, comment }, thunkAPI) => {
    try {
      const response = await axios(
        `${baseApiUrl}/posts/${userId}/${postId}/comment`,
        {
          method: "patch",
          headers: {
            Authorization: "Bearer " + token,
          },
          data: {
            comment,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const likeOrDislikePostAsync = createAsyncThunk(
  "person/likeDislikePost",
  async ({ userId, postId, token }, thunkAPI) => {
    try {
      const response = await axios(
        `${baseApiUrl}/posts/${userId}/${postId}/like`,
        {
          method: "patch",
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      // Handle the error here (e.g., log it, transform it)
      // and reject the promise to trigger the error state in Redux
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
