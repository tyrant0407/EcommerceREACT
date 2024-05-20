import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'


const Home = () => {
   const [products] = useContext(ProductContext);
   const {search} = useLocation();
   const category = decodeURIComponent(search.split("=")[1]);

   const [FilteredProducts, setFilteredProducts] = useState(products);

   const getproductscategory = async () =>{
    try {
        const {data} = await axios.get(`/products/category/${category}`);
        setFilteredProducts(data)
        
    } catch (error) {
        console.log(error)
        
    }
   }
   useEffect(() => {
    if(!FilteredProducts || category == "undefined") setFilteredProducts(products)
  if (category != "undefined") getproductscategory()
   }, [category,products])
   

    return products? (
        <>
            <Nav/>
            <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                {FilteredProducts && FilteredProducts.map((p,i)=>(   <Link key={i} to={`/details/${p.id}`} className="mr-3 ml-3  mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex
                        justify-center items-center">
                            <div
                                className="hover:scale-110 mb-3 w-full h-[100%] bg-contain bg-no-repeat bg-center"
                                style={{
                                    backgroundImage:
                                        `url(${p.image})`,
                                }}
                            ></div>
                            <h1 className= 'text-sm font-bold text-black-800 dark:text-black mb-2 hover:text-blue-300'>{p.title}</h1>
                            <div className="flex mb-4 mt-4">
                    <div className="mr-4">
                        <span className="font-bold text-black-700 dark:text-black-300">Price:</span>
                        <span className="text-black-600 dark:text-red-800 font-bold">$ {p.price}</span>
                    </div>
                </div>
                        </Link>))}
            
            </div>
        </>):(<Loading/>);
    
}

export default Home
