import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseApiUrl } from 'store/constant';
// Define an asyncThunk using Axios
export const register = createAsyncThunk('post/register', async ({ formData, token }, thunkAPI) => {
    try {
        const response = await axios(`${baseApiUrl}/posts`, {
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
