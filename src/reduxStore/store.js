import {configureStore} from '@reduxjs/toolkit' 
import UserSlice from './slices/userSlice.js'
import productSlice from './slices/productSlice.js'



export const store = configureStore({
    reducer : {
        user : UserSlice,
        products : productSlice
    }
})