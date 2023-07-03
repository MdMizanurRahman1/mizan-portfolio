import React, { useState } from 'react';
import { FaArrowRight, FaLink } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState(null);

    const openModal = (modalId) => {
        setModalOpen(modalId);
    };

    const closeModal = () => {
        setModalOpen(null);
    };

    return (
        <div className="md:px-24 md:pt-20 md:pb-32 lg:px-24 lg:pt-20 lg:pb-32">
            <h2 className="text-center text-2xl mb-7">Projects</h2>
            <div id="projects" className="md:flex lg:flex gap-7">
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
                            <button className="btn btn-primary" onClick={() => openModal('modal1')}>
                                <FaArrowRight />
                            </button>
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
                            <button className="btn btn-primary" onClick={() => openModal('modal2')}>
                                <FaArrowRight />
                            </button>
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
                            <button className="btn btn-primary" onClick={() => openModal('modal3')}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen === 'modal1' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="modal-container bg-slate-600 p-8 rounded-lg flex flex-col md:flex-row items-start justify-start my-14 gap-7 w-4/5 h-5/6 overflow-y-auto">
                        <div className='md:w-1/2'>
                            <img
                                src="https://i.ibb.co/cX6pV5F/sports-academy-server-web-app-i-Pad-Air-1.png"
                                className="max-w-sm rounded-lg shadow-2xl h-72 w-72 md:h-96 md:w-96"
                                alt=""
                            />
                            <div className="md:flex gap-4 py-4 mt-2">
                                <a className='flex justify-center items-center' href="https://sports-academy-server.web.app/">Live website <span><BsBoxArrowUpRight className='ml-2' /></span></a>
                                <a className='flex justify-center items-center' href="https://github.com/MdMizanurRahman1/sports-academy-client">Client-site link <span><FaLink className='ml-2' /></span></a>
                                <a className='flex justify-center items-center' href="https://github.com/MdMizanurRahman1/sports-academy-server">Server-site link <span><FaLink className='ml-2' /></span></a>
                            </div>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <h1 className="text-xl font-bold mb-3">Techologies Used:</h1>
                            <p>React js, React router, React query, axios, Tailwind CSS, DaisyUI, MongoDb, Exrpess js, Firebase, Stripe and JWT</p>
                            <h1 className="text-xl font-bold pt-4">Key Features:</h1>
                            <div className="pt-4">
                                <p><span className="text-white font-bold mr-2">&#x25C7;</span>
                                    Student Enrollment: Students can log in and enroll in summer school camps using Stripe payment integration, ensuring a seamless enrollment process.
                                </p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Payment History Tracking: Students can view their payment history, providing transparency and easy access to past transactions.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Instructor Dashboard: Instructors have access to a dedicated dashboard where they can add classes, track class status, and receive valuable feedback from the admin.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Admin Management: Admins can manage users and classes, including approving or denying class requests, assigning roles (student/instructor/admin), and providing feedback.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>User-Friendly Interface: The website offers a user-friendly interface that ensures a smooth and intuitive experience for all users.</p>
                                <p className="py-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Dark/Light Theme Options: Users have the ability to switch between dark and light themes, enhancing personalization and visual preferences.</p>
                            </div>
                            <h1 className="text-xl font-bold pt-4">Details:</h1>
                            <p className="pt-2">
                                I have completed a website called "Sports Academy" for summer school camps.
                                The website offers various features to enhance the experience for students, instructors, and admins.
                                Students can easily enroll in summer school camps by logging in and making payments through Stripe integration.
                                They can also track their payment history and view their enrolled classes.
                                Instructors have their own dashboard where they can add classes, monitor class status, and receive feedback from the admin. Admins have full control over user and class management, including approving or denying class requests, assigning roles, and providing feedback.
                                The website boasts a user-friendly interface and provides the option to choose between dark and light themes for a personalized experience. It showcases a seamless and efficient system for managing summer school camps, making it a valuable addition to my portfolio.
                            </p>
                            <div className='justify-end card-actions'>
                                <button className=" w-20 mt-4" onClick={closeModal}>
                                    <RiCloseLine className='font-bold text-5xl' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}



            {modalOpen === 'modal2' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="modal-container bg-slate-600 p-8 rounded-lg flex flex-col md:flex-row items-start justify-start my-14 gap-7 w-3/4 h-5/6 overflow-y-auto">
                        <div className='md:w-1/2'>
                            <img
                                src="https://i.ibb.co/KwW3BBN/toy-client-side-web-app-i-Pad-Air-2.png"
                                className="max-w-sm rounded-lg shadow-2xl h-72 w-72 md:h-96 md:w-96"
                                alt=""
                            />
                            <div className="md:flex gap-4 py-4 mt-2">
                                <a className='flex justify-center items-center' href="https://toy-client-side.web.app/">Live website <span><BsBoxArrowUpRight className='ml-2' /></span></a>
                                <a className='flex justify-center items-center' href="https://github.com/MdMizanurRahman1/toy-client-side">Client-site link <span><FaLink className='ml-2' /></span></a>
                                <a className='flex justify-center items-center' href="https://github.com/MdMizanurRahman1/toy-server-site">Server-site link <span><FaLink className='ml-2' /></span></a>
                            </div>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <h1 className="text-xl font-bold mb-3">Techologies Used:</h1>
                            <p>React js, React router, React query, axios, Tailwind CSS, DaisyUI, MongoDb, Exrpess js, Firebase, Stripe and JWT</p>
                            <h1 className="text-xl font-bold pt-4">Key Features:</h1>
                            <div className="pt-4">
                                <p><span className="text-white font-bold mr-2">&#x25C7;</span>
                                    Student Enrollment: Students can log in and enroll in summer school camps using Stripe payment integration, ensuring a seamless enrollment process.
                                </p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Payment History Tracking: Students can view their payment history, providing transparency and easy access to past transactions.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Instructor Dashboard: Instructors have access to a dedicated dashboard where they can add classes, track class status, and receive valuable feedback from the admin.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Admin Management: Admins can manage users and classes, including approving or denying class requests, assigning roles (student/instructor/admin), and providing feedback.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>User-Friendly Interface: The website offers a user-friendly interface that ensures a smooth and intuitive experience for all users.</p>
                                <p className="py-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Dark/Light Theme Options: Users have the ability to switch between dark and light themes, enhancing personalization and visual preferences.</p>
                            </div>
                            <h1 className="text-xl font-bold pt-4">Details:</h1>
                            <p className="pt-2">
                                I have completed a website called "Sports Academy" for summer school camps.
                                The website offers various features to enhance the experience for students, instructors, and admins.
                                Students can easily enroll in summer school camps by logging in and making payments through Stripe integration.
                                They can also track their payment history and view their enrolled classes.
                                Instructors have their own dashboard where they can add classes, monitor class status, and receive feedback from the admin. Admins have full control over user and class management, including approving or denying class requests, assigning roles, and providing feedback.
                                The website boasts a user-friendly interface and provides the option to choose between dark and light themes for a personalized experience. It showcases a seamless and efficient system for managing summer school camps, making it a valuable addition to my portfolio.
                            </p>
                            <div className='justify-end card-actions'>
                                <button className=" w-20 mt-4" onClick={closeModal}>
                                    <RiCloseLine className='font-bold text-5xl' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }


            {
                modalOpen === 'modal3' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="modal-container bg-slate-600 p-8 rounded-lg flex flex-col md:flex-row items-start justify-start my-14 gap-7 w-3/4 h-5/6 overflow-y-auto">
                            <div className='md:w-1/2'>
                                <img
                                    src="https://i.ibb.co/V3Bn6N3/food-hub-eaff5-web-app-i-Pad-Air-1.png"
                                    className="max-w-sm rounded-lg shadow-2xl h-72 w-72 md:h-96 md:w-96"
                                    alt=""
                                />
                                <div className="md:flex gap-4 py-4 mt-2">
                                    <a className='flex justify-center items-center' href="https://food-hub-eaff5.web.app/">Live website <span><BsBoxArrowUpRight className='ml-2' /></span></a>
                                    <a className='flex justify-center items-center' href="https://github.com/MdMizanurRahman1/food-hub">Client-site link <span><FaLink className='ml-2' /></span></a>
                                    <a className='flex justify-center items-center' href="https://github.com/MdMizanurRahman1/thai-food-hubs-server">Server-site link <span><FaLink className='ml-2' /></span></a>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-1/2">
                                <h1 className="text-xl font-bold mb-3">Techologies Used:</h1>
                                <p>React js, React router, React query, axios, Tailwind CSS, DaisyUI, MongoDb, Exrpess js, Firebase, Stripe and JWT</p>
                                <h1 className="text-xl font-bold pt-4">Key Features:</h1>
                                <div className="pt-4">
                                    <p><span className="text-white font-bold mr-2">&#x25C7;</span>
                                        Student Enrollment: Students can log in and enroll in summer school camps using Stripe payment integration, ensuring a seamless enrollment process.
                                    </p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Payment History Tracking: Students can view their payment history, providing transparency and easy access to past transactions.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Instructor Dashboard: Instructors have access to a dedicated dashboard where they can add classes, track class status, and receive valuable feedback from the admin.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Admin Management: Admins can manage users and classes, including approving or denying class requests, assigning roles (student/instructor/admin), and providing feedback.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>User-Friendly Interface: The website offers a user-friendly interface that ensures a smooth and intuitive experience for all users.</p>
                                    <p className="py-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Dark/Light Theme Options: Users have the ability to switch between dark and light themes, enhancing personalization and visual preferences.</p>
                                </div>
                                <h1 className="text-xl font-bold pt-4">Details:</h1>
                                <p className="pt-2">
                                    I have completed a website called "Sports Academy" for summer school camps.
                                    The website offers various features to enhance the experience for students, instructors, and admins.
                                    Students can easily enroll in summer school camps by logging in and making payments through Stripe integration.
                                    They can also track their payment history and view their enrolled classes.
                                    Instructors have their own dashboard where they can add classes, monitor class status, and receive feedback from the admin. Admins have full control over user and class management, including approving or denying class requests, assigning roles, and providing feedback.
                                    The website boasts a user-friendly interface and provides the option to choose between dark and light themes for a personalized experience. It showcases a seamless and efficient system for managing summer school camps, making it a valuable addition to my portfolio.
                                </p>
                                <div className='justify-end card-actions'>
                                    <button className=" w-20 mt-4" onClick={closeModal}>
                                        <RiCloseLine className='font-bold text-5xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    );
};

export default Portfolio;
