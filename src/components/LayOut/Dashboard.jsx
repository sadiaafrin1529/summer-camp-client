import React, { useContext, useState } from 'react';
import { FaAngleDoubleRight, FaBook, FaCheckCircle, FaDharmachakra, FaHome, FaRegCheckSquare, FaUsersCog } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useRole from '../../Hook/useRole';


const Dashboard = () => {
    const {user,logout} = useContext(AuthContext)
   
const [isRole] = useRole(user?.email)
   
    return (
       <>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
           
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {isRole === "instructor" && (
              <>
              <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
                <li>
                  <Link to="/dashboard/myclasses">My Courses</Link>
                </li>
                <li>
                  <Link to="/dashboard/addcourse">Add Courses</Link>
                </li>
              </>
            )}
               {isRole === "admin" && (
              <>
              <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
              <li><NavLink  to='/dashboard/allusers'><FaUsersCog></FaUsersCog> All Users</NavLink></li>
              <li><NavLink  to='/dashboard/allcourse'><FaBook></FaBook> All Course</NavLink></li>
              </>
            )}
               {isRole === "student" && (
              <>
              <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
              <li><NavLink to='/dashboard/selectcourse'><FaCheckCircle></FaCheckCircle> Select Course</NavLink></li>
              <li><NavLink to='/dashboard/orderdone'><FaCheckCircle></FaCheckCircle> Order Successfull</NavLink></li>
              </>
            )}

                   

                </ul>

            </div>
        </div>
       </>
    );
};

export default Dashboard;