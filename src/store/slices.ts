import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export type UsersState = {
  archiveUsers: number[],
  hideUsers: number[],
}
const initialState: UsersState = {
  archiveUsers: [],
  hideUsers: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setHide: (state, action: PayloadAction<{id: number}>) => {
      state.hideUsers = [...state.hideUsers, action.payload.id];
    },
    setArchive: (state, action: PayloadAction<{id: number}>) => {
      state.archiveUsers = [...state.archiveUsers, action.payload.id];
    },
    setActive: (state, action: PayloadAction<{id: number}>) => {
      state.archiveUsers = state.archiveUsers.filter((user) => user !== action.payload.id);
    },
  },
});

export const selectUsers = (state: RootState): UsersState => state.users;

export const {
  setHide,
  setActive,
  setArchive,
} = usersSlice.actions;

export default usersSlice.reducer;
