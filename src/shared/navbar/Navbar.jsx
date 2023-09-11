
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    // console.log(user)

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
        <>
            <li> <NavLink to='/' className="text-white hover:text-orange-400">Home</NavLink></li>
            <li> <NavLink to='/services' className="text-white hover:text-orange-400">Services</NavLink></li>
            <li> <NavLink to='/business' className="text-white hover:text-orange-400">Business</NavLink></li>
            <li> <NavLink to='/about' className="text-white hover:text-orange-400">About</NavLink></li>

            <li> <NavLink to='/help' className="text-white hover:text-orange-400">Help</NavLink></li>
            {/* <li> <NavLink to='' className="text-white hover:text-orange-400">Career</NavLink></li> */}
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
            
            {/* --------------New Code ---------------- */}

            <nav className="bg-white w-full top-0 z-10">


                <div className='flex justify-between items-center container mx-auto'>

                    <a href="/">
                        <img src={logo} className='w-32 h-24 m-[-15px]' />
                    </a>

                    <ul className='flex gap-10 text-black font-semibold text-base' id='navbar'>
                        
                        <NavLink to='/' className="">Home</NavLink>
                        <NavLink to='/services' className="">Services</NavLink>
                        <NavLink to='/business' className="">Business</NavLink>
                        <NavLink to='/about' className="">About</NavLink>
                        { user &&
                            <NavLink to='dashboard' className=" hover:text-orange-400">Dashboard</NavLink>
                        }
                    
                    </ul>

                    { user ? 
                        <button onClick={logOut} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded">Logout</button>
                        :  <Link to='/login' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded">Login</Link>
                    }

                </div>

                
                {/* <div className="flex items-center justify-between h-16">


                    <div className="flex items-center">
                        <div className="">

                            <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                <div style={{ width: 'full', height: '62px' }}>
                                    <img className='w-20 h-20' src={logo} alt="" />
                                </div>
                            </NavLink>
                        </div>
                        <div className="hidden md:block">
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

                </div> */}

                    {isMenuOpen && (
                        <div className="md:hidden">
                            <ul className="mt-2 space-y-2">
                                {li}
                            </ul>
                        </div>
                    )}
                
            </nav>
        </div>
    );
};

export default Navbar;