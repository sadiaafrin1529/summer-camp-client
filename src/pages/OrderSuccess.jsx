import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const OrderSuccess = () => {
    const [loading,setLoading] = useState(true)
    const [ShowData ,setShowData] = useState([])
    const {user} = useContext(AuthContext)


    useEffect(()=>{
        fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/payments/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setShowData(data)
            setLoading(false)
        })

    },[user?.email])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className="border border-1 text-center">No</th>
        <th className="border border-1 text-center">Your Email</th>
        <th className="border border-1 text-center">Transaction Id</th>
        <th className="border border-1 text-center">Price</th>
        <th className="border border-1 text-center">Date</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        ShowData.map((data,index)=> <tr>
        <th className="border border-1 text-center">{index+1}</th>
        <td className="border border-1 text-center">{data.email}</td>
        <td className="border border-1 text-center">{data.
transactionId}</td>
        <td className="border border-1 text-center">{data.price}</td>
        <td className="border border-1 text-center">{data.date}</td>
      </tr>)
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default OrderSuccess;

