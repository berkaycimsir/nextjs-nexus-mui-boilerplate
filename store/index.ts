import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter';

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export default store;
