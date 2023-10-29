import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Define an asyncThunk using Axios
export const register = createAsyncThunk('post/register', async ({ formData, token }, thunkAPI) => {
    try {
        const response = await axios(`http://localhost:3001/posts`, {
            method: 'post',
            headers: {
                "Authorization": 'Bearer ' + token
            },
            data: {
                formData
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});
