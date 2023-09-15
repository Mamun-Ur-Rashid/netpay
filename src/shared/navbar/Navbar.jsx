
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { BiAlignLeft } from 'react-icons/bi';
import logo from '../../assets/update.png'
import { AuthContext } from '../../pages/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import './navbar.css'

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext)
    const [isMenuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

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
                // console.log(error.message)
            })
    }

    const li = (
        <> <NavLink to='/' className="">Home</NavLink>
            <NavLink to='/services' className="">Services</NavLink>
            <NavLink to='/business' className="">Business</NavLink>
            <NavLink to='/about' className="">About</NavLink>
            {user &&
                <NavLink to='dashboard' className=" hover:text-blue-700">Dashboard</NavLink>
            }

        </>
    )
    return (
        <div >
            <nav className="bg-white w-full top-0 z-10 ">
                <div>
                    <div>
                        <div className='hidden md:block'>
                            <div className='flex justify-between items-center container mx-auto '>
                                <Link to="/">
                                    <img src={logo} className='w-32 h-24 m-[-15px]' />
                                </Link>
                                <div >
                                    <ul className='flex gap-10 text-black font-semibold text-base' id='navbar'>
                                        {li}
                                    </ul>
                                </div>
                                <div >
                                    {user ?
                                        <button onClick={logOut} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded">Logout</button>
                                        : <Link to='/login' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded">Login</Link>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between px-8 md:hidden'>
                        <Link to="/">
                            <img src={logo} className='w-32 h-24 m-[-15px]' />
                        </Link>

                        <div className="md:hidden py-4 ">
                            <button
                                onClick={toggleMenu}
                                className=" focus:outline-none text-slate-500 text-3xl  "
                            >
                                {isMenuOpen ? <AiOutlineClose /> : <BiAlignLeft />}
                            </button>
                        </div>

                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden flex">
                            <ul className="mt-2 space-y-2 ">
                                <div id='navbar' className='block px-4 py-4 '>
                                    <NavLink to='/' className=" block">Home</NavLink>
                                    <NavLink to='/services' className="block">Services</NavLink>
                                    <NavLink to='/business' className="block">Business</NavLink>
                                    <NavLink to='/about' className="block">About</NavLink>
                                    {user &&
                                        <NavLink to='dashboard' className=" hover:text-blue-700">Dashboard</NavLink>
                                    }
                                    <div className='mt-4'>
                                        {user ?
                                            <button onClick={logOut} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded">Logout</button>
                                            : <Link to='/login' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded">Login</Link>
                                        }
                                    </div>
                                </div>
                            </ul>
                        </div>
                    )}

                </div>

            </nav>
        </div>
    );
};

export default Navbar;