import React from 'react';

const LatestBlogs = () => {
  return (
    <div className='w-full'>
      <h1 className="text-3xl font-semibold text-center mx-auto">Latest Blog</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Stay ahead of the curve with fresh content on code, design, startups, and everything in between.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center pt-12">
        <div
          className="max-w-72 mx-auto w-full hover:-translate-y-0.5 transition duration-300">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
          <h3 className="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
        </div>
        <div className="max-w-72 mx-auto w-full hover:-translate-y-0.5 transition duration-300">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
          <h3 className="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
        </div>
        <div className="max-w-72 mx-auto w-full hover:-translate-y-0.5 transition duration-300">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
          <h3 className="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
        </div>
        <div className="max-w-72 mx-auto w-full hover:-translate-y-0.5 transition duration-300">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
          <h3 className="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;