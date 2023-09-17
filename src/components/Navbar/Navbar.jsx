import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/products/:id', name: 'Product Details', id: 'productDetails' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'Not Found', id: 'notFound' }
      ];

      
    return (
        <nav>
        <ul className='md:flex'>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
        </nav>
    );
};

export default Navbar;