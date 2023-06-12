import React from 'react';
import login1 from '../assets/image/login.avif'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';



const Login = () => {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);




  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row ld:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold ">Login Now!</h1>
          <img className='w-96  shadow-2xl bg-base-100 mt-8' src={login1} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email")} type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='m-4 text-center'>Don't Have An Acoount?<Link to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;