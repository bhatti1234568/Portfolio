import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import icons from react-icons
import { RiMenu3Line, RiCloseLine, RiSettings4Line } from 'react-icons/ri';

// Import Theme component
import Theme from './Theme';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [showTheme, setShowTheme] = useState(false);

    // Change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollNav(window.scrollY >= 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking a link
    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <>
            <nav className={`navbar ${scrollNav ? 'scroll-nav' : ''}`}>
                <div className="nav__container container">
                    <Link to="/" className="nav__logo">
                        Brand<span>.</span>
                    </Link>

                    <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link" onClick={closeMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/about" className="nav__link" onClick={closeMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/services" className="nav__link" onClick={closeMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/portfolio" className="nav__link" onClick={closeMenu}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/contact" className="nav__link" onClick={closeMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="nav__close" onClick={closeMenu}>
                            <RiCloseLine />
                        </div>
                    </div>

                    <div className="nav__btns">
                        <div className="nav__theme" onClick={() => setShowTheme(true)}>
                            <RiSettings4Line />
                        </div>

                        <div className="nav__toggle" onClick={() => setShowMenu(true)}>
                            <RiMenu3Line />
                        </div>
                    </div>
                </div>
            </nav>

            <Theme isOpen={showTheme} onClose={() => setShowTheme(false)} />
        </>
    );
};

export default Navbar; 