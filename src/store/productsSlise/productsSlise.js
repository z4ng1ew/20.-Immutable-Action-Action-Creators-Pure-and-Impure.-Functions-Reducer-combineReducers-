import {createSlice} from '@reduxjs/toolkit'

const initialState ={
        list:[],
        isLoadind: false,
}
const productsSlice = createSlice({
       name: 'products',
       initialState,
       reducers:{
        addProducts:(state, action)=>{
                //state = initialState
                state.list = action.payload
        }, 
        satIsLoading :(state, { payload }) =>{
                
                state.isLoadind = payload;
        }
       }
})
export const { addProducts, deleteSinglProducts, satIsLoading } = productsSlice.actions;
//actions = addProducts  и другие функции в  reducers:{...
export default productsSlice.reducer
