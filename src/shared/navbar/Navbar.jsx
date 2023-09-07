
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/logo5.png'
import logo from '../../assets/logo/new2.png'
import { AuthContext } from '../../pages/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaWindowClose, } from "react-icons/fa";


const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext)
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    console.log(user)

    const logOut = () => {
        handleLogOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout successfuly',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const li = (
        <>
            <li> <NavLink to='/' className="text-white hover:text-orange-400">Home</NavLink></li>
            <li> <NavLink to='/services' className="text-white hover:text-orange-400">Services</NavLink></li>
            <li> <NavLink to='/business' className="text-white hover:text-orange-400">Business</NavLink></li>
            <li> <NavLink to='/about' className="text-white hover:text-orange-400">About</NavLink></li>
            <li> <NavLink to='/help' className="text-white hover:text-orange-400">Help</NavLink></li>
            <li> <NavLink to='/blog' className="text-white hover:text-orange-400">Blog</NavLink></li>
            {
                user ? <>
                    <li> <NavLink to='dashboard' className="text-white hover:text-orange-400">Dashboard</NavLink></li>
                    <button onClick={logOut} className="text-white hover:text-orange-400">Logout</button>
                </>
                    : <li> <NavLink to='/login' className="text-white hover:text-orange-400">Login</NavLink></li>
            }
        </>

    )
    return (
        <div >
            <nav className="bg-[#1B2654] fixed w-full top-0 z-10">
                <div className=" px-2 md:px-8 lg:px-20">
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
                                <ul className=" md:ml-10 lg:ml-36 flex items-center md:space-x-8 lg:space-x-14 text-lg">
                                    {li}
                                </ul>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300  focus:outline-none "
                            >
                                {isMenuOpen ? <FaWindowClose /> : 'open'}
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