import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiCodeLine, RiMailLine } from 'react-icons/ri';
import './NavBar.css';

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#');

    const handleSetActive = (nav) => {
        setActiveNav(nav);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="navbar md:w-auto">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onSetActive={() => handleSetActive('#')}
                        className={activeNav === '#' ? 'active' : ''}
                    >
                        <RiHome2Line className="nav-icon" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="aboutMe"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onSetActive={() => handleSetActive('#aboutMe')}
                        className={activeNav === '#aboutMe' ? 'active' : ''}
                    >
                        <RiUserLine className="nav-icon" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onSetActive={() => handleSetActive('#skills')}
                        className={activeNav === '#skills' ? 'active' : ''}
                    >
                        <RiBriefcaseLine className="nav-icon" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onSetActive={() => handleSetActive('#projects')}
                        className={activeNav === '#projects' ? 'active' : ''}
                    >
                        <RiCodeLine className="nav-icon" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onSetActive={() => handleSetActive('#contact')}
                        className={activeNav === '#contact' ? 'active' : ''}
                    >
                        <RiMailLine className="nav-icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
