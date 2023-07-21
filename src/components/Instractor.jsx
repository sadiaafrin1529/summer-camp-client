import React, { useEffect, useState } from 'react';
import CommonTitle from './CommonTitle';
import { FaUserTie } from 'react-icons/fa';

const Instractor = () => {
    const [instractor, setInstractor] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            setInstractor(data.filter((courseinstractor) => courseinstractor.role === 'instructor'))
        })
    },[])
    console.log(instractor)
    return (
        
        <>
    
      <div className='mt-40'>
      <CommonTitle title='OUR INSTRACTOR'></CommonTitle>
      </div>
        <div className='grid md:grid-cols-3 gap-5'>
            
           {
            instractor.map((teacher,index)=> 
            <div className='mt-40 mb-40 m-20'
            >
                <div>
                    <img className='w-24 rounded-full' src={teacher.photo} />
                    <p >Name: {teacher.name}</p>
                    <p className='flex '> <FaUserTie className='mr-3'></FaUserTie> {teacher.email}</p>
                </div>
            </div>
            )
           }
        </div>
        </>
    );
};

export default Instractor;