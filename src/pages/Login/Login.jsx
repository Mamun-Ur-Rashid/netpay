import { useContext, useState } from 'react';
import signinimg from '../../assets/signinsvg.svg'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import {FcGoogle} from 'react-icons/fc'
import {AiFillEye} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {MdLock} from 'react-icons/md'

const Login = () => {
    const {handleLogin} = useContext(AuthContext)
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const onSubmit = data =>{
        handleLogin(data.email,data.password)
        .then(result => {
            console.log(result)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login successfuly',
                showConfirmButton: false,
                timer: 1500
              })
              reset();
              navigate('/')

        })
        .catch(error => {
            setError(error)
            console.log(error.message)
        })
    };
    
    return (

        <>

        {/* 
            <div>
                <div>
                    <img src={signinimg} className='w-20'/>
                </div>
                <div className="hero-content">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base ">Email</span>
                                    </label>
                                    <input className="input input-bordered" type="email" placeholder="Email" {...register("email", { required: true, })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base ">Password</span>
                                    </label>
                                    <input className="input input-bordered" type="password" placeholder="Password" {...register("password", { required: true, })} />
                                    <p className=' mt-4'>New to Netpay? <Link to='/signup'><span className='hover:font-semibold hover:text-green-300'>Please Signup</span></Link></p>
                                    {
                                        error? <p className='text-red-600'>error : {error?.message}</p>:<></>
                                    }
                                </div>
                                <div className='text-center mt-10'>
                                    <input className="btn bg-orange-700 px-6 py-2 border-none w-full hover:bg-orange-600 hover:text-black rounded-3xl" type="submit" value='Login' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        */}


        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-10 lg:flex-row w-full">
                <div >
                    <img src={signinimg} className="w-[540px]" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm mr-12">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-4xl text-center text-[#23445b] mb-16 font-bold">Welcome Back </h1>
                        <div className=" flex items-center pb-3 border-b border-[#dadfe5]">
                            <FaUser className="text-[#8090a3]" fontWeight={'100px'} size={18}/>
                            <input type="text" {...register("email", {required: true, pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} placeholder="Your email address" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
                        </div>
                        <div className="mt-5 flex items-center pb-3 border-b border-[#dadfe5]">
                            <MdLock className="text-[#8090a3]" fontWeight={'100px'} size={23}/>
                            <input type="password" id="password" {...register("password", {required: true})} placeholder="password" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
                            <AiFillEye size={25} className="cursor-pointer text-[#8090a3]" onClick={()=>{
                            if(document.getElementById('password').type == 'password'){
                                document.getElementById('password').type = 'text'
                            }else{
                                document.getElementById('password').type = 'password'
                            }
                            }}/>
                        </div>
                        <Link to={'/signup'} className="hover:underline text-[#8090a3] pt-3">Don't have an account ? </Link>
                        <div className="form-control mt-3">
                            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[8px] px-4 border border-blue-500 hover:border-transparent rounded">Login</button>
                        </div>
                        {/* <div className="flex flex-col w-full border-opacity-50">  
                            <div className="divider">OR</div>
                            <FcGoogle size={35} className="cursor-pointer" onClick={()=> loginWithGoogle()}/> 
                        </div> */}
                    </form>
                </div>
            </div>
        </div>


    </>
            
    );
};

export default Login;