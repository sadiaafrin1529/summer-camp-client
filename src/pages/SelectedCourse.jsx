import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const SelectedCourse = () => {
    const {user} = useContext(AuthContext)

    const { data=[],refetch } = useQuery(
        ["selectcourse"],
        async () => {
          const res = await axios.get(
            `http://localhost:5000/addcart/${user?.email}`
          );
          return res.data;
        }
        );
        console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default SelectedCourse;