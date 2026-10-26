import Banner from '@/components/Banner';
import Library from '@/components/Library';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#0b0b0b] px-5 py-12 text-center text-white">
            <p className="text-lime-400 font-bold">Loading workouts...</p>
          </div>
        }
      >
        <Library />
      </Suspense>
    </div>
  );
};

export default page;