
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import logout2 from '../assets/image/register.jpg';
import GoogleLogIn from './GoogleLogIn';

const Register = () => {
  const { register, handleSubmit, reset,formState: { errors } } = useForm();
  const { creatUser, updateUserProfile } = useContext(AuthContext)



  const onSubmit = data => {
    console.log(data)
    creatUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser={name:data.name , email: data.email, photo:data.photo , role:'student'}
            fetch('https://arts-craft-server-sadiaafrin1529.vercel.app/users',{
              method: 'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset()
                  Swal.fire({

                    text: 'User Added',
                    icon: 'success',

                  });
                }
              })

          })
          .catch(error => console.log(error))
      })



  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row ld:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold ">Register Now!</h1>
          <img className='w-96  shadow-2xl bg-base-100 mt-8' src={logout2} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input {...register("photo")} type="photo" placeholder="Photo URL" className="input input-bordered" />
            </div>
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
              <input {...register("password",{
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&? "])(?=.*[a-z])/,
                   maxLength: 20
                })} type="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'minLength' && <p className='text-red-600'>password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className='text-red-600'>password less then 20</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>password must have one uppercase and one lower case and one special character</p>}

            </div>
            {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&? "])(?=.*[0-9](?=.*[a-z]))/,
                  minLength: 6
                  , maxLength: 20
                })} name='password' placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'minLength' && <p className='text-red-600'>password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className='text-red-600'>password less then 20</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>password must have one uppercase and one lower case,one number and one special character</p>}

              </div> */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className='m-4 text-center'>Don't Have An Acoount?<Link to='/login'>Login</Link></p>
          <GoogleLogIn></GoogleLogIn>
        </div>
      </div>
    </div>
  );
};

export default Register;