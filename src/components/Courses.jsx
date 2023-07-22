import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';
import CommonTitle from './CommonTitle';


const Courses = () => {
    
const [courses,setCourse] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/courses')
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