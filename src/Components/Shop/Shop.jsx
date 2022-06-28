import React, { useEffect, useState } from 'react'
import Shopitem from './Shopitem';
import { Bars } from  'react-loader-spinner';
import DrawerCos from './Drawer';

const Shop = () => {
  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(false)
  const [loadedProducts, setLoadedProducts] = useState([])
  const [carts, setcarts] = useState([])

  const createPagination = (items, limet = 8, offset = 0)=>{
      let arr = [];
      items.forEach((element, index) => {
        if(index >= offset && index < limet + offset){
          arr.push(element)
        }
      });
      return arr ;
  }
  const getProducts = async () => {
    setloading(true)
    const respons = await fetch('https://course-api.com/react-store-products').then(data => data.json())
    respons.map((e,i)=>{
      return (
        e.cart = 1,
        e.shop = false,
        e.totlePrice = e.price
      )
    })
    setproducts(respons);
    setLoadedProducts(createPagination(respons));
    setloading(false)
  }
  const loadMore = () =>{
    if(loadedProducts.length === products.length) return
    const newProducts = createPagination(products, 8, loadedProducts.length);
    setLoadedProducts([...loadedProducts, ...newProducts])
  }
  const productCount =(in_de, id) =>{
    let allProducts = carts
    let productPrice;
    
    allProducts.map(item => (
      item.id === id ? productPrice = item.price : ``
    ))

    if(in_de === 1){
      allProducts.map((item)=>(
        item.id === id ?  (
          item.cart++,
          item.totlePrice = item.totlePrice + productPrice
          ) : item
      ))
    }else if(in_de === 0){
      allProducts.map((item)=>(
        item.id === id ?  (item.cart <= 1 ? item.cart = 1 : (
          item.cart--,
          item.totlePrice = item.totlePrice - productPrice
          )) : item
      ))
    }
    setcarts([...allProducts])
  }
  const handelClick = (id) =>{
    let allProducts = products;
    setcarts([...carts, ...allProducts.filter((e) => e.id === id)])
    allProducts?.map( product => (
      product.id === id ? product.shop = true : product
    ))
    setproducts([...allProducts])
  }

  const cartTime = (id) => {
    let allCarts = carts ;
    setcarts([...allCarts.filter(item => item.id !== id)])
    let allProducts = products;
    allProducts?.map( product => (
      product.id === id ? product.shop = false : product
    ))
    setproducts([...allProducts])
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <>
      <section className='block h-auto'>
        <div className="container md:w-5/6 mx-auto px-2 md:px-0">
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12'>
            <h2 className='text-5xl font-bold leading-tight '>Shop by Product</h2>
          </div>
          <div>
            <div className='flex flex-wrap'>
            {
              loading &&
              <div className="flex justify-center w-full my-10">
                <Bars
                  color='#E1C8B4'
                  ariaLabel='loading'
                />
              </div>
            }
            {
              !!loadedProducts &&
              loadedProducts?.map((product, i) => (
                <Shopitem key={i} {...product} handelClick={handelClick} />
              ))
            }
            {
              loadedProducts.length !== products.length &&
              <button onClick={loadMore} className="bg-black mx-auto text-white px-11 py-3 block">Load More</button>
            }
            
            </div>
          </div>
        </div>
      </section>

      <DrawerCos allCarts={carts} productCount={productCount} cartTime={cartTime} />
      
    </>
  )
}


export default Shop