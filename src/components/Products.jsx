import React from 'react'
import P1 from './P1'
import P2 from './P2'
import P3 from './P3'
import P4 from './P4'

function Products() {
  return (
  <>
  <h1 className='text-lg justify-center text-center m-5'>Featured Products</h1>
    <div className='flex flex-wrap justify-center items-center'>
      <P1/>
      <P2/>
      <P3/>
      <P4/>
    </div>
    </>
  )
}

export default Products