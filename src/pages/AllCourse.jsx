import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import CommonTitle from '../components/CommonTitle';

const AllCourse = () => {
    const {user} = useContext(AuthContext)
    const [deniedShow, setDeniedShow] = useState('');
    const [myId,setMyId] = useState('')

    const { data: courses = [], refetch } = useQuery(['courses',user?.email], async () => {
        const res = await fetch('https://arts-craft-server-sadiaafrin1529.vercel.app/courses')
        return res.json();

    })
console.log(courses)


    const handleApprove = (id) => {
        fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/approved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({

                        text: 'Approved',
                        icon: 'success',

                    })
                }
            })
    }

    const handlereview = () =>{
        const info = {
            feedback : deniedShow,
        }
        fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/feedback/${myId}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(info)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            Swal.fire({

                text: 'Review Submited',
                icon: 'success',

            })
        })
        console.log(myId)
        console.log(info)
    }

    const handleDenied =() =>{
        fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/denied/${myId}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({

                        text: 'Denied',
                        icon: 'success',

                    })
                }
            })
    }

    const myModal = <>

        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">

                <div className="modal-action">
                    <div style={{ display: 'block', width: '100%' }}>
                        <textarea onChange={(e)=>setDeniedShow(e.target.value)} className='w-full border border-gray' rows="10"></textarea>
                    </div>


                </div>
                <button className="btn" onClick={()=>handleDenied(myId)}>Close</button>
                <button className="btn" onClick={()=>handlereview()}>Submit Review</button>
            </form>
        </dialog>

    </>

    return (
        <div className='w-full ml-20'>
            <CommonTitle title={'ALL COURSES'}></CommonTitle>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='border border-1 text-center'>No</th>
                            <th className='border border-1 text-center'>Image</th>
                            <th className='border border-1 text-center' >Course Name</th>
                            <th className='border border-1 text-center'>CoursePrice</th>
                            <th className='border border-1 text-center'>status</th>
                            <th className='border border-1 text-center'>Action</th>
                            <th className='border border-1 text-center'>Denied</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses?.map((course,index ) => <tr
                                key={course?._id}
                            >

                               <td className='border border-1 text-center'>{index+1}</td>
                                <td className='border border-1 text-center'>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course?.image} />
                                            </div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </td>
                                <td className='border border-1 text-center'>
                                    <div className="font-bold">{course?.name}</div>
                                </td>
                                <td className='border border-1 text-center font-bold'><div  >{course?.price}</div></td>
                                <th  className='border border-1 text-center'>
                                    <div className="font-bold">{course?.status}</div>
                                </th>
                                <td   className='border border-1 text-center font-bold'>
                                    <button className="btn btn-success text-white"
                                        disabled={course.status === "approved"}
                                        onClick={() => handleApprove(course?._id)}

                                    >approve</button>
                                </td>
                                <td  className='border border-1 text-center'>
                                    <div onClick={()=>setMyId(course?._id)}>
                                    <button className="btn  btn-error text-white"
                                        disabled={course.status === 'denied'}
                                        variant='danger'
                                        onClick={() => window.my_modal_1.showModal()}
                                    >
                                        Denied
                                    </button>
                                    </div>




                                </td>
                            </tr>)
                        }


                        {myModal}
                        




                    </tbody>
                    {/* {
                        courses.map(course =><p>{course._id}</p>)
                    } */}


                </table>
            </div>
        </div>
    );
};

export default AllCourse;