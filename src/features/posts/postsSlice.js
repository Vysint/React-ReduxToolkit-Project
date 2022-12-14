import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },
  {
    id: 2,
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectedAllPosts = (state) => state.posts;
export const postActions = postsSlice.actions;

export default postsSlice.reducer;
