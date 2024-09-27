import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShop, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='border-black border-solid p-5'>
      <div className="flex justify-between items-center">
        {/* Left side - Home and About links */}
        <ul className='flex flex-row'>
          <Link to="/Home" className="m-3"><li>Home</li></Link>
          <Link to="/About" className="m-3"><li>About</li></Link>
        </ul>

        {/* Center - Home Icon */}
        <div className='text-center'>
          <FontAwesomeIcon icon={faShop} className="cursor-pointer m-3 size-10" />
        </div>

        <ul className='flex flex-row'>
          <li><FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer m-3" /></li>
          <li><FontAwesomeIcon icon={faBagShopping} className="cursor-pointer m-3" /></li>
          <li><FontAwesomeIcon icon={faUser} className="cursor-pointer m-3" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
