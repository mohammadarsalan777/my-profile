import React from 'react'
// import logo from '../assets/kevinRushLogo.png'
import logo from '../../public/logo.png'
import { motion } from 'framer-motion'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})
const Navbar = () => {
    return (
        <nav className=' flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className='mx-2 lg:h-20 lg:w-20 h-10 w-10 rounded-md' alt="Logo" />
            </div>
            <motion.ul
                variants={container(0)}
                initial='hidden'
                animate='visible'
                className='lg:w-1/2 flex justify-between'>
                <a href=""></a><li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer '>About</li>
                <a href=""></a><li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer '>Skills</li>
                <a href=""></a><li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer '>Experience </li>
                <a href=""></a><li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer '>Project </li>
                <a href=""></a><li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer '>Contact</li>
            </motion.ul>
        </nav>
    )
}

export default Navbar
