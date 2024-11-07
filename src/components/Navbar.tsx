import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa6';
import { Link as RouterLink } from 'react-router-dom';
import { navItems } from '../data';
import { logo } from '../assets/icons';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className="Imgbg md:px-14 p-4 max-w-screen-3xl border-b mx-auto bg-white text-primary fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto flex justify-between items-center text-lg font-medium relative z-50">
                    <div className="space-x-14 flex items-center">
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                            <img src={logo} alt="logo privee" className="w-10 inline-block items-center" />
                            <div className="flex flex-col items-center">
                                <span className="text-center">Privee.Host</span>
                                <span className="text-sm text-teal-400">Trusted Hosting</span>
                            </div>
                        </a>
                        <ul className="md:flex space-x-12 hidden">
                            {navItems.map(({ link, path }) => (
                                <Link
                                    smooth
                                    to={`#${path}`}
                                    key={link}
                                    className="block hover:text-accent cursor-pointer"
                                >
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-2xl text-primary">
                            <FaBars />
                        </button>
                    </div>

                    <div className="space-x-12 hidden md:flex items-center">
                        <RouterLink to="/login" className="bg-primary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-accent">
                            Login
                        </RouterLink>
                    </div>
                </div>
            </nav>
            <div className={`space-y-4 px-4 pt-24 pb-5 text-avatar Imgbg ${isMenuOpen ? 'block fixed top-0 right-0 left-0 bg-white' : 'hidden'} z-20`}>
                {navItems.map(({ link, path }) => (
                    <Link
                        smooth
                        to={`#${path}`}
                        key={link}
                        onClick={toggleMenu}
                        className="block font-semibold text-avatar text-center hover:text-accent"
                    >
                        {link}
                    </Link>
                ))}
                <RouterLink to="/login" className="font-semibold block bg-primary text-white py-1 px-2 sm:px-2.5 transition-all duration-300 rounded hover:bg-accent text-center mx-auto text-xs sm:text-sm">
                    Login
                </RouterLink>
            </div>
        </>
    );
};

export default Navbar;
