import Image from 'next/image';
import React from 'react';
import Bannerpick from '@/assets/banner.png';
const Banner = () => {
    return (
        <section className=' grid grid-cols-3 gap-2 items-center px-20 py-20 mx-2 rounded-3xl bg-slate-300 p-4 contener mx-auto'>
            <div className='items-center gap-3 text-shadow-indigo-50'>
            <h2 className='items-center text-amber-300 '>worksout library</h2>
            <h1 className='font-extrabold text-3xl text-white'>TRAIN WITH INTENT.LOG EVERY SET.</h1>
            <p> fitlog is a dark , no-nonsense gym companion:pick a lift 
                ,lockit into todays.plan and watch.the week work add up </p> 
                <br></br>
                <button className='btn rounded-3xl bg-amber-300'>BROWSE Workout</button>
                </div>
                <div>
                    <Image src={Bannerpick} alt='Banner pick'/> 
                  </div>
            
                    </section>
            
    );
};

export default Banner;