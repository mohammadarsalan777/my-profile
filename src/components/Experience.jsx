import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants/index'


const Experience = ({ themeToggle }) => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className={`${themeToggle ? 'text-black my-20 text-center text-4xl' : 'my-20 text-center text-4xl'}`}>Experience</motion.h1>
            <div>
                {
                    EXPERIENCES.map((expricence, index) => {
                        return (
                            <div key={index} className={`${themeToggle ? 'mb-8 flex flex-wrap lg:justify-center text-black' : 'mb-8 flex flex-wrap lg:justify-center dark:text-neutral-400'}`}>

                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    className="w-full lg:w-1/4">
                                    <p className="mb-2 mt-2 text-sm ">{expricence.year}</p>
                                </motion.div>

                                < motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                    className="w-full max-w-xl lg:w-3/4">
                                    <h6 className="mb-2 font-semibold ">
                                        {expricence.role}
                                        <span className="text-sm"> - {expricence.company}</span>
                                    </h6>
                                    <p className="mb-4 text-justify">{expricence.description}</p>
                                    <div className='flex flex-wrap'>
                                        {
                                            expricence.technologies.map((tech, index) => (
                                                <span key={index} className={`${themeToggle ? 'text-purple-800 bg-white mr-2 mt-4 rounded border border-neutral-900 px-2 py-1 text-sm font-medium' : 'text-purple-800 mr-2 mt-4 rounded dark:bg-neutral-900 px-2 py-1 text-sm font-medium'}`}>{tech}</span>
                                            ))
                                        }

                                    </div>
                                </ motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience
