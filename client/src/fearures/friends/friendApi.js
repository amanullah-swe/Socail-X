import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseApiUrl } from 'store/constant';
// Define an asyncThunk using Axios
export const addRemoveFreindsAsync = createAsyncThunk('friend/addRemoveFreindsAsync', async ({ userId, personId, token }, thunkAPI) => {

    try {
        const response = await axios(`${baseApiUrl}/users/${userId}/${personId}`, {
            method: 'patch',
            headers: {
                "Authorization": 'Bearer ' + token
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const fetchFriendsAsync = createAsyncThunk('friend/fetchFriendsAsync', async ({ userId, token }, thunkAPI) => {
    try {
        const response = await axios(`${baseApiUrl}/users/${userId}/friends`, {
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