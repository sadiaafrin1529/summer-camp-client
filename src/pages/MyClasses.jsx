import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import CommonTitle from '../components/CommonTitle';
import { FaAtlas, FaClipboardCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyClasses = () => {
  // const [myClass, setMyClass] = useState([]);
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/courses/myclass/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMyClass(data);
  //     });
  // }, []);

  const { data: myClass=[],refetch } = useQuery(
    ["myClass", user?.email],
    async () => {
      const res = await axios.get(
        `http://localhost:5000/courses/myclass/${user?.email}`
      );
      return res.data;
    }
  );
console.log(user?.email)
//   const { data, refetch } = useQuery(['myClass',user?.email], async () => {
//     const res = await fetch(`http://localhost:5000/courses/myclass/${user?.email}`)
//     return res.json();

// })

console.log(myClass)



const deleteCourse=(id)=>{
 
  if(confirm){
    fetch(`http://localhost:5000/courses/deletecourse/${id}`,{
      method: 'DELETE',
    })
    .then(res =>res.json())
    .then(data=>{
      Swal.fire({

        text: 'Delete',
        icon: 'success',

    })
    refetch()
    })
  }
}
  return (
    <div className='w-full ml-20'>
      <CommonTitle title={'MY CLASS'}></CommonTitle>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th className='border border-1 text-center'>No</th>
              <th className='border border-1 text-center'>Course Name</th>
              <th className='border border-1 text-center'>Seat</th>
              <th className='border border-1 text-center'>Feedback</th>
              <th className='border border-1 text-center'>Status</th>
              <th className='border border-1 text-center'>Edit Class</th>
              <th className='border border-1 text-center'>Delete Class</th>
            </tr>
          </thead>
          
          <tbody>
            {myClass.map((courseData,index) => (
              
              <tr key={index}>
                <td className='border border-1 text-center'>{index + 1}</td>
                <td className='border border-1 text-center'>{courseData.name}</td>
                <td className='border border-1 text-center'>{courseData.availableSeat}</td>
                <td className='border border-1 text-center'>
             
                </td>
                <td className='border border-1 text-center'>{courseData.status}</td>
                <td className='border border-1 text-center'>
                  <Link to={`/dashboard/edit/${courseData._id}`}>
                    <FaEdit className='ml-12' />
                  </Link>
                </td>
                <td className='border border-1 text-center'>
                  <FaTrashAlt onClick={()=>deleteCourse(courseData._id)} className='ml-12' />
                </td>
              </tr>
            ))}
          </tbody> 
          
        </table>
      </div>
    </div>
  );
};

export default MyClasses;