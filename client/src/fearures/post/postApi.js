import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



// Define an asyncThunk using Axios
export const fetchPostsAsync = createAsyncThunk('post/fetchPostsAsync', async (token, thunkAPI) => {
    try {
        const response = await axios('http://localhost:3001/posts', {
            method: 'get',
            headers: {
                "Authorization": 'Bearer ' + token

            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        // Handle the error here (e.g., log it, transform it)
        // and reject the promise to trigger the error state in Redux
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const likeOrDislikePostAsync = createAsyncThunk('post/likeDislikePost', async ({ userId, postId, token }, thunkAPI) => {
    try {
        const response = await axios(`http://localhost:3001/posts/${userId}/${postId}/like`, {
            method: 'patch',
            headers: {
                "Authorization": 'Bearer ' + token

            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        // Handle the error here (e.g., log it, transform it)
        // and reject the promise to trigger the error state in Redux
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const submitCommentAsync = createAsyncThunk('post/submitCommentAsync', async ({ userId, postId, token, comment }, thunkAPI) => {
    try {
        const response = await axios(`http://localhost:3001/posts/${userId}/${postId}/comment`, {
            method: 'patch',
            headers: {
                "Authorization": 'Bearer ' + token
            },
            data: {
                comment
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deletePostAsync = createAsyncThunk('post/deletePostAsync', async ({ userId, postId, token }, thunkAPI) => {
    try {
        const response = await axios(`http://localhost:3001/posts/${userId}/${postId}/delete`, {
            method: 'delete',
            headers: {
                "Authorization": 'Bearer ' + token

            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        // Handle the error here (e.g., log it, transform it)
        // and reject the promise to trigger the error state in Redux
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const uploadPostsAsync = createAsyncThunk('post/uploadPostsAsync', async ({ formData, token }, thunkAPI) => {
    console.log(formData);
    try {
        const response = await axios.post('http://localhost:3001/posts', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data', // Important for FormData
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});