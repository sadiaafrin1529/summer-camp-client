import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const CoursesCard = ({ course }) => {
    const {user}=useContext(AuthContext)
    const navigate = useNavigate()
    const location= useLocation()
    const { _id, name, image, price, availableSeat ,Name} = course || {}


    const handleSelect =(course) =>{
   const userEmail= user?.email;
   if(confirm){
    const info={
        ID:course._id,
        img:course.image,
        courseName: course.name,
        courseSeat:course.availableSeat,
        instractorName:course.Name,
        email: course.Email,
        price: course.price,
        userEmail
    }
    fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/addcart`,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(info)
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({

                text: 'Added Successful',
                icon: 'success',

              });
        }
    })
   }
    }
    const handleLogin = () =>{
        toast.error((t) => (
            <span>
                Please  {navigate("/login", { state:{ from: location.state?.from?.pathname ||'/classes'}} ) }
            </span>
          ));
       
            
                //    const from = location.state?.from?.pathname || "/";
            
       
    }
    return (
        <div className='mt-32'>
           
            <Link style={{textDecoration:'none'}} to={`/course/${_id}`}>
                <img src={image} style={{width:'200px', height:'200px'}} />
                
                    <h2 className="card-title">Course Name: {name}</h2>
                    <h2 className="card-title">Instractor: {Name}</h2>
                    <p>Price: ${price}</p>
                    <p>Available Seat: {availableSeat}</p>
                    </Link>
                    
                       <Link>
                        {
                            user?.email ? <button onClick={()=>handleSelect(course)} className="btn btn-primary">Select Class</button>
                            :
                            <button onClick={()=>handleLogin()} className="btn btn-primary">Select Class</button>
                        }
                       </Link>
                   
                
           
        </div>
    );
};

export default CoursesCard;