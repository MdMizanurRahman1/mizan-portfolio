import React, { useState } from 'react';
import { FaArrowRight, FaInfoCircle, FaLink, FaTools } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { AiOutlineFolderOpen, AiOutlineKey } from 'react-icons/ai';

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
            <h2 className="text-center text-3xl mb-10 font-bold">
                <AiOutlineFolderOpen className="inline-block mr-2 text-red-400" />
                Projects
            </h2>
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
                            <button className="btn btn-error btn-sm hover:bg-red-500" onClick={() => openModal('modal1')}>
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
                            <button className="btn btn-error btn-sm hover:bg-red-500" onClick={() => openModal('modal2')}>
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
                            <button className="btn btn-error btn-sm hover:bg-red-500" onClick={() => openModal('modal3')}>
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
                            <h1 className="text-xl font-bold mb-3 text-red-400">
                                <FaTools className="inline-block mr-2" />
                                Technologies Used:
                            </h1>
                            <p>React js, React router, React query, axios, Tailwind CSS, DaisyUI, MongoDb, Exrpess js, Firebase, Stripe and JWT</p>
                            <h1 className="text-xl font-bold pt-4 text-red-400">
                                <AiOutlineKey className="inline-block mr-2" />
                                Key Features:
                            </h1>
                            <div className="pt-4 text-justify">
                                <p><span className="text-white font-bold mr-2">&#x25C7;</span>
                                    Student Enrollment: Students can sign in and join summer school camps by making payments through Stripe, making the enrollment process easy and smooth.
                                </p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Payment History Tracking: Students can see their payment history, which helps them easily access and keep track of their past transactions.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Instructor Dashboard: Instructors have a special dashboard where they can add classes, check the status of their classes, and receive important feedback from the admin.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Admin Management: Admins have control over managing users and classes. They can approve or reject class requests, assign roles (student/instructor/admin), and provide feedback.</p>
                                <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>User-Friendly Interface: The website has a simple and intuitive interface that ensures a smooth experience for all users.</p>
                                <p className="py-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Dark/Light Theme Options: Users can choose between dark and light themes according to their personal preferences, making the website more personalized and visually appealing.</p>

                            </div>
                            <h1 className="text-xl font-bold pt-4 text-red-400">
                                <FaInfoCircle className="inline-block mr-2" />
                                Details:
                            </h1>
                            <p className="pt-2 text-justify">
                                This website is all about a Sports Academy and Summer Camp School. It mainly focuses on organizing summer tours and school classes.

                                The website has an administrator who can easily manage user roles and class arrangements. Instructors are responsible for adding, updating, and deleting classes. However, the administrator has the authority to reject these classes if needed.

                                Users visiting the website have various functionalities available to them. They can register and create an account, log in using their credentials, select classes they are interested in, purchase courses, and choose their preferred payment method.

                                The technologies used to build this website are React.js, Tailwind, DaisyUI, Firebase, Express.js, MongoDB, and Node.js. These technologies work together to provide a smooth and efficient user experience.
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
                modalOpen === 'modal2' && (
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
                                <h1 className="text-xl font-bold mb-3 text-red-400">
                                    <FaTools className="inline-block mr-2" />
                                    Technologies Used:
                                </h1>
                                <p> React router, React.js, MongoDB, Node.js, Tailwind, DaisyUI, Express.js,react hook form and Firebase.</p>
                                <h1 className="text-xl font-bold pt-4 text-red-400">
                                    <AiOutlineKey className="inline-block mr-2" />
                                    Key Features:
                                </h1>
                                <div className="pt-4 text-justify">
                                    <p><span className="text-white font-bold mr-2">&#x25C7;</span>
                                        Toys Collection: This website is mainly based on toy selling for kids.There will be different sections that displaying toys for kids.
                                    </p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>User Authentication: Users can easily register and login to see the toys features.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>CRUD Operations: Users can handle adding toys, updating, deleting toys field.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Toy Details: Users can see the toy details of the specific toys and their descriptions.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Search Functionality: There is search options where users can easily search the products by their names.</p>

                                </div>
                                <h1 className="text-xl font-bold pt-4 text-red-400">
                                    <FaInfoCircle className="inline-block mr-2" />
                                    Details:
                                </h1>
                                <p className="pt-2 text-justify">
                                    I made a Toy website where people can find lots of different kind of toys. When users sign up and log in, they can do more things like adding, deleting, and changing their toy collection using CRUD actions.

                                    Users can search for specific toys easily and arrange them by name to find the best choices.

                                    The website gives all the information about each toy, like descriptions and pictures, so users can make easy decisions.

                                    It's a smooth and fun website for users to find and take care of their suitable toys easily.
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
                                <h1 className="text-xl font-bold mb-3 text-red-400">
                                    <FaTools className="inline-block mr-2" />
                                    Technologies Used:
                                </h1>
                                <p>React.js, React Router DOM, Bootstrap, and Firebase.</p>
                                <h1 className="text-xl font-bold pt-4 text-red-400">
                                    <AiOutlineKey className="inline-block mr-2" />
                                    Key Features:
                                </h1>
                                <div className="pt-4 text-justify">
                                    <p><span className="text-white font-bold mr-2">&#x25C7;</span>
                                        Culinary Expert Selection: The website focuses on handpicking the top culinary experts, allowing users to discover talented chefs with exceptional skills.
                                    </p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Chef and Recipe Details: Users can explore detailed profiles of chefs, including their background, expertise, and achievements. Additionally, they can access the chefs' food recipe details, gaining insights into their unique culinary creations.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Disable Button: The implemented disable button feature enables administrators to temporarily deactivate certain functionalities or user accounts as needed, providing control and flexibility in managing the website.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Authentication System: The website incorporates an authentication system, ensuring secure access to user accounts and protecting sensitive information.</p>
                                    <p className="pt-3"><span className="text-white font-bold mr-2">&#x25C7;</span>Private Route: The private route feature restricts access to certain pages or sections of the website, allowing only authenticated users to view exclusive content or perform specific actions.</p>

                                </div>
                                <h1 className="text-xl font-bold pt-4 text-red-400">
                                    <FaInfoCircle className="inline-block mr-2" />
                                    Details:
                                </h1>
                                <p className="pt-2 text-justify">
                                    This website helps users find top culinary experts. They can explore detailed profiles of chefs, including their background and recipes. The site has a disable button for administrators to control functions and an authentication system for secure access. It uses technologies like React.js, React Router DOM, Bootstrap, and Firebase to create a user-friendly experience, and making it a valuable addition to my portfolio.
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
