import React from 'react'
import { useState,useContext ,useEffect} from "react"
import { ProductContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [products,setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const {id}=useParams();
    const [product, setproduct] = useState({
        title:"",
        image:"",
        price:"",
        category:"",
        description:"",
    })
    const ChangeHandler = (e)=>{
      
          setproduct({...product,[e.target.name]:e.target.value});
        }
        
        useEffect(() => {
            setproduct(products.filter((p)=> p.id == id)[0]);
        }, [id]);
         

  

    const EditHandler = (e) => {
        e.preventDefault();

        if(product.title.trim().length < 5 || product.image.trim().length<5 || product.category.trim().length<5 || product.price === "" || product.description.trim().length<5){
            alert("Each and Every input must have atleast 4 characters");
            return;
        }

      const pi =  products.findIndex((p)=> p.id == id);
      const copyData = [...products];
      copyData[pi] ={...products[pi],...product}
      console.log(product,pi)

  
        setProducts(copyData);
        localStorage.setItem("products",JSON.stringify(copyData));
        toast.success("Product Edited Successfully");
        navigate(-1)
    };

    return (
        <div className='h-full w-full flex justify-center'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-indigo-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
                       Update Product Details
                    </h1>
                    <form onSubmit={EditHandler} className="mt-6">
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Title</span>
                                <input 
                                    name='title' 
                                    type="text" 
                                    value={product && product.title}
                                    onChange={ChangeHandler}
                                    className=" w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " 
                                    placeholder="Title" 
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Image URL</span>
                                <input 
                                    name='image' 
                                    type="url" 
                                    value={product && product.image}
                                    onChange={ChangeHandler}
                                    className=" block w-full mt-2 px-16 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " 
                                    placeholder="Image URL" 
                                  
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Price</span>
                                <input 
                                    name='price' 
                                    type="number" 
                                    value={product && product.price}
                                    onChange={ChangeHandler}
                                    className=" block w-full mt-2 px-16 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " 
                                    placeholder="Price" 
                                  
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Category</span>
                                <input 
                                    name='category' 
                                    type="text" 
                                    value={product && product.category}
                                    onChange={ChangeHandler}
                                    className=" block w-full mt-2 px-16 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " 
                                    placeholder="Category" 
                             
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Description</span>
                                <textarea 
                                    name='description' 
                                    value={product && product.description}
                                    onChange={ChangeHandler}
                                    className=" block w-full mt-2 px-16 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " 
                                    rows="5" 
                                />
                            </label>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="
                                h-10
                                px-5
                                text-indigo-700
                                bg-white-100
                                rounded-lg
                                
                                outline
                                transition-colors
                                duration-150
                                focus:shadow-outline
                                hover:bg-indigo-800  hover:text-indigo-100
                            ">
                               SUMBIT
                            </button>
                        </div>
                        <div></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit