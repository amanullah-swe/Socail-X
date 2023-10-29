import { createSlice } from "@reduxjs/toolkit";
import { fetchPersonsInfoAsync, fetchPersonsPostsAsync, likeOrDislikePostAsync, submitCommentAsync } from "./personApi";

const initailState = {
    person: null,
    posts: [],
    status: "idle"


};

const personSlice = createSlice({
    name: "person",
    initialState: initailState,
    reducers: {
        setFriends: state => {
            state.mode = state.mode === true ? false : true;
        },

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPersonsInfoAsync.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchPersonsInfoAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.person = action.payload;
            })
            .addCase(fetchPersonsInfoAsync.rejected, (state, action) => {
                state.status = 'rejected';

            })

            .addCase(fetchPersonsPostsAsync.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchPersonsPostsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })
            .addCase(fetchPersonsPostsAsync.rejected, (state, action) => {
                state.status = 'rejected';

            })

            .addCase(likeOrDislikePostAsync.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(likeOrDislikePostAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = state.posts.map((post) => post._id === action.payload._id ? action.payload : post);

            })
            .addCase(likeOrDislikePostAsync.rejected, (state, action) => {
                state.status = 'rejected';

            })

            .addCase(submitCommentAsync.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(submitCommentAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = state.posts.map((post) => post._id === action.payload._id ? action.payload : post);

            })
            .addCase(submitCommentAsync.rejected, (state, action) => {
                state.status = 'rejected';

            })
    }

})
export const { setFriends } = personSlice.actions;
export const selectPersonsPost = (state) => state.person.posts;
export const selectPerson = (state) => state.person.person;
export default personSlice.reducer;


