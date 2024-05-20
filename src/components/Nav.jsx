import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context';
import { Link} from 'react-router-dom';

const Nav = () => {
   const [products] = useContext(ProductContext);
 
   let distint_category = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
   distint_category=[...new Set(distint_category)];


   const color=()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
   }
   
    return (
        <>
            <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
            
                <a className='py-2 px-6 border uppercase rounded border-blue-200 font-semibold text-blue-800' href="/create">
                    Add New Product</a>
                <hr className='w-[80%] my-3' />
                
                <h1 className='text-2xl ml-[-3vh] uppercase font-bold  mb-3'> Category Filter</h1>
                <ul className='w-[80%]'>
               
                    {distint_category.map((c,i)=>(  <Link key={i} to={`/?category=${c}`} className='mb-3 uppercase font-bold flex items-center'>
                        <span style={{backgroundColor: color()}} className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'></span>{""}
                        {c}
                        </Link>))}
                  
                </ul>

            </nav>
        </>
    )
}

export default Nav