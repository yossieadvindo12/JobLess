import React, { useState } from 'react'


import { navLinks } from '../constants'

const Navbar = () => {
    const [active, setActive] = useState("Home");
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
            <button className='outline outline-2 outline- rounded-xl p-[12px] text-black hover:outline-[#001AFF]'>Sign Up</button>
        </nav>
    )
}

export default Navbar