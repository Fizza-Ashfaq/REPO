import React from 'react'
import {Link} from 'react-router-dom'
// import { Fashop } from 'react-icons/fa'
function Navbar() {
  return (
    
    <div className='border-black border-solid p-5'>
    <ul className=' flex flex-row  pl-5 '>
            <Link to="/Home" className="m-3"><li>Home</li></Link>
            <Link to="/About" className="m-3"><li>About</li></Link>
        </ul>
        {/* <div className='text-center justify-center'>
        <Fashop/>
        </div> */}
    </div>
    
  )
}

export default Navbar