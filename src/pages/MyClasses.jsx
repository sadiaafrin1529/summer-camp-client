import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaClipboardCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import CommonTitle from '../components/CommonTitle';

const MyClasses = () => {
  // const [myClass, setMyClass] = useState([]);
  const { user } = useContext(AuthContext);
  const [info,setInfo]= useState({})
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // useEffect(() => {
  //   fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/myclass/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMyClass(data);
  //     });
  // }, []);

  const { data: myClass=[],refetch } = useQuery(
    ["myClass", user?.email],
    async () => {
      const res = await axios.get(
        `https://arts-craft-server-sadiaafrin1529.vercel.app/courses/myclass/${user?.email}`
      );
      console.log(res.data)
      return res.data;
    }
  );


const nodatafound =  <div style={{width:"100%",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center"}}><b>No Data Found</b></div>


const myModal = <>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Feedback!</h3>
    <p className="py-4"><b className='text-warning'><i>{info?.feedback?.feedback || nodatafound}</i></b></p>
  </form>
</dialog>

</>

const deleteCourse=(id)=>{
 
  if(confirm){
    fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/deletecourse/${id}`,{
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
                
                <div  onClick={handleShow} style={{width:'25px'}}>
                
                 <td >
                  <div onClick={()=>setInfo(courseData)}>
                <button> <FaClipboardCheck className='ml-12'  onClick={()=>window.my_modal_3.showModal()}   /></button>
                  </div>
                  </td>                     
                </div>
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
            {myModal}
          </tbody> 
          
        </table>
      </div>
    </div>
  );
};

export default MyClasses;