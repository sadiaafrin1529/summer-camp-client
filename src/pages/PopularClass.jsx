import React, { useEffect, useState } from 'react';
import CommonTitle from '../components/CommonTitle';
import CoursesCard from '../components/CoursesCard';

const PopularClass = () => {
    const [popularr, setPopular] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPopular(data.slice(0, 6))
            })
    }, [])

    return (
        <div>
            <CommonTitle title={'POPULAR COURSES'}></CommonTitle>
            <div className='grid md:grid-cols-3 cols gap-5 m-20'>
                {
                    popularr.map(popular =>
                        <div className='border-2 mx-8 w-64 '>
                            <div className='flex'>
                                <img className='m-3' src={popular.image} style={{ width: '100px', height: '100px' }} />
                                <h2 className="card-title"><span className='text-red-950 italic'>{popular.name}</span></h2>
                            </div>
                            <p className='m-3 '>Available Seat:<span className='text-slate-500 text-base font-bold italic'>{popular.availableSeat}</span></p>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default PopularClass;