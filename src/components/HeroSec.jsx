import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
function HeroSec() {
  return (
    <div className='flex flex-wrap justify-center content-center h-96 min-w-full w-full bg-gradient-to-r from-purple-500 to-pink-400 m-2'>
      <div className='text-center'>
          <FontAwesomeIcon icon={faShop} className="cursor-pointer m-32 size-64 opacity-50" />
        </div>
      <div className='w-96 justify-center content-center '>
      <h1 className='font-bold text-xl mb-5'>Shoe Collection</h1>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum numquam praesentium vitae quasi nemo neque voluptates obcaecati illo beatae.</p>
      <button className='border-solid bg-slate-50 p-3 mt-5 rounded-lg font-bold text-purple-500'>SHOP NOW</button> 
      </div>
    </div>
  )
}

export default HeroSec