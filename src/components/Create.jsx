import React from 'react'
import { useState,useContext } from "react"
import { ProductContext } from '../utils/Context';

import { nanoid } from 'nanoid/non-secure';


const Create = () => {
   const [products,setProducts] = useContext(ProductContext);
    const [title, setTitle] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    // const handleForm =(e)=>{
    //     e.preventDefault();
      
    //     const form = e.target;
    //     const formData = new FormData(form);
    //     const product = Object.fromEntries(formData.entries());
    //     product.id = nanoid();
    //     setproducts([...products,product]);
    //     // toast.success("New Product Added");

    // }

    const handleForm = (e) => {
        e.preventDefault();
        if(title.trim().length < 5 || imageLink.trim().length<5 || category.trim().length<5 || price.trim().length <1 || description.trim().length<5){
            alert("Each and Every input must have atleast 4 characters");
            return;
        }
        const product = {
            id: nanoid(),
            title,
            imageLink,
            category,
            price,
            description
        };
        
        setProducts([...products, product]);
     
        // Reset the form fields
        setTitle("");
        setImageLink("");
        setCategory("");
        setPrice("");
        setDescription("");
    };

    return (
        <div className='h-full w-full flex justify-center'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                        PRODUCT CREATION
                    </h1>
                    <form onSubmit={handleForm} className="mt-6">
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Title</span>
                                <input 
                                    name='title' 
                                    type="text" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className=" w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " 
                                    placeholder="Title" 
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700">Image URL</span>
                                <input 
                                    name='imageLink' 
                                    type="url" 
                                    value={imageLink}
                                    onChange={(e) => setImageLink(e.target.value)}
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
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
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
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
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
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className=" block w-full mt-2 px-16 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " 
                                    rows="5" 
                                />
                            </label>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="
                                h-10
                                px-5
                                text-indigo-100
                                bg-indigo-700
                                rounded-lg
                                transition-colors
                                duration-150
                                focus:shadow-outline
                                hover:bg-indigo-800
                            ">
                                Create
                            </button>
                        </div>
                        <div></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;
            