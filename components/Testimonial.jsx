import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-primary">
      <div className="bol-container">
        <div className="text-primary  mt-8" id="reviews">

          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

            <div className="mb-10 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-white  md:text-4xl">
                Google Reviews
              </h2>
              <div className="h-1 w-40 bg-white mx-auto"></div>
            </div>


            <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg"
                       alt="user avatar" width="400" height="400" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">Daniella Doe</h6>
                    <p className="text-sm text-gray-500 ">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                  illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                  ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                  aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                  <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg"
                       alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 ">Jane doe</h6>
                    <p className="text-sm text-gray-500 ">Marketing</p>
                  </div>
                </div>
                <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
                  cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
                </p>
              </div>


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                  <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg"
                       alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">Yanick Doe</h6>
                    <p className="text-sm text-gray-500 ">Developer</p>
                  </div>
                </div>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                  aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                  <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg"
                       alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 ">Jane Doe</h6>
                    <p className="text-sm text-gray-500 ">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                  aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  shadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                  <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg"
                       alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 ">Andy Doe</h6>
                    <p className="text-sm text-gray-500 ">Manager</p>
                  </div>
                </div>
                <p className="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                  deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                <div className="flex gap-4">
                  <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg"
                       alt="user avatar" width="400" height="400" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 ">Yanndy Doe</h6>
                    <p className="text-sm text-gray-500">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                  aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default Testimonial;
