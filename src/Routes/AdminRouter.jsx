import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [admin] = useAdmin()

    if(loading){
        return <loading/>
    }

    if(user?.email && admin){
        return children
    }

    return <Navigate to='/' ></Navigate>
};

export default AdminRouter;