import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Rent",
            path: "/rent"
        },
        {
            title: "Buy",
            path: "/buy"
        },
        {
            title: "Sell",
            path: "/sell"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Home",
            path: "/"
        },
    ]
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems.map((item, index) => (
                                    <li key={index}><Link href={item.path}>{item.title}</Link></li>
                                ))
                            }
                            <li>
                                <a>More</a>
                                <ul className="p-2">
                                    <li><a>Contact</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>Blog</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems.map((item, index) => (
                                <li key={index}><Link href={item.path}>{item.title}</Link></li>
                            ))
                        }
                        <li>
                            <details>
                                <summary>More</summary>
                                <ul className="p-2">
                                    <li><a>Contact</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>Blog</a></li>
                                </ul>
                            </details>
                        </li>
                   
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    {/* <a className="btn">Button</a> */}
                    <Link href={'/signup'} className='px-3 py-1 bg-blue-400 rounded text-white'>Sign Up</Link>
                    <Link href={'login'} className='px-3 py-1 bg-blue-400 rounded text-white'>Login</Link>
                </div>
            </div>

        </div>
    );
};

export default NavBar;