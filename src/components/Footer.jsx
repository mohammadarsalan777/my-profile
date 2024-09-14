import React from 'react'

const Footer = ({ themeToggle }) => {
    return (
        <div className='text-center'>
            <p className={`${themeToggle ? 'text-black' : 'text-neutral-400'}`}>Developed by <b className='text-purple-800'>@Mohammad Arsalan</b></p>
        </div>
    )
}

export default Footer
