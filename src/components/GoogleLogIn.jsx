import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const GoogleLogIn = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            const loggedInUSer = result.user;
            console.log(loggedInUSer)
            const saveUser = {name: loggedInUSer.displayName , email: loggedInUSer.email , photo: loggedInUSer.photoURL
            }
            fetch('https://arts-craft-server-sadiaafrin1529.vercel.app/users',{
                method:'POST',
                headers:{
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(()=>{
               
                    navigate(from, { replace: true });

                
              })
            
            
        })
    }
    return (
        <div>
            <div className='divider'></div>
            <div className='w-full text-center mb-6'>
                <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogIn;