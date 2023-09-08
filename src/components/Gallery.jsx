import React from 'react';
import LazyLoad from "react-lazy-load";
import CommonTitle from './CommonTitle';
const Gallery = () => {
    return (
        <div className="mt-14 w-[79%] mx-auto">
      {/* this is the food gallery section */}
      <div>
       <CommonTitle title={"Gallery"}></CommonTitle>

      
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/D8DRynf/img.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/gWmrnWT/imgg.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/hFkhmr4/pexels-julie-aagaard-2766334.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/Pz17NTj/pexels-wallace-chuck-2973392.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/XDf2mPY/pexels-antoni-shkraba-4348196.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/MC3b2tQ/pexels-julia-m-cameron-4145037.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/QCbpLYc/pexels-jonathan-borba-6808140.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/pKmyJJs/pexels-castorly-stock-3945638.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/K0Jd3jz/pexels-andrea-piacquadio-3822850.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/xmyWJg6/pexels-quang-nguyen-vinh-2166456.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/RTRthZT/pexels-quang-nguyen-vinh-2137313.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/mCbSnVr/pexels-mikhail-nilov-8923566.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/MPhMk75/pexels-anna-shvets-5641937.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/19bhtHX/pexels-sanketh-rao-716107-1.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;