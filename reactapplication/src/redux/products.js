import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import Axios from 'axios';

export const getProducts = createAsyncThunk('fetchProducts', async ()=>{
    try {
        const products = await Axios.get('https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&search=type.slug:clothing');
        return products.data
        
    } catch (error) {
        return error;
        
    }
   
})

 export const productSlice =createSlice({
    name:'products',
    initialState:{
        value:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.status ='loading'
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.value =action.payload
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})