import React, { useState } from 'react'
import {menu, close} from '../assets'

import { navLinks } from '../constants'

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex justify-between py-10 items-center px-8 '>
            <a className='font-bold text-[20px]'>JobLess</a>
            <ul className='list-none sm:flex hidden items-center'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-normal cursor-pointer text-[18px] ${active === nav.title ? "text-black font-bold" : "text-cyan-900"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <button className='sm:flex hidden outline outline-2 outline- rounded-xl p-[12px] text-black hover:outline-[#001AFF]'>Sign Up</button>

            <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain fill-black"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#001AFF] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <div className='flex justify-end flex-1 flex-col items-start'>

          <ul className='list-none mb-4'>
                {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={`font-normal cursor-pointer text-[18px] ${active === nav.title ? "text-yellow-500 font-bold" : "text-white font-bold"
                } ${index === navLinks.length - 1 ? " mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <button className='outline outline-2 outline- rounded-xl p-[12px] text-white hover:outline-white'>Sign Up</button>
                </div>
        </div>
      </div>

        </nav>
    )
}

export default Navbar