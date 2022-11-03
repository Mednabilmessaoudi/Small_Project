import { configureStore } from '@reduxjs/toolkit'
import  ArticleSlice from './Articleslice'

export default configureStore({
  reducer: {Article:ArticleSlice},
})