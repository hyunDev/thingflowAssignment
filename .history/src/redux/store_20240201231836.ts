import { configureStore } from '@reduxjs/toolkit'
import issueReducer from './issue/issueSlice'

const store = configureStore({
  reducer: {
    issue: issueReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),

  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export default store
