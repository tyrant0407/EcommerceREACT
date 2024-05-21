import React, { useContext, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';


const Details = () => {
    const navigate = useNavigate();
   const [products,setProducts] = useContext(ProductContext);   
   const [product, setproduct] = useState(null)
    const {id} = useParams();
   

    useEffect(() => {
        if(!product){
            setproduct(products.filter((p)=>p.id==id)[0])
        }
    },[]);

    const ProductDeleteHandler =(id)=>{
        const FilteredProducts = products.filter((p)=>p.id !== id);
        setProducts(FilteredProducts);
        localStorage.setItem("products",JSON.stringify(FilteredProducts));
        navigate('/')
    }
    

  return product ? (
<div className='flex items-center justify-center w-full'>
<div className="h-full w-[80%] bg-blue-100 py-8 flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-black-300 dark:bg-black-700 mb-4">
                    <img className='w-full h-full object-contain rounded-lg' src={`${product.image}`} alt="" />
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="edit w-full bg-white text-black py-2 px-4 border font-bold hover:bg-red-300 dark:hover:bg-black-700">Edit</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button onClick={()=>ProductDeleteHandler(product.id)} className="delete w-full bg-white  text-black-800 border  dark:text-black py-2 px-4  font-bold hover:bg-red-300 dark:hover:bg-black-600">Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-black-800 dark:text-black mb-2">{product.title}</h2>
               
                <div className="flex mb-4 mt-4">
                    <div className="mr-4">
                        <span className="font-bold text-black-700 dark:text-black-300">Price:</span>
                        <span className="text-black-600 dark:text-red-800 font-bold">$ {product.price}</span>
                    </div>
                </div>
                <div className='mb-5'>
                        <span className="font-bold text-black-700 dark:text-black-300">Category:</span>
                        <span className="text-black-600  dark:text-black-300 uppercase"> {product.category}</span>
                    </div>
               
               
                <div>
                    <span className="font-bold text-black-700 dark:text-black-300">Product Description:</span>
                    <p className="text-black-600 dark:text-black-300 text-sm mt-2">
                     {product.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  ) : (<Loading/>)
}

export default Details
