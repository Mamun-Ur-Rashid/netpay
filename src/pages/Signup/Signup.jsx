import { useContext, useState } from 'react';
import background from '../../assets/signup.jpg'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {


    const { handleSignUp, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const onSubmit = data => {
        console.log(data)
        const image = data.photo[0];

        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_Image_upload}`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageRes => {
                    if (imageRes.success) {
                        const images = imageRes.data.display_url
                        const { name, email, nid, number, password } = data

                        const userInfo = { name, email, nid, number, password, ImgUrl: images, role: 'user' }
                        console.log(userInfo)

                        handleSignUp(data.email, data.password)
                            .then((result) => {
                                console.log(result)
                                const user = result.user

                                fetch('https://netpay-server-muhammadali246397.vercel.app/allUsers', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userInfo)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                        if (data.insertedId) {
                                            Swal.fire({
                                                position: 'center',
                                                icon: 'success',
                                                title: 'Sign up successfuly',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            reset();
                                            navigate('/')
                                        }
                                    })

                            })
                            .catch(error => {
                                setError(error)
                                console.log(error.message)
                            })

                    }
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                });
        } else {
            console.error('No image data found.');
        }




    };

    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', }} className='container mx-auto my-20 py-20'>
            <div className='text-center fond-bold text-white text-5xl'>Please Signup</div>
            <div>
                <div className="mt-10">

                    <div className="hero-content">
                        <div className="card bg-black bg-opacity-60 md:w-3/4 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='md:flex justify-between'>
                                        <div className='md:w-[45%]'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Full Name</span>
                                                </label>
                                                <input className="input input-bordered" type="text" placeholder="Full Name..." {...register("name", { required: true, })} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Password</span>
                                                </label>
                                                <input className="input input-bordered" type="password" placeholder="Password..." {...register("password", { required: true, })} />

                                            </div>
                                        </div>
                                        <div className='md:w-[45%]'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Email Address</span>
                                                </label>
                                                <input className="input input-bordered" type="email" placeholder="Email Address..." {...register("email", { required: true, })} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Phone Number</span>
                                                </label>
                                                <input className="input input-bordered" type="text" placeholder="Phone Number" {...register("number", { required: true, })} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:flex justify-between'>
                                        <div className="form-control md:w-[45%]">
                                            <label className="label">
                                                <span className="label-text text-base text-white">Photo</span>
                                            </label>
                                            <input type="file" className="file-input file-input-bordered file-input-primary w-full" {...register("photo", { required: true, })} />
                                            {/* <input className="input input-bordered" type="password" placeholder="Password" {...register("password", { required: true, })} /> */}

                                        </div>
                                        <div className="form-control md:w-[45%]">
                                            <label className="label">
                                                <span className="label-text text-base text-white">NID Number</span>
                                            </label>
                                            <input className="input input-bordered" type="text" placeholder="NID Number" {...register("nid", { required: true, })} />

                                        </div>
                                    </div>
                                    <p className='text-white mt-4'>Allready have an account? <Link to='/login'><span className='hover:font-semibold hover:text-green-300'>Please login</span></Link></p>
                                    {
                                        error ?
                                            <p className='text-red-600 font-semibold'>{error.message}</p>
                                            : <></>
                                    }
                                    <div className='text-center mt-10'>
                                        <input className="btn bg-orange-700 text-white px-6 py-2 border-none w-full hover:bg-orange-600 hover:text-black rounded-3xl" type="submit" value='Signup' />
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

export default Signup;