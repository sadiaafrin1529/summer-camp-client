import React, { useEffect, useState } from 'react';
import CommonTitle from './CommonTitle';
import CoursesCard from './CoursesCard';


const Courses = () => {
    
const [courses,setCourse] = useState([]);
useEffect(()=>{
    fetch('https://arts-craft-server-sadiaafrin1529.vercel.app/courses')
    .then(res=>res.json())
    .then(data => setCourse(data))
},[])
  
  
    return (
        <>
       <div className='mt-40'>
       <CommonTitle title='OUR COURSES'></CommonTitle>
       </div>
        <div className='grid md:grid-cols-3 cols   gap-5 m-20'>
            
            {
                courses.map(course=> <CoursesCard
                key={course._id}
                course={course}></CoursesCard>)
            }
            </div>
        </>
    );
};

export default Courses;