import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlice';
import stepReducer from './stepSlice';
import addressReducer from './addressSlice';
import uploadReducer from './uploadSlice';

export const store = configureStore({
    reducer: {
        formReducer,
        stepReducer,
        addressReducer,
        uploadReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch