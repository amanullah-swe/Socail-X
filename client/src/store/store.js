import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../fearures/auth/authSlice.js";
import postSliceReducer from "../fearures/post/postSlice.js";
import friendsReducer from "../fearures/friends/friendsSlice.js";
import personReducer from "../fearures/person/personSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    post: postSliceReducer,
    friend: friendsReducer,
    person: personReducer,
  },
});
