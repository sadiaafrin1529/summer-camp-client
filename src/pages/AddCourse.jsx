import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import CommonTitle from '../components/CommonTitle';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddCourse = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_Url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_Url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(info => {
                
                if (info.success) {
                    const imgURL = info.data.display_url;
                    const { name, price, availableSeat,description } = data;

                    const courseItem = { image: imgURL,
                      name, 
                         Name:user?.displayName,
                         description,
                         price: price,
                         Email:user?.email, availableSeat:availableSeat }
                    console.log(courseItem)
                    console.log(imgURL)
                    fetch('http://localhost:5000/courses', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(courseItem)

                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data)
                        Swal.fire({

                            text: 'Added',
                            icon: 'success',
                    
                        })
                        reset()
                    })

                }
            })
    };
const defaultName = user?.displayName;
    return (
        <>
            <CommonTitle title={'ADD COURSE'}></CommonTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full p-4'>

                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                <div className=' flex '>
                    <div className="form-control  w-full m-4 ">
                        <label className="label">
                        </label>
                        <input type="text" defaultValue={user?.email}   {...register("email", { required: true, maxLength: 80 })} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full m-4 ">
                        <label className="label">
                        </label>
                        <input type="text"  value={defaultName}  {...register("Name", { required: true, maxLength: 80 })} placeholder=" Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    
                    <div className="form-control w-full m-4 ">
                        <label className="label">
                        </label>
                        <input type="text" {...register("name", { required: true, maxLength: 80 })} placeholder="Course Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs m-4">
                        <label className="label">
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Course Price" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                    </label>
                    <input {...register("availableSeat", { required: true })} type="number" placeholder="Available Seat" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <textarea {...register("description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-4" ></textarea>
                </div>

                <input className=" btn btn-active btn-neutral m-8 mt-16 ml-96  " type="submit" value="Add Course" />

            </form>
        </>
    );
};

export default AddCourse;