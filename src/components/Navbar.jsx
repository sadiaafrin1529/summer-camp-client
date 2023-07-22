import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const{user,logout}=useContext(AuthContext)
    const navbarSelector = <>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/instractor'>Instructors</Link></li>
     <li ><Link to='/classes'>Classes</Link></li>
     
     {/* <li><Link to='/login'>Login</Link></li> */}
     {user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>}
     {user ? <li onClick={() => logout()} ><Link  >LogOut</Link></li>
            :
            <li className='mt-2' ><Link  to='/login'>Login</Link></li>}
        {user?.email && <li className='mt-2' ><img src={user?.photoURL} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt="" /></li>}
    </>
    return (
        <div>
            <div className="navbar z-[100] fixed top-0 bg-white-200 z-10 font-bold text-3xl max-w-screen-xl bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navbarSelector}
      </ul>
    </div>
    
    <img className="w-24 mask mask-squircle ml-36" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navbarSelector}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;