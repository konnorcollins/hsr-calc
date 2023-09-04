// app/store.ts

import { configureStore } from "@reduxjs/toolkit";

import relicReducer from '../features/relic/relic-slice'
 
export const store = configureStore({
    reducer: {
        relics: relicReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>