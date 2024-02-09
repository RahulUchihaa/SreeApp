// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserState {
  full_name: string;
  email: string;
  phone_number: number;
  is_consumer: boolean;
}

const initialState: UserState = {
  full_name: '',
  email: '',
  phone_number: 0,
  is_consumer: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

const persistConfig = {
  key: 'root', // key for the localStorage key
  storage: AsyncStorage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice.reducer);

export const { setUser } = userSlice.actions;

export default persistedUserSlice;

// Selector
export const selectUser = (state: { user: UserState }) => state.user;
