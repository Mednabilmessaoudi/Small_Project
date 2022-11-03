import { createSlice } from '@reduxjs/toolkit'

export const ArticleSlice = createSlice({
  name: 'Article',
  initialState :[{
category : "none",
type : "none",
Price : "none",
Size : "none",
Color : "none",
Quatity : "none"},
]
,
  reducers: {
   setArticle:(state,action)=>{
    return action.payload

    },

   
  },
})

export const {setArticle } = ArticleSlice.actions

export default ArticleSlice.reducer