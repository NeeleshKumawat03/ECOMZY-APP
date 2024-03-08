import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch() ;
  const removeFromCart = () => {
    dispatch(remove(item.id)) ;
    toast.error("Item Removed") ;
  }

  return (
    <div className='border-b-2 border-gray-500'>
      <div className='flex justify-center m-4 gap-x-10 w-full'>
        <div className='w-[30%]'>
          <img src={item.image}
          className='w-full h-[250px]' /> 
        </div>

        <div className='flex flex-col gap-y-4 w-[70%]'>
          <div>
            <h1 className='text-gray-700 font-semibold text-lg textleft mt-1'>{item.title}</h1>
            <br/>
            <h1 className='w-50 text-gray-600 font-normal texl-[10px] text-left'>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          </div>
          <div className='flex justify-between pr-3'>
            <div className='text-green-600 font-semibold'>
              <p>${item.price}</p>
            </div>
            <div 
            className='bg-red-300 rounded-full p-2 mr-3'
            onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem