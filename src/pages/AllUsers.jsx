import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import CommonTitle from "../components/CommonTitle";


const AllUsers = () => {


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();

    })

    const handleAdmin = user=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                   title:`${user.name} is An Admin Now`,
                    text: 'Made Admin',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        } )
    }
    const handleInstructor = user=>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                   title:`${user.name} is An Instructor Now`,
                    text: 'Made Instructor',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        } )
    }
    
    return (
        <div className="w-full ml-20">

            <CommonTitle title={'ALL USERS'}></CommonTitle>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th  className='border border-1 text-center'>No</th>
                            <th className='border border-1 text-center'>Name</th>
                            <th className='border border-1 text-center'>Email</th>
                            <th className='border border-1 text-center'>Admin</th>
                            <th className='border border-1 text-center'>Instructor</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}>
                                <th  className='border border-1 text-center'>{index +1}</th>
                                <td className='border border-1 text-center'>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className='border border-1 text-center'>
                                    {user.email}
                                    </td>
                                <td className='border border-1 text-center'>
                                    {user.role === 'admin' ? 'admin' :
                               <button onClick={()=>handleAdmin(user)}><FaUserShield></FaUserShield></button>}
                               </td>
                                <th className='border border-1 text-center'>
                                {user.role === 'instructor' ? 'instructor' :
                               <button onClick={()=>handleInstructor(user)}><FaUserTie></FaUserTie></button>} 
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;