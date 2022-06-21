import React from 'react'

const Shopitem = ({img, shopBtn}) => {
  return (
    <>
        <div className='w-full h-[450px] bg-red p-2 relative'>
            <img className='w-full p-3 h-full bg-[#F7F4F2] object-contain' src={img} alt="shop1" />
            <div className='absolute bottom-8 left-8'>
                <a class="bg-black text-white px-8 py-3 inline-block" href="https://www.linkedin.com/in/mahadidev7/"> {shopBtn }</a>
            </div>
        </div>
    </>
  )
}

export default Shopitem