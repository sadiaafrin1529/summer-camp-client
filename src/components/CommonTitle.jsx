import React from 'react';

const CommonTitle = ({title}) => {
    return (
        <div className='mx-auto md:w-4/12 text-center font-bold'>
            <p>{title}</p>
             {/* <progress className="progress w-56 text-center mt-2 mx-auto"></progress>  */}
             <span className="loading loading-bars loading-md"></span>

            {/* <span className="loading loading-ball loading-lg"></span> */}
             
            
        </div>
    );
};

export default CommonTitle;