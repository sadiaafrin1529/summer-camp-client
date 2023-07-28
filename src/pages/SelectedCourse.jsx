import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CommonTitle from '../components/CommonTitle';
import { FaDollarSign, FaStripe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SelectedCourse = () => {
  const { user } = useContext(AuthContext);

  const { data = [], refetch, isLoading } = useQuery(
    ['selectcourse'],
    async () => {
      const res = await axios.get(`http://localhost:5000/addcart/${user?.email}`);
      return res.data;
    }
  );
console.log(data)
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  
  return (
    <div className='w-full pl-20'>
      <CommonTitle title="SELECTED COURSES" />
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="border border-1 text-center">No</th>
              <th className="border border-1 text-center">Instructor</th>
              <th className="border border-1 text-center">Instructor Email</th>
              <th className="border border-1 text-center">Course Name</th>
              <th className="border border-1 text-center">Price</th>
              <th className="border border-1 text-center">Pay</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((info,index) => <tr key={info._id}>
            <td className='border border-1 text-center'>{index+1}</td>
            <td className='border border-1 text-center'>{info.instractorName}</td>
            <td className='border border-1 text-center'>{info.email}</td>
            <td className='border border-1 text-center'>{info.courseName}</td>
            <td className='border border-1 text-center '><p className='flex'><FaDollarSign></FaDollarSign>{info.price}</p></td>

            {/* <td className='border border-1 text-center text-3xl'><Link to={`/dashboard/payment/${info._id}`}><FaStripe></FaStripe></Link></td> */}
            <td className='border border-1 text-center text-3xl'><Link to={`/dashboard/payment/${info?._id}`}><FaStripe></FaStripe></Link></td>



            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedCourse;
