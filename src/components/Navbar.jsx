import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const {cart} = useSelector((state) => state) ;
  return (
    <div className=''>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <div>
            <img src='../logo.png' 
              className='w-[200px] h-[60px]'
            />
          </div>
        </NavLink>
        
        <div className='flex flex-row gap-x-10 font-medium text-white'>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className='relative'>
              {
                cart.length > 0 && 
                <span className='absolute left-[10px] -top-2 bg-green-400 rounded-full px-[6px] py-[1px] animate-bounce text-xs'>{cart.length}</span>
              }
             
              <FaShoppingCart
                className='absolute bottom-[-22px] text-xl'
              />
            </div>
          </NavLink>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar