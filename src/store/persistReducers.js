import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'imune',
      storage,
      whitelist: ['auth', 'user', 'screen'],
    },
    reducers
  );

  return persistedReducer;
};
