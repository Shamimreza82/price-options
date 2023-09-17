import React, { useState } from 'react';
import Link from '../Link/Link';
import { FaAlignJustify, FaChevronDown } from "react-icons/fa";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/products/:id', name: 'Product Details', id: 'productDetails' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'Not Found', id: 'notFound' }
      ];

      
    return (
        <nav className='text-black bg-blue-500 flex lg:justify-center'>
            <div className=' md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <FaChevronDown></FaChevronDown> :
                     <FaAlignJustify className='text-2xl text-white'></FaAlignJustify>
                }
            
            </div>
        <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-8' : '-top-60'}
            bg-blue-500`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
        </nav>
    );
};

export default Navbar;