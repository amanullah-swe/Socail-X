import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    mode: true,
    user: null,
    token: null,
    uploadSections: false,
    friends: [],
    status: "idle"


};

const authSlice = createSlice({
    name: "auth",
    initialState: initailState,
    reducers: {
        setMode: state => {
            state.mode = state.mode === true ? false : true;
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state, action) => {
            state.login = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            }
            else {
                console.log("user not have login");
            }
        },
        setPosts: (state, action) => {
            if (state.user) {
                state.posts = action.payload.posts;
            }
        },
        setPost: (state, action) => {
            const updatedPost = state.posts.map((post) => {
                if (post._id === action.payload.post._id) {
                    return action.payload.post;
                }
                return post;
            })
            state.posts = updatedPost;
        },
        setUpoadSections: (state, action) => {
            state.uploadSections = action.payload.uploadSections;
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => {
                return post._id !== action.payload.post._id;
            })
        }
    },
})
export const { setFriends, setPosts, setPost, setMode, setLogin, setLogout, setUpoadSections, deletePost } = authSlice.actions;
export default authSlice.reducer;



