import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
    return (
      <div className="navbar border-b border-gray-200 bg-base-100 px-4 shadow-sm md:px-8 gap-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <Link href ="/worksout">Worksout</Link>
      <Link href ="/my-plan"> MyPlan</Link>
      </ul>
    </div>
    <div className="btn btn-ghost text-xl">
    <Image src={logo} alt='fitlog'/>
    FITLOG
   
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1 gap-4">
      <Link href ="/worksout">Worksout</Link>

      <Link href ="/my-plan"> MY Plan</Link>
    </ul>
  </div>
  

<div className="flex justify-end gap-4 px-5 py-5 navbar-end">


  <Link href="/my-plan" className="rounded-full bg-[#ccff00] px-4 py-2">
    Plan <span className="ml-2 rounded-full bg-black px-2 py-1 text-white">0</span>
  </Link>


  <Link href="/saved" className="rounded-full border border-gray-300 px-4 py-2 hover:border-black">
    Saved <span className="ml-2 rounded-full border border-gray-300 px-2 py-1">0</span>
  </Link>

</div>

  </div>
    );
};

export default Navbar;