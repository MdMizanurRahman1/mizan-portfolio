import React, { useState } from 'react';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiCodeLine, RiMailLine } from 'react-icons/ri';
import './NavBar.css';

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav className="navbar md:w-auto">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                        <RiHome2Line className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#aboutMe" onClick={() => setActiveNav('#aboutMe')} className={activeNav === '#aboutMe' ? 'active' : ''} >
                        <RiUserLine className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}  >
                        <RiBriefcaseLine className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}  >
                        <RiCodeLine className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}  >
                        <RiMailLine className="nav-icon" />
                    </a>
                </li>
            </ul>
        </nav >
    );
};

export default NavBar;
