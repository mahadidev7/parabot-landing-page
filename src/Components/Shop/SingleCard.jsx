import React from 'react'
import { TiTimes } from "react-icons/ti";

function SingleCard({productCount, id, name, price, image,  cart, totlePrice, cartTime}) {

  return (
    <>
        <div className='flex gap-2 items-center my-2 bg-white p-1 rounded'>
            <div className='w-2/6 relative'>
                <button className='' onClick={()=> cartTime(id)}>
                    <TiTimes />
                </button>
                <img src={image} alt="product" className='w-full h-16 object-cover rounded' />
            </div>
            <div className='w-4/6'>
                <h3 className="text-[14px] capitalize font-bold">{name}</h3>
                <p className='text-gray-600 text-base text-right'>${totlePrice}</p>
                <div className='w-full flex gap-5 justify-between items-center mt-2'>
                        <button onClick={()=> productCount(0, id)} className='bg-[#94634b] px-3 text-white rounded'>-</button>
                    <span>
                        <input type="text" readOnly className='w-full text-center' value={cart} />
                    </span>
                        <button onClick={()=> productCount(1, id)} className='bg-[#94634b] px-3 text-white rounded'>
                            +
                        </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleCard