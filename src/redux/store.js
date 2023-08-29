// import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './contactSlice.js';
// import { filterReducer } from './filterSlice.js';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
// });

//task 8
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from './contactSlice.js';
// import {filterReducer} from './filterSlice.js';

// export const store = configureStore({
//   reducer: {
//     // filter: filterReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     [filterReducer.reducerPath]: filterReducer.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
// import contactsReducer from './contactSlice.js';
import { contactReducer } from '../redux/contacts/contactSlice.js';
import { filterReducer } from '../redux/contacts/filterSlice.js';

// const persistConfig = {
//   key: 'root',
//   version: 1,getDefaultMiddleware
//   storage,
// };
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig),
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from "redux-persist";

//   import { configureStore } from "@reduxjs/toolkit";
//   import  contactsReducer from './contactSlice.js';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }

//   const persistedReducer = persistReducer(persistConfig, contactsReducer)

//   export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   })

//   export const persistor = persistStore(store)
