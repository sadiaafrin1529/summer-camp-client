import React from 'react';
import middlebanner from '../assets/image/middlebanner.jpg'
import '../components/Banner2.css'
const Banner2 = () => {
    return (
       <div className='middleBanner mb-20 mt-20'>
         <div className='justify-center items-center py-8 px-16'>
           {/* <div>
            <img style={{width:'400px',height:'200px'}} src={middlebanner} alt="" />
            </div>  */}
            <div className='md:ml-10 background'>
                <p className='uppercase'>Arts and crafts describes a wide variety of activities involving making things with one's own hands.</p>
                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                <button className="btn btn-outline rounded-full m-5">search</button>
            </div>
        </div>
       </div>
    );
};

export default Banner2;