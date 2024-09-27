import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    
    <div className='border-black border-solid p-5'>
    <ul className=' flex flex-row  pl-5 '>
            <Link to="/Home" className="m-3"><li>Home</li></Link>
            <Link to="/About" className="m-3"><li>About</li></Link>
            <li><img src="https://fontawesome.com/icons/store?f=sharp&s=solid" alt="" /></li>
        </ul>
       
    </div>
    
  )
}

export default Navbar