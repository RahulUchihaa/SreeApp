// store.ts
import { configureStore } from '@reduxjs/toolkit';
import persistedUserSlice from './UserSlice';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: {
    user: persistedUserSlice,
  },
});

export const persistor = persistStore(store);

export default store;
