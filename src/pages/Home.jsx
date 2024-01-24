import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import FoodsItem from '../components/FoodsItem'
import Gallery from '../components/Gallery'
import Ratting from '../components/Ratting'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
  
      <Banner/>
      <About/>
      <FoodsItem/>
      <Gallery/>
      <Ratting/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home