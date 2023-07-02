import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div className='md:px-24 md:pt-20 md:pb-32 lg:px-24 lg:pt-20 lg:pb-32 '>
            <h2 className='text-center text-2xl mb-7'>Projects</h2>
            <div id='projects' className='md:flex lg:flex gap-7'>
                <div className="card w-96 shadow-xl mx-auto">
                    <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src="https://i.ibb.co/W0Vqws1/sports-academy-server-web-app-1.png"
                                alt=""
                                className="w-full object-cover object-top rounded-lg p-3"
                            />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Sports Academy</h2>
                        <p>A Summer School Camp Website</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl mx-auto my-8 md:my-0">
                    <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src="https://i.ibb.co/q7p1NJp/toy-client-side-web-app-i-Pad-Air.png"
                                alt=""
                                className="w-full object-cover object-top rounded-lg p-3"
                            />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Sports Club</h2>
                        <p>Toy marketplace website</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl mx-auto">
                    <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                            <img
                                src="https://i.ibb.co/d0pkc46/food-hub-eaff5-web-app-i-Pad-Air.png"
                                alt=""
                                className="w-full object-cover object-top rounded-lg p-3"
                            />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Thai Food Hubs</h2>
                        <p>Chef Recipe Hunter website</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;

