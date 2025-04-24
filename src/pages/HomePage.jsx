import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import BannerSlider from '../components/BannerSlider'
import CategorySlider from '../components/CategorySlider'
import ProductSlider from '../components/ProductSlider'
import StaticProductSection from '../components/StaticProductSection'
import PreFooter from '../components/PreFooter'
import Footer from '../components/Footer'
import CategorySection from '../components/CategorySection'

function HomePage() {
  return (
  <>
    <Navbar/>
    <section className='flex'>
      <Sidebar/>
      <div className='p-3  w-[80%]'>
      <BannerSlider/>
      </div>
    </section>
    <CategorySlider/>
    <StaticProductSection/>
    <CategorySection/>
    {/* <ProductSlider/> */}
    <PreFooter/>
    <Footer/>
  </>
  )
}

export default HomePage
