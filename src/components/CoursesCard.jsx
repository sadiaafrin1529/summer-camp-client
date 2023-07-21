import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const CoursesCard = ({ course }) => {
    const {user}=useContext(AuthContext)
    const navigate = useNavigate()
    const location= useLocation()
    const { _id, name, image, price, availableSeat } = course || {}
    return (
        <div className='mt-32'>
            <div className="card card-side  bg-base-100 shadow-xl">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{availableSeat}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Select Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;