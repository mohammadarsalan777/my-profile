import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from 'framer-motion'
import { FaLink } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                src={project.image}

                                className="mt-1 mb-6 rounded lg:w-[250px] lg:h-[150px] w-full "
                                alt={project.title}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}
                                <br />
                                <span className="flex gap-2 mb-0 ">

                                    <a href={project.liveLink} className="">
                                        <span className="my-4 flex items-center  hover:text-white hover:underline" >
                                            <span className="mr-2 text-medium ">Live</span><LuExternalLink className="text-pink-800 " />
                                        </span>
                                    </a>
                                    <a href={project.sourceLink} className="">
                                        <span className="my-4 flex items-center  hover:text-white hover:underline" >
                                            <span className="ml-2 text-medium ">Source Code</span><TbSourceCode className="text-pink-800" />
                                        </span>
                                    </a>
                                </span>
                            </p>

                            <div>
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-purple-800 mr-2 lg:mt-0 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Projects;
