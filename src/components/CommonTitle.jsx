import React from 'react';

const CommonTitle = ({title}) => {
    return (
        <div className='mx-auto md:w-4/12 text-center italic font-bold' style={{display:'inline'}}>
            <p>{title}</p>
             {/* <progress className="progress w-56 text-center mt-2 mx-auto"></progress>  */}
            <div className='text-center border-b-4 w-64 border-stone-500 mx-auto  '> </div>

            {/* <span className="loading loading-ball loading-lg"></span> */}
             
            
        </div>
    );
};

export default CommonTitle;