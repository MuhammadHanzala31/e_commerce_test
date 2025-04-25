import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import iphine from '../assets/iphone.png'
import CategorySliderSlide from "./CategorySliderSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app.css";

function CategorySlider() {

  // const categories = [
  //   {
  //     id : 1,
  //     name : 'Gaming'
  //   },
  //   {
  //     id : 2,
  //     name : 'HeadPhones'
  //   },
  //   {
  //     id : 3,
  //     name : 'SmartWatch'
  //   },
  //   {
  //     id : 4,
  //     name : 'Computers'
  //   },
  //   {
  //     id : 5,
  //     name : 'Phones'
  //   },
  //   {
  //     id : 6,
  //     name : 'Gaming'
  //   },
  // ]


  const [categories, setcategories] = useState([]);

  const fetchProducts = async ()=>{
        try {
            const products = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setcategories(res))
        } catch (error) {
            console.log(error.message)
        }
    }

    const uniqueCategories = [...new Set(categories?.map(item => item.category))];

    console.log(uniqueCategories)

    useEffect(()=>{
      fetchProducts()
    },[fetchProducts, categories])

   

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='container relative w-[80%] mx-auto my-[50px] py-[30px] border-b-2 border-[#b0b2b4]'>
      <div className='flex gap-4 items-center mb-[30px]'>
        <div className='h-[40px] w-[20px] bg-blue-950 rounded-md'></div>
        <h5 className='text-blue-950 text-[17px] font-semibold'>Categories</h5>
      </div>
      <div className='flex justify-between items-center mb-[50px]'>
       <h3 className="text-[36px] font-semibold">Browse By Category</h3>
      </div>
      <div>
      <Slider {...settings} className="my-slider">
       {
        uniqueCategories && uniqueCategories.map((slide, i) => (
          <CategorySliderSlide key={i} title={slide}/>
        ))
       }
      </Slider>
      </div>
    </div>
  )
}

export default CategorySlider
