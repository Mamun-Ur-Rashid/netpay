
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const li = (
        <>
            <li> <NavLink to='/' className="text-white hover:text-orange-400">Home</NavLink></li>
            <li> <NavLink to='/services' className="text-white hover:text-orange-400">Services</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">option2</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">option3</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">option4</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">option5</NavLink></li>
            <li> <NavLink to='' className="text-white hover:text-orange-400">option6</NavLink></li>

        </>

    )
    return (
        <div >
            <nav className="bg-orange-700">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex ">
                            <div className="">
                                {/*  logo image or text */}
                                <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">Logo here</NavLink>
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