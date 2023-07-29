
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import CommonTitle from '../components/CommonTitle';


const EditCourse = () => {
    const {register, handleSubmit} = useForm();
    const previousData = useLoaderData()
    console.log(previousData)
    // const [previousData, setPreviousData] = useState({})
    const {user} = useContext(AuthContext);
   const id = useParams()
   console.log(id)
    
    const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
    

// useEffect(()=>{
//     fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/dashboard/edit/${coursedata.id}`)
//     .then(res=>res.json())
//     .then(data=>setPreviousData(data))
// },[coursedata.id])
console.log(previousData)
const onSubmit = data => {
    const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
    const img_hosting_Url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const formData = new FormData();
    formData.append('image', data.image[0]);
  
    fetch(img_hosting_Url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(coursedata => {
        console.log(coursedata._id)
        if (coursedata.success) {
          const imgURL = coursedata.data.display_url;
          const { name, price, availableSeat, description } = data;
  
          const courseItem = {
            image: imgURL,
            name,
            Name: user?.displayName,
            description,
            price: price,
            Email: user?.email,
            availableSeat: availableSeat
          };
  
          console.log(courseItem);
          console.log(imgURL);
  
          // fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/${coursedata.id}`, {
          //   method: 'PUT',
          //   headers: {
          //     "content-type": "application/json"
          //   },
          //   body: JSON.stringify(courseItem)
          // })
          //   .then(res => res.json())
          //   .then(result => {
          //     alert('edit successfully')
          //     console.log(result);
          //   });
          axios.put(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/${id.id}`,courseItem)
          .then(res=> {
            alert('edit sucessfull')
            console.log(res.data)
          })
          .catch(error=>{
            console.log(error)
          })
        }
      });
  };
    const defaultName = user?.displayName;
    return (
        <div>
            <>
            <CommonTitle title={'EDIT COURSE'}></CommonTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full p-4'>

                <input type="file" defaultValue={previousData.image}   {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
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
                        <input type="text" value={previousData?.data?.name} {...register("name", { required: true, maxLength: 80 })} placeholder="Course Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs m-4">
                        <label className="label">
                        </label>
                        <input type="number" defaultValue={previousData?.data.price} {...register("price", { required: true })} placeholder="Course Price" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                    </label>
                    <input  defaultValue={previousData?.data.availableSeat}{...register("availableSeat", { required: true })} type="number" placeholder="Available Seat" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <textarea defaultValue={previousData?.data.description} {...register("description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-4" ></textarea>
                </div>

                <input className=" btn btn-active btn-neutral m-8 mt-16 ml-96  " type="submit" value="Edit Course" />

            </form>
        </> 
        </div>
    );
};

export default EditCourse;