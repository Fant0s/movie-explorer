import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@/store/features/auth/authSlice';

export const store = configureStore({
  reducer: {
    // обычные слайсы
    auth: authSlice.reducer,
    // слайсы с запросами
    // [personApi.reducerPath]: personApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat
      // подключение слайсов с запросами
      // personApi.middleware,
      (),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
