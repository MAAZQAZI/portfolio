import React from 'react';
import Navbar from "../../components/Navbar";
import Link from 'next/link';

const Error = () => {
  return (
    <>
        <nav className="flex justify-between items-center py-3 px-2 font-poppins  ">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <Link href="/" className="text-2xl font-bold tracking-widest">
        <span className="text-sm font-semibold tracking-widest">MAAZ</span>
          </Link>
      </div>
        </nav>
    <div className='flex flex-col items-center'>
      
      <div className="flex items-center justify-center flex-col mt-10">
        <iframe
          className="w-full h-72 md:h-96"
          src="https://embed.lottiefiles.com/animation/6734"
          frameBorder="0"
          title="404 Animation"
        ></iframe>
       
        <Link href="/"
          className="bg-black text-white font-medium py-3 px-12 rounded-full w-30s md:w-60 lg:w-auto shadow-lg">Go to Home
        </Link>
      </div>
    </div>
    </>

  );
}

export default Error;
