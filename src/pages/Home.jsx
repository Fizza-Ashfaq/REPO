import React from 'react'
import Navbar from '../components/Navbar'
import Collection from '../components/Collection'
import HeroSec from '../components/HeroSec'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <div>
    <Navbar/>
    <HeroSec/>
    <Collection/>
    <Footer/>
    </div>
    </>
  )
}

export default Home