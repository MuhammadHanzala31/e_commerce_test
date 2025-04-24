import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PreFooter from '../components/PreFooter'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

function CategoryPage() {

    const [filterProduct, setFilterProduct] = useState([])

    const { category } = useParams()
    const fetchProducts = async () => {
        try {
            const products = await fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(res => res?.filter(e => e.category.includes(category)))
                .then(filterProduct => setFilterProduct(filterProduct)
                )
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='flex gap-4 items-center mb-[30px] w-[90%] mx-auto mt-[60px]'>
                <div className='h-[40px] w-[20px] bg-blue-950 rounded-md'></div>
                <h5 className='text-blue-950 text-[17px] font-semibold'>{category} Category</h5>
            </div>
            <div className='flex flex-wrap justify-center gap-3 w-[90%] mx-auto'>
                {
                    filterProduct && filterProduct.map(card => (
                        <Link to={`/product/${card.id}`} className='w-[32%]'>
                            <ProductCard img={card.image} price={card.price} title={card.title} />
                        </Link>
                    ))
                }
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default CategoryPage
