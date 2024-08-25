import React from 'react'
import { DiJavascript1, DiPython } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiHtml5, SiMongodb, SiNestjs } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { animate, motion } from "framer-motion";

const IconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeate: Infinity,
            repeateType: 'reverse'
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies & Skills</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={IconVariants(2.5)}
                    initial='initial'
                    animate='animate'

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className='text-7xl text-yellow-400' />
                    <p className='text-center text-neutral-400 mt-2'>JavaScript</p>
                </motion.div>

                <motion.div
                    variants={IconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-600' />
                    <p className='text-center text-neutral-400 mt-2'>React.js</p>

                </motion.div>

                <motion.div
                    variants={IconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl text-green-600' />
                    <p className='text-center text-neutral-400 mt-2'>MongoDB</p>

                </motion.div>

                <motion.div
                    variants={IconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl text-green-700' />
                    <p className='text-center text-neutral-400 mt-2'>Node.js</p>

                </motion.div>

                <motion.div
                    variants={IconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className='text-7xl text-yellow-50' />
                    <p className='text-center text-neutral-400 mt-2'>Next.js</p>

                </motion.div>

                <motion.div
                    variants={IconVariants(6)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className='text-7xl text-white' />
                    <p className='text-center text-neutral-400 mt-2'>Express.js</p>

                </motion.div>

                <motion.div
                    variants={IconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className='text-7xl text-yellow-200' />
                    <p className='text-center text-neutral-400 mt-2'>Python</p>

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
