import { useContext } from 'react';
import background from '../../assets/signup.jpg'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {handleLogin} = useContext(AuthContext)
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
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
        })
        .catch(error => {
            console.log(error.message)
        })
        
        
    };
    console.log(errors);
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', }} className='container mx-auto my-20 py-20'>
            <div className='text-center fond-bold text-white text-5xl'>Please Login</div>
            <div>
                <div className="mt-10">

                    <div className="hero-content">
                        <div className="card bg-black bg-opacity-60 md:w-1/3 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base text-white">Email</span>
                                        </label>
                                        <input className="input input-bordered" type="email" placeholder="Email" {...register("email", { required: true, })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base text-white">Password</span>
                                        </label>
                                        <input className="input input-bordered" type="password" placeholder="Password" {...register("password", { required: true, })} />
                                        <p className='text-white mt-4'>New to Netpay? <Link to='/signup'><span className='hover:font-semibold hover:text-green-300'>Please Signup</span></Link></p>
                                    </div>
                                    <div className='text-center mt-10'>
                                        <input className="btn bg-orange-700 text-white px-6 py-2 border-none w-full hover:bg-orange-600 hover:text-black rounded-3xl" type="submit" value='Login' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Login;