import { createSlice } from "@reduxjs/toolkit";
import { addRemoveFreindsAsync, fetchFriendsAsync } from "./friendApi";

const initailState = {
  friends: [],
  status: "idle",
};

const friendSlice = createSlice({
  name: "friend",
  initialState: initailState,
  reducers: {
    setFriends: (state) => {
      state.mode = state.mode === true ? false : true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFriendsAsync.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchFriendsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.friends = action.payload;
      })
      .addCase(fetchFriendsAsync.rejected, (state, action) => {
        state.status = "rejected";
      })

      .addCase(addRemoveFreindsAsync.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(addRemoveFreindsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.friends = action.payload;
      })
      .addCase(addRemoveFreindsAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});
export const { setFriends } = friendSlice.actions;
export const selectFriends = (state) => state.friend.friends;
export default friendSlice.reducer;
