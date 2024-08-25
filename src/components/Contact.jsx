import React from 'react'
import { CONTACT } from "../constants/index"
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                className='my-20 text-center text-4xl'>Contact</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.2 }}
                    className='my-4'>{CONTACT.address}</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.2 }}
                    className='my-4'>{CONTACT.phoneNo}</motion.p>
                <a href="#" className='border-b'>{CONTACT.email}</a>

            </div>
        </div>
    )
}

export default Contact
