import { createSlice } from "@reduxjs/toolkit";
import { deletePostAsync, fetchPostsAsync, likeOrDislikePostAsync, submitCommentAsync, uploadPostsAsync } from "./postApi";

const initailState = {
    posts: [],
    status: "idle"


};

const postSlice = createSlice({
    name: "auth",
    initialState: initailState,
    reducers: {
        setFriends: state => {
            state.mode = state.mode === true ? false : true;
        },

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPostsAsync.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })
            .addCase(fetchPostsAsync.rejected, (state, action) => {
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

            .addCase(deletePostAsync.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(deletePostAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = state.posts.filter((post) => post._id !== action.payload._id)
            })
            .addCase(deletePostAsync.rejected, (state, action) => {
                state.status = 'rejected';

            })


            .addCase(uploadPostsAsync.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(uploadPostsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })
            .addCase(uploadPostsAsync.rejected, (state, action) => {
                state.status = 'rejected';

            })
    }

})
export const { setFriends } = postSlice.actions;
export const selectPosts = (state) => state.post.posts;
export default postSlice.reducer;


