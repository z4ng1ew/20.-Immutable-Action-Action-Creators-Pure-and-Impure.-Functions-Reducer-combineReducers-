import {configureStore} from "@reduxjs/toolkit"
import productsSlise from "./productsSlise/productsSlise"
export const store = configureStore({
        reducer:{
                products:productsSlise
        },
        devTools: true,
})


