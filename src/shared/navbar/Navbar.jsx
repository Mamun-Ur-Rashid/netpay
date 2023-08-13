
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo4.png'


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const li = (
        <>
            <li> <NavLink to='/' className="text-white hover:text-orange-400">Home</NavLink></li>
            <li> <NavLink to='/services' className="text-white hover:text-orange-400">Services</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">Business</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">Help</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">Career</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">About</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">Blog</NavLink></li>
            <li> <NavLink to='/signup' className="text-white hover:text-orange-400">Sign Up</NavLink></li>

        </>

    )
    return (
        <div >
            <nav className="bg-orange-700 fixed w-full top-0 z-10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="">
                                {/*  logo image or text */}
                                <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                    <div style={{ width: 'full', height: '62px' }}>
                                        <img className='w-full h-full' src={logo} alt="" />
                                    </div>
                                </NavLink>
                            </div>
                            <  div className="hidden md:block">
                                <ul className="ml-40 flex items-center space-x-14 text-lg">
                                    {li}
                                </ul>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300  focus:outline-none "
                            >
                                {isMenuOpen ? 'close' : 'open'}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <ul className="mt-2 space-y-2">
                                {li}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;