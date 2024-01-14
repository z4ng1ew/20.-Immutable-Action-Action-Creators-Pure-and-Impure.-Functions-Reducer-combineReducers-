import { useEffect } from "react"
import  Products  from "../../products.json"
import {addProducts} from "../../store/productsSlise/productsSlise"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/productsSelector"
import { deleteSinglProducts } from "../../store/productsSlise/productsSlise"


const fetchData = () => {
        return (dispatch) =>{

        }
}
const MainPage = ()=>{
        const dispatch = useDispatch()
        // const storeProducts = useSelector(getProducts)
       
        // useEffect(()=>{
        //         console.log(storeProducts);
        //         dispatch(addProducts(Products))

        // },[])
        // const deleteSinglProductsHandler = (id) => () => {
        //         dispatch(deleteSinglProducts({id}))
        // }
        useEffect
        return( 
                <div>
                      {/* {
                        storeProducts.length > 0 &&
                        storeProducts.map((product)=> {
                             return (
                                <div key={`${product.id}-${product.title}`}>
                                        <h2>{product.title}</h2>
                                        <div>{product.price}</div>
                                        <button onClick={deleteSinglProductsHandler(product.id)}>удалить</button>
                                </div> 
                             )   
                        })
                      }   */}
                </div>
        )
}
export default MainPage
