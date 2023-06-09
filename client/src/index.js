import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state'   //no ./ dot slash required cause of jsconfig baseurl = src
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'state/api'

const store = configureStore({
  reducer: {
    global: globalReducer,  // comes from state/index.js => state.global 
    [api.reducerPath]: api.reducer // comes from state/api.js => state.adminApi 
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
})

setupListeners(store.dispatch)

// console.log(store.getState().adminApi)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
