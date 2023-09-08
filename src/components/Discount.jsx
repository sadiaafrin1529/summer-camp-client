import React from 'react';
import CommonTitle from './CommonTitle';

const Discount = () => {
    return (
      <>
      {/* <CommonTitle  title='Offer'></CommonTitle> */}
      <div data-aos="fade-up"  className="mt-6 p-6 py-12 dark:bg-violet-400 dark:text-gray-900 ">
      <div style={{backgroundColor:"	darkkhaki"}} className="container mx-auto p-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-64 text-white">
          <div>
            <h2 className="text-center text-4xl font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off  In our course
            </h2>
          </div>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free Advice! Use code:</span>
            <span className="font-bold text-lg">SummerHappy</span>
          </div>
          {/* <button class="bg-cyan-500 rounded-full m-5 shadow-lg shadow-cyan-500/50 ">Subscribe</button> */}
          <button style={
            {color:"white"}
          } className="bg-cyan-500 shadow-lg shadow-cyan-500/50 btn  rounded-full  m-5">Subscribe</button>
          {/* <div className='bg-cyan-500 shadow-lg shadow-cyan-500/50'>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Shop Now
            </a>
          </div> */}
        </div>
      </div>
    </div>
      </>
    );
};

export default Discount;