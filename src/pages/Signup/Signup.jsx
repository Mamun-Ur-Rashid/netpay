import { useContext, useState } from 'react';
import signupimg from '../../assets/signupsvg.svg'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

import { AiFillEye } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { CiLock } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { ImProfile } from 'react-icons/im'
import Massage from '../liveChat/massage/Massage';
import Button from '../../shared/button/Button';




const Signup = () => {


  const { handleSignUp, updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null)

  const onSubmit = data => {

    console.log(data)
    const image = data.photo[0];

    if (image) {

      const formData = new FormData();
      formData.append('image', image);

      fetch(`https://api.imgbb.com/1/upload?key=0c21f447728055a7e1f8a7d0fef93110`, {
        method: 'POST',
        body: formData
      }).then(res => res.json())
        .then(imageRes => {
          if (imageRes.success) {
            const images = imageRes.data.display_url
            const { name, email, nid, number, password } = data
            const tk = '1000'
            const userInfo = { name, email, nid, number, password, ImgUrl: images, role: 'user', balance: parseInt(tk) }

            console.log(userInfo)

            handleSignUp(data.email, data.password).then((result) => {

              const user = result.user

              fetch('https://red-quaint-snail.cyclic.app/allUsers', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
              }).then(res => res.json())
                .then(data => {
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
            }).catch(error => {
              setError(error)
              console.log(error.message)
            })
          }
        }).catch(error => {
          console.error('Error uploading image:', error);
        });
    } else {
      console.error('No image data found.');
    }
  };



  const validatePassword = (value) => {
    if (!value) {
      return 'Password is required';
    }
    if (value.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return 'Password must contain at least one capital letter';
    }
    if (!/(?=.*[!@#$%^&*()])/.test(value)) {
      return 'Password must contain at least one special character';
    }
    return true;
  };

  return (

    // <div className="mt-10 flex items-center w-fit mx-auto rounded-lg justify-center ">

    //     <div className=' border-2 h-full'>
    //         <img src={signupimg} className='w-[500px] h-full rounded-xl' />
    //     </div>

    //     <div className="hero-content bg-slate-200">
    //         <div className="card  md:w-3/4 ">
    //             <div className="card-body">
    //                 <form onSubmit={handleSubmit(onSubmit)}>
    //                     <div className='md:flex justify-between'>
    //                         <div className='md:w-[45%]'>
    //                             <div className="form-control">
    //                                 <label className="label">
    //                                     <span className="label-text text-base text-white">Full Name</span>
    //                                 </label>
    //                                 <input className="input input-bordered" type="text" placeholder="Full Name..." {...register("name", { required: true, })} />
    //                             </div>
    //                             <div className="form-control">
    //                                 <label className="label">
    //                                     <span className="label-text text-base text-white">Password</span>
    //                                 </label>
    //                                 <input className="input input-bordered" type="password" placeholder="Password..." {...register("password", { required: true, })} />

    //                             </div>
    //                         </div>
    //                         <div className='md:w-[45%]'>
    //                             <div className="form-control">
    //                                 <label className="label">
    //                                     <span className="label-text text-base text-white">Email Address</span>
    //                                 </label>
    //                                 <input className="input input-bordered" type="email" placeholder="Email Address..." {...register("email", { required: true, })} />
    //                             </div>
    //                             <div className="form-control">
    //                                 <label className="label">
    //                                     <span className="label-text text-base text-white">Phone Number</span>
    //                                 </label>
    //                                 <input className="input input-bordered" type="text" placeholder="Phone Number" {...register("number", { required: true, })} />

    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='md:flex justify-between'>
    //                         <div className="form-control md:w-[45%]">
    //                             <label className="label">
    //                                 <span className="label-text text-base text-white">Photo</span>
    //                             </label>
    //                             <input type="file" className="file-input file-input-bordered file-input-primary w-full" {...register("photo", { required: true, })} />
    //                             {/* <input className="input input-bordered" type="password" placeholder="Password" {...register("password", { required: true, })} /> */}

    //                         </div>
    //                         <div className="form-control md:w-[45%]">
    //                             <label className="label">
    //                                 <span className="label-text text-base text-white">NID Number</span>
    //                             </label>
    //                             <input className="input input-bordered" type="text" placeholder="NID Number" {...register("nid", { required: true, })} />

    //                         </div>
    //                     </div>
    //                     <p className='text-white mt-4'>Allready have an account? <Link to='/login'><span className='hover:font-semibold hover:text-green-300'>Please login</span></Link></p>
    //                     {
    //                         error ?
    //                             <p className='text-red-600 font-semibold'>{error.message}</p>
    //                             : <></>
    //                     }
    //                     <div className='text-center mt-10'>
    //                         <input className="btn bg-orange-700 text-white px-6 py-2 border-none w-full hover:bg-orange-600 hover:text-black rounded-3xl" type="submit" value='Signup' />
    //                     </div>

    //                 </form>
    //             </div>
    //         </div>
    //     </div>

    // </div>   


    // ---------------- New code ------------------------------

    <div className="hero min-h-screen mt-16">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left">
          <img src={signupimg} className="w-[600px]" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm lg:mr-12">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl text-center text-[#23445b] mb-16 font-bold">Create account</h1>

            <div className="mb-3 flex items-center pb-3 border-b border-[#dadfe5]">
              <AiOutlineUser className="text-[#8090a3]" fontWeight={'100px'} size={20} />
              <input {...register("name", { maxLength: 20, required: true })} type="text" placeholder="Your Name" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
            </div>

            <div className="mb-3 flex items-center pb-3 border-b border-[#dadfe5]">
              <HiOutlineMail className="text-[#8090a3]" fontWeight={'100px'} size={20} />
              <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} type="text" placeholder="Your email address" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
            </div>

            <div className="relative mb-3 flex items-center pb-3 border-b border-[#dadfe5]">
              <CiLock className="text-[#8090a3]" size={23} />
              <input id="password" type='password' {...register("password", {
                required: true,
                validate: validatePassword
              })} placeholder="Password" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
              <AiFillEye size={25} className="cursor-pointer text-[#8090a3]" onClick={() => {
                if (document.getElementById('password').type == 'password') {
                  document.getElementById('password').type = 'text'
                } else {
                  document.getElementById('password').type = 'password'
                }
              }} />
            </div>

            {errors.password && <span className="text-[red] mt-[-6px]">{errors.password.message}</span>}

            <div className="relative mb-3 flex items-center pb-3 border-b border-[#dadfe5]">
              <CiLock className="text-[#8090a3]" fontWeight={'100px'} size={23} />
              <input type="password" id="password2" {...register("confirm_password", {
                required: true,
                validate: (value) => value === watch("password") || "Passwords do not match",
              })} placeholder="Confirm Password" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
              <AiFillEye size={25} className="cursor-pointer text-[#8090a3]" onClick={() => {
                if (document.getElementById('password2').type == 'password') {
                  document.getElementById('password2').type = 'text'
                } else {
                  document.getElementById('password2').type = 'password'
                }
              }} />
              <p className=" top-[3px] right-[25px] text-[13px] text-[red] absolute">
                {errors.confirm_password?.message}
              </p>
            </div>

            <div className=" flex items-center pb-3 border-b border-[#dadfe5]">
              <BsTelephone className="text-[#8090a3] ml-1" fontWeight={'100px'} size={18} />
              <input {...register("number", { required: true })} type="number" placeholder="Phone Number" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
            </div>

            <div className=" flex items-center pt-4 pb-3 border-b border-[#dadfe5]">
              <ImProfile className="text-[#8090a3] ml-1" fontWeight={'100px'} size={18} />
              <input {...register("nid", { required: true })} type="text" placeholder="NID Number" className="appearance-none bg-transparent border-none w-full text-gray-700 pl-7 font-semibold  leading-tight focus:outline-none" />
            </div>

            <div className="pt-4">
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.52rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-500 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile" {...register("photo", { required: true, })}
                placeholder='image'
              />
            </div>

            <Link to={'/login'} className="hover:underline text-[#8090a3] pt-3">Already have an account ?</Link>

            <div className="form-control mt-2">
              <Button type='submit' text={'Sign Up'}></Button>
              {/* <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[10px] px-4 border border-blue-500 hover:border-transparent rounded">Sign Up</button> */}
            </div>
            {/* <div className="flex flex-col w-full border-opacity-50">  
              <div className="divider">OR</div>
                <FcGoogle size={35} className="cursor-pointer" onClick={()=> loginWithGoogle()}/> 
              </div> */}
          </form>
        </div>
      </div>
      <Massage />
    </div>
  );
};

export default Signup;