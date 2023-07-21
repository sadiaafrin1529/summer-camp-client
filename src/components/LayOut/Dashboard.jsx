import React from 'react';
import { FaAngleDoubleRight, FaBook, FaDharmachakra, FaHome, FaUsersCog } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
const Dashboard = () => {



    //TODO
    const isAdmin = true;
    return (
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
                    {/* Sidebar content here */}

                    {
                        isAdmin ?

                            <>
                                <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/addcourse'><FaDharmachakra></FaDharmachakra> Add Course</NavLink></li>
                                <li><NavLink  to='/dashboard/allusers'><FaUsersCog></FaUsersCog> All Users</NavLink></li>
                                <li><NavLink  to='/dashboard/allcourse'><FaBook></FaBook> All Course</NavLink></li>
                                <li><NavLink  to='/dashboard/myclasses'><FaAngleDoubleRight></FaAngleDoubleRight> My Classes</NavLink></li>
                            </>

                            :
                            <>
                               
                                <li><NavLink to='/dashboard/addcourse'><FaDharmachakra></FaDharmachakra>Select Course</NavLink></li>
                                <li><a>Order Success</a></li>
                            </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;