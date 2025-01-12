import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authapi } from "./features/Api/Authapi";
import { categorieApi } from "./features/categore/Categorie";
import { authorapi } from "./features/Author/author";
import { bookapi } from "./features/book/book";
import { cartapi } from "./features/cart/cart";
import { favoriteapi } from "./features/favorite/favorite";
import { reviewapi } from "./features/review/review";
import { Getid } from "./features/Getid/Getid";
export const store = configureStore({
  reducer: {
    getId: Getid.reducer,
    [authapi.reducerPath]: authapi.reducer,
    [categorieApi.reducerPath]: categorieApi.reducer,
    [authorapi.reducerPath]: authorapi.reducer,
    [bookapi.reducerPath]: bookapi.reducer,
    [cartapi.reducerPath]: cartapi.reducer,
    [favoriteapi.reducerPath]: favoriteapi.reducer,
    [reviewapi.reducerPath]: reviewapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authapi.middleware,
      categorieApi.middleware,
      authorapi.middleware,
      bookapi.middleware,
      cartapi.middleware,
      favoriteapi.middleware,
      reviewapi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
