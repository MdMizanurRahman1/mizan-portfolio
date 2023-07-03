import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './Header.css';

const Header = () => {
    const [jobIndex, setJobIndex] = useState(0);
    const jobTitles = ['React Developer', 'MERN Stack Developer', 'Front-End Developer'];
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
            setAnimationKey((prevKey) => prevKey + 1);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <header id='home' className="flex flex-col md:flex-row items-center mx-5 md:mx-30 py-8 md:py-10 lg:mx-auto lg:max-w-4xl">
            <div className="md:mr-7  mb-6 md:mb-0 md:w-2/5 md:h-full">
                <img
                    className="h-96 md:h-full md:w-full rounded-lg shadow-2xl"
                    src="https://i.ibb.co/bPGV8K0/port1.jpg"
                    alt=""
                />
            </div>
            <div className="ml-0 md:pt-24 md:w-3/5">
                <h4 className="text-2xl font-semibold">Hello, I'm</h4>
                <h2 className="text-3xl font-semibold">Md Mizanur Rahman</h2>
                <h3>
                    <span className="text-2xl">I am a </span>
                    <span
                        className="font-bold text-2xl text-red-400"
                        style={{ transition: '0.8s', opacity: 0, animation: 'fadeIn 1s forwards' }}
                    >
                        <TypeAnimation
                            cursor={{ hideWhenDone: true, blink: true }}
                            sequence={jobTitles}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </span>
                </h3>
                <p className="my-6 md:my-10 text-justify">
                    I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love for
                    learning, keen attention to detail, and a strong commitment to my work.
                </p>
                <h4 className="mt-4 mb-3 text-xl font-semibold">FIND ME ON</h4>
                <div className="flex items-center mt-2">
                    <a href="https://www.facebook.com/profile.php?id=100007358370835" target="_blank" rel="noopener noreferrer" className="text-white bg-purple-700 rounded-full p-3">
                        <FaFacebook size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/mizan-rahman-8ab2251a0/" target="_blank" rel="noopener noreferrer" className="text-white bg-purple-700 rounded-full p-3 mx-2">
                        <FaLinkedin size={25} />
                    </a>
                    <a href="https://github.com/MdMizanurRahman1" target="_blank" rel="noopener noreferrer" className="text-white bg-purple-700 rounded-full p-3">
                        <FaGithub size={25} />
                    </a>
                </div>
                <div className="mt-8 text-3xl cursor-pointer container" onClick={handleScrollDown}>
                    <div className='field'></div>
                    <div className='mouse'></div>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </header>
    );
};

export default Header;
