import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/hamburger.json';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navigator.vibrate(100);
  };


  return (
    <nav className="flex justify-between items-center py-3 px-2 font-poppins">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">MAAZ</span>
      </div>
      <div className="flex gap-12 font-medium text-md text-zinc-400 space-x-1.5">
      <div className="hidden md:flex">
      {/* Regular navigation links for larger screens */}
      <Link href="#" passHref
        
          className={`font-medium mr-6 ${
            activeLink === 'home' ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() => handleClick('home')}
        >
          Home
      
      </Link>
      <Link href="#" passHref
       
          className={`space-x-1.5 mr-6 ${
            activeLink === 'projects' ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() => handleClick('projects')}
        >
          Projects
        
      </Link>
      <Link href="#" passHref
        
          className={`${
            activeLink === 'contact' ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() => handleClick('contact')}
        >
          Contact
        
      </Link>
    </div>

        <div className="md:hidden" onClick={toggleMenu} >
          {/* Lottie animation as the hamburger menu button for mobile screens */}
          {isMenuOpen ? (
            
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={64}
              width={64}
              isStopped={!isMenuOpen}
              isPaused={!isMenuOpen}
             
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={64}
              width={64}
              isStopped={!isMenuOpen}
              isPaused={!isMenuOpen}
              
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed mt-16 inset-0 bg-white z-50 transition-transform duration-100 transform translate-x-0">
          {/* Mobile menu overlay */}
          <div className="flex flex-col items-left p-10 h-screen">
            <ul className="flex flex-col gap-6 text-2xl font-bold">
              <li>
                <Link href="#" className="text-black ">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <button
              onClick={toggleMenu}
              className="mt-6 text-gray-500 focus:outline-none focus:text-gray-700"
            >
              <svg  version="1.1"
     xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="11" 
          x2="11" y2="1" 
          stroke="black" 
          stroke-width="4"/>
    <line x1="1" y1="1" 
          x2="11" y2="11" 
          stroke="black" 
          stroke-width="4"/>
</svg>
              
            </button>
            <iframe src="https://embed.lottiefiles.com/animation/9628"></iframe>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
