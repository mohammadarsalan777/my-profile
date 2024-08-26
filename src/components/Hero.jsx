import React from "react";
// import HERO_CONTENT from '../constants/index.js'
import profilePic from "../assets/gif.webp";
// import profilePic from "../../public/about.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";



const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className=" w-full lg:pb-16 text-4xl font-thin  tracking-tight lg:mt-16 lg:text-6xl"
                        >
                            Mohammad Arsalan
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500  to-purple-500  bg-clip-text lg:text-4xl text-2xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 lg:font-light text-neutral-400  text-justify"
                        >
                            {HERO_CONTENT}

                        </motion.p>
                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className=" flex items-center justify-center gap-4 text-2xl lg:mb-0 mb-8"
                        >
                            <a href="https://www.linkedin.com/in/mohammad-arsalan-408762256/">
                                <FaLinkedin className="cursor-pointer" />
                            </a>
                            <a href="https://github.com/mohammadarsalan777/">
                                <FaGithub className="cursor-pointer" />
                            </a>
                            <a href="/src/assets/Mohammad_Arsalan_Resume.pdf">

                                <span className="bg-neutral-900 text-sm hover:text-white box-border px-4 py-3 rounded-md text-neutral-400 w-28 text-center mx-1 cursor-pointer flex items-center justify-between">
                                    <BiDownload className="text-pink-800" /> <span>Resume</span>
                                </span>
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full items-center lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            src={profilePic}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="object-cover rounded-xl w-full lg:h-[400px]"
                            alt="Profile "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
