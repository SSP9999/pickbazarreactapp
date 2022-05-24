import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import Axios from 'axios';

export const getCategories = createAsyncThunk('fetchCategories', async ()=>{
    try {
        const categories = await Axios.get('https://mock.redq.io/api/categories?searchJoin=and&with=type%3Bauthor&limit=30&search=type.slug:clothing');
        return categories.data
        
    } catch (error) {
        return error;
        
    }
   
})

 export const categoriesSlice =createSlice({
    name:'categories',
    initialState:{
        value:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state,action)=>{
            state.status ='loading'
        })
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.value =action.payload
        })
        .addCase(getCategories.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})