import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const {cart} = useSelector((state) => state) ;
  const [totalAmount, setTotalAmount] = useState(0) ;

  useEffect(() => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0)) ;
  },[cart]) ;

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className='flex max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          <div className='w-[60%]'>
            {
              cart.map( (item, index) => {
                return <CartItem key={item.id} item={item} itemIndex = {index} />
              })
            }
          </div>

          <div className='flex flex-col justify-between'>
            <div className='text-green-500'>
              <h1 className='text-xl font-semibold'>Your Cart</h1>
              <h3 className='text-3xl font-bold'>Summary</h3>
              <p>
                <span className='text-black'>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className='w-[100%]'>
              <div>
                <p>Total Amount: <span className='font-bold'>${totalAmount}</span> </p>
              </div>
              <div className='w-full'>
                <button
                className='bg-green-500 text-center text-white font-bold rounded-lg w-[60%] py-2 mt-2'
                >
                  Checkout
                </button>
              </div>
              
            </div>
          </div>

        </div>) :
        (<div className='flex flex-col justify-center items-center max-w-7xl min-h-[80vh] space-y-5'>
          <h1 className='text-gray-700 font-bold text-2xl'>Your Cart is Empty</h1>
          <Link to={"/"}>
            <button className='bg-green-500 w-[200px] py-3 rounded-xl text-white font-bold'>
              Shop Now
            </button>
          </Link>
        </div>
        )
      }
    </div>
  )
}

export default Cart