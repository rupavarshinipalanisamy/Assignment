import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartList:[]

    },
    reducers:{
        add_to_cart:(state,{payload})=>{
         var newRec=[...state.cartList];
         const ind =newRec.findIndex(
            (data)=>data.id === payload.id
         );
         if(ind < 0){
            newRec.push(payload)
         }
         else{
            newRec.splice(ind,1)
         }
         return{...state,cartList: newRec}
        }

    }
});
export const {add_to_cart}=cartSlice.actions
export default cartSlice.reducer;