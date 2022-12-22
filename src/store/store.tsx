import { configureStore, combineReducers } from '@reduxjs/toolkit';
import boardsReducer from './slices/board';
import UserReducer from './slices/users';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  board: boardsReducer,
  user: UserReducer,
});

const appReducer = (state: any, action: any) => {
  if (action.type === 'user/logout') {
    return {
      ...state,
      user: {
        ...state.user,
        token: null,
      },
      board: {
        ...state.board,
        board: [],
      },
    };
  }
  return rootReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
