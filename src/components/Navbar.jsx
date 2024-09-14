import React, { useContext, useState } from 'react';
import logo from '../../public/logo.png';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import { IoIosList } from 'react-icons/io';
import { MdDarkMode } from 'react-icons/md';

const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Navbar = ({ handleThemeToggler }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(false);

    const [themeChange, setThemeChange] = useState(true)
    const handleClick = () => {
        setThemeChange(!themeChange)
        handleThemeToggler(themeChange)
    }

    return (
        <nav className='relative flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className='mx-2 lg:h-20 lg:w-20 h-10 w-10 rounded-md' alt="Logo" />
            </div>

            <div className='flex items-center'>

                {/* Mobile Toggle Button */}
                <div className='flex items-center gap-2'>
                    {
                        themeChange

                            ? <MdDarkMode onClick={handleClick} className='bg-gray-800 md:hidden h-[1.82rem] w-[1.82rem] p-1 rounded text-gray-400' />
                            : <FaLightbulb onClick={handleClick} className='bg-gray-800 md:hidden h-[1.82rem] w-[1.82rem] p-1 rounded text-white' />
                    }


                    <button className='lg:hidden flex items-center' onClick={handleToggle}>
                        <IoIosList className='   bg-gray-800 md:hidden h-[1.82rem] w-[1.82rem] p-1 rounded text-gray-400' />

                    </button>




                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className='fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center z-50'>
                        <button className='absolute top-4 right-4 text-white text-2xl' onClick={handleToggle}>
                            &times;
                        </button>
                        <motion.ul
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='flex flex-col items-center space-y-6'
                        >
                            <a href="#about" onClick={handleClose}>
                                <li className='bg-neutral-900 text-white px-5 py-3 rounded-md w-full text-center cursor-pointer hover:border-b hover:border-t hover:bg-neutral-800 hover:w-[100%]'>About</li>
                            </a>
                            <a href="#skills" onClick={handleClose}>
                                <li className='bg-neutral-900 text-white px-5 py-3 rounded-md w-full text-center cursor-pointer hover:border-b hover:border-t hover:bg-neutral-800 hover:w-[100%] '>Skills</li>
                            </a>
                            <a href="#experience" onClick={handleClose}>
                                <li className='bg-neutral-900 text-white px-5 py-3 rounded-md w-full text-center cursor-pointer hover:border-b hover:border-t hover:bg-neutral-800'>Experience</li>
                            </a>
                            <a href="#project" onClick={handleClose}>
                                <li className='bg-neutral-900 text-white px-5 py-3 rounded-md w-full text-center cursor-pointer hover:border-b hover:border-t hover:bg-neutral-800 hover:w-[100%]'>Project</li>
                            </a>
                            <a href="#contact" onClick={handleClose}>
                                <li className='bg-neutral-900 text-white px-5 py-3 rounded-md w-full text-center cursor-pointer hover:border-b hover:border-t hover:bg-neutral-800 hover:w-[100%]'>Contact</li>
                            </a>
                        </motion.ul>
                    </div>
                )}
                {/* Desktop Menu */}
                <motion.ul
                    variants={container(0)}
                    initial='hidden'
                    animate='visible'
                    className='hidden lg:flex lg:w-1/2 lg:flex-row items-center justify-between lg:space-x-4'
                >
                    <a href="#about">
                        <li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer btn-underline-hover'>About</li>
                    </a>
                    <a href="#skills">
                        <li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer btn-underline-hover'>Skills</li>
                    </a>
                    <a href="#experience">
                        <li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer btn-underline-hover'>Experience</li>
                    </a>
                    <a href="#project">
                        <li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer btn-underline-hover'>Project</li>
                    </a>
                    <a href="#contact">
                        <li className='bg-neutral-900 hover:text-white box-border px-5 py-3 rounded-md text-neutral-400 w-32 text-center mx-1 hover:border-b hover:border-t cursor-pointer btn-underline-hover'>Contact</li>
                    </a>
                    <div>

                        {
                            themeChange

                                ? <MdDarkMode onClick={handleClick} className='bg-gray-800  h-[2.65rem] btn-underline w-11 p-2 rounded text-gray-400' />
                                : <FaLightbulb onClick={handleClick} className='bg-black  h-[2.65rem] btn-underline w-11 p-2 rounded text-white' />
                        }
                    </div>
                </motion.ul>

            </div>

        </nav>
    );
};

export default Navbar;
