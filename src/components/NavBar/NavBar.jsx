import React from 'react';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiCodeLine, RiMailLine } from 'react-icons/ri';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#header" className="nav-link">
                        <RiHome2Line className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#aboutMe" className="nav-link">
                        <RiUserLine className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#skills" className="nav-link">
                        <RiBriefcaseLine className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link">
                        <RiCodeLine className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                        <RiMailLine className="nav-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
