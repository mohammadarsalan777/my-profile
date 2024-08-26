import React from 'react';
import { DiJavascript1, DiPython } from 'react-icons/di';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'framer-motion';

const iconData = [
    { id: 1, IconComponent: FaHtml5, color: 'text-orange-500', name: 'HTML', duration: 6 },
    { id: 2, IconComponent: FaCss3Alt, color: 'text-blue-500', name: 'CSS', duration: 4 },
    { id: 3, IconComponent: DiJavascript1, color: 'text-yellow-400', name: 'JavaScript', duration: 2.5 },
    { id: 4, IconComponent: RiReactjsLine, color: 'text-cyan-600', name: 'React.js', duration: 2.5 },
    { id: 5, IconComponent: SiMongodb, color: 'text-green-600', name: 'MongoDB', duration: 3 },
    { id: 6, IconComponent: FaNodeJs, color: 'text-green-700', name: 'Node.js', duration: 5 },
    { id: 7, IconComponent: TbBrandNextjs, color: 'text-yellow-50', name: 'Next.js', duration: 2 },
    { id: 8, IconComponent: SiExpress, color: 'text-white', name: 'Express.js', duration: 6 },
    { id: 9, IconComponent: DiPython, color: 'text-yellow-200', name: 'Python', duration: 4 },
    { id: 10, IconComponent: FaBootstrap, color: 'text-purple-600', name: 'Bootstrap', duration: 6 },
    { id: 11, IconComponent: RiTailwindCssFill, color: 'text-blue-600', name: 'Tailwind', duration: 2 },
];

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
});

const TechnologyCard = ({ IconComponent, color, name, duration }) => (
    <motion.div
        variants={iconVariants(duration)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
        aria-label={name}
    >
        <IconComponent className={`text-7xl ${color}`} />
        <p className="mt-2 text-center text-neutral-400">{name}</p>
    </motion.div>
);

const Technologies = () => (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
        >
            Technologies & Skills
        </motion.h2>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
        >
            {iconData.map(({ id, IconComponent, color, name, duration }) => (
                <TechnologyCard key={id} IconComponent={IconComponent} color={color} name={name} duration={duration} />
            ))}
        </motion.div>
    </div>
);

export default Technologies;
