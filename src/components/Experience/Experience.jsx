import React from 'react';
import './Experience.css';
import { FaHtml5, FaCss3, FaReact, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiJavascript, SiMongodb, SiFirebase } from 'react-icons/si';
import Reveal from 'react-awesome-reveal';

const Experience = () => {
    return (
        <div id='skills' className='my-20 md:mx-40'>
            <h2 className="text-3xl text-center mt-24">Skills</h2>
            <div className="grid grid-cols-4 gap-7 mt-7">
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="left" duration={500} cascade>
                        <FaHtml5 className="text-orange-500 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="left" duration={500} cascade>
                        <span className="mt-2">HTML</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="right" duration={500} cascade>
                        <FaCss3 className="text-blue-500 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="right" duration={500} cascade>
                        <span className="mt-2">CSS</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="up" duration={500} cascade>
                        <SiTailwindcss className="text-blue-300 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="up" duration={500} cascade>
                        <span className="mt-2">Tailwind</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="down" duration={500} cascade>
                        <SiBootstrap className="text-purple-500 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="down" duration={500} cascade>
                        <span className="mt-2">Bootstrap</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="left" duration={500} cascade>
                        <SiJavascript className="text-yellow-500 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="left" duration={500} cascade>
                        <span className="mt-2">Javascript</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="right" duration={500} cascade>
                        <FaReact className="text-blue-400 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="right" duration={500} cascade>
                        <span className="mt-2">React</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="up" duration={500} cascade>
                        <SiMongodb className="text-green-500 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="up" duration={500} cascade>
                        <span className="mt-2">MongoDB</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="down" duration={500} cascade>
                        <FaDatabase className="text-red-500 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="down" duration={500} cascade>
                        <span className="mt-2">Express.js</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="left" duration={500} cascade>
                        <SiFirebase className="text-yellow-400 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="left" duration={500} cascade>
                        <span className="mt-2">Firebase</span>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center col-span-1">
                    <Reveal className="icon-reveal" direction="right" duration={500} cascade>
                        <FaGithub className="text-gray-500 text-5xl hover:scale-125 transform transition-transform duration-300" />
                    </Reveal>
                    <Reveal className="text-reveal" direction="right" duration={500} cascade>
                        <span className="mt-2">GitHub</span>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Experience;
