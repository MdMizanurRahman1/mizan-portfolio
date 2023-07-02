import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';
import './About.css';

const About = () => {
    const handleDownload = () => {
        const url = '/public/resume.pdf';
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'resume.pdf';
        anchor.click();
    }


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id='aboutMe' className="hero min-h-screen bg-gray-500 md:px-32">
            <div className="hero-content flex-col lg:flex-row-reverse gap-7">
                <div className='md:w-2/5'>
                    <Fade direction="right">
                        <img
                            src="https://i.ibb.co/ByB9VzG/aboutmejpg.jpg"
                            className=" h-96 object-cover rounded-lg shadow-2xl"
                            alt="About Me"
                        />
                    </Fade>
                </div>
                <div className='md:w-3/5'>
                    <Fade direction="left">
                        <div>
                            <h1 className="text-2xl font-bold">About me</h1>
                            <h1 className="text-3xl font-bold text-red-400">I am available for your Project</h1>
                            <p className="py-6 text-justify">
                                Hello! I'm Md Mizanur Rahman, living in Finland. I am dedicated to learning
                                and mastering new technologies, and coding has become my true passion. I invest a
                                significant amount of time in staying up-to-date with the latest trends and honing my
                                skills. If you have an exciting project in mind, I'm all ears! Feel free to explore my
                                resume below to gain a better understanding of my skills and experience. Let's connect
                                and bring your project to life together!
                            </p>
                            <button onClick={handleDownload} className="btn bg-purple-700 btn-sm text-white font-bold">Download Resume</button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;
