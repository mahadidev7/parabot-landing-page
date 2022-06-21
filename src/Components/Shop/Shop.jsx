import React from 'react'
import Shopitem from './Shopitem'

const Shop = () => {
  return (
    <>
      <section className='block h-auto'>
        <div className="container md:w-5/6 mx-auto px-2 md:px-0">
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12'>
            <h2 className='text-5xl font-bold leading-tight '>Shop by Product</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan dictumst hac, congue in pellentesque condimentum ultricies magna nulla tincidunt. Turpis auctor erat fermentum a at aliquet  c</p>
          </div>
          <div>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center'>
            
              <Shopitem img="https://i.ibb.co/VS0jbdT/image-3.png" shopBtn="Shop Now" />
              <Shopitem img="https://i.ibb.co/SmtNxsJ/image-4.png" shopBtn="Shop Now" />
              <Shopitem img="https://i.ibb.co/k2wNX9t/image-2.png" shopBtn="Shop Now" />
              <Shopitem img="https://i.ibb.co/SmtNxsJ/image-4.png" shopBtn="Shop Now" />
        
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

{/* <img src="https://i.ibb.co/VS0jbdT/image-3.png" alt="image-3" border="0">
<img src="https://i.ibb.co/SmtNxsJ/image-4.png" alt="image-4" border="0">
<img src="https://i.ibb.co/k2wNX9t/image-2.png" alt="image-2" border="0"> */}

export default Shop