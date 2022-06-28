import { FaCartPlus } from 'react-icons/fa';
import { BsCheckCircle } from "react-icons/bs";

const ShopItem = ({ id, image, company, name, price, handelClick, shop }) => {
  return (
    <>
      <div className=' bg-red relative lg:w-3/12 md:w-4/12 sm:w-6/12 w-full mb-10'>
        <div className="mx-4 bg-[#faf6f4] rounded-lg overflow-hidden">
          <img className='object-cover w-full h-[230px]' src={image} alt="shop1" />
          <div className='p-3'>
            <p className="text-xs capitalize">{company}</p>
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
            <div className="flex justify-between items-center mt-3">
              <p className='text-gray-600 text-base'>${price}</p>
              {
                shop ? (
                  <span className=' text-[#94634b] rounded-full w-10 h-10 flex justify-center items-center'>
                    <BsCheckCircle />
                  </span>
                ):
                (
                  <button onClick={()=> handelClick(id)} className='bg-[#94634b] text-white rounded-full w-10 h-10 flex justify-center items-center'>
                    <FaCartPlus size={16} />
                  </button>
                )
                
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopItem