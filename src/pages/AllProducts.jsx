import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PreFooter from '../components/PreFooter'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'



function AllProducts() {

    const [products, setproducts] = useState(null);

  const fetchProducts = async ()=>{
        try {
            const products = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setproducts(res))
        } catch (error) {
            console.log(error.message)
        }
    }




    useEffect(() => {
        fetchProducts()
    }, []);



    return (
        <div>
            <Navbar />
            <section className='w-[90%] mx-auto mt-[50px]'>
                <div className='flex gap-4 items-center mb-[10px]'>
                    <div className='h-[40px] w-[20px] bg-blue-950 rounded-md'></div>
                    <h5 className='text-blue-950 text-[17px] font-semibold'>All Products</h5>
                </div>
                <div className='flex justify-between items-center mb-[50px]'>
                    <h3 className="text-[36px] font-semibold">Explore Our Products</h3>
                </div>
                <div className='flex item-center flex-wrap gap-2'>
                    {
                       products && products.map(slide => (
                            <Link to={`/product/${slide.id}`} key={slide.id} className='w-[24%] cursor-pointer'>
                                <ProductCard  img={slide.image} title={slide.title} price={slide.price} />
                            </Link>
                        ))
                    }
                </div>
            </section>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default AllProducts
