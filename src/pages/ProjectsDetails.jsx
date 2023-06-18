import React from 'react'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion';
import ScrollAnimation from '../../components/ScrollAnimation';
import Contact from "../../components/Contact";
const projects = () => {
  return (
    <div>
      <Navbar />
      <section id='bio' className="grid grid-cols-1 lg:grid-cols-[] gap-4 mb-4 font-poppins py-8 bg-[url('/bbburst.svg')] bg-[length:10px_10px]	rounded">
        <div className="bg-zinc-00 h-[10rem] rounded-3xl p-10 flex flex-col gap-16">
        <ScrollAnimation>
          <h1 className="text-md font-extrabold md:text-3xl	font-poppins text-left"
         
          >
            
          
          Welcome to my   <span className=" text-yellow-400">project 
            </span> page! It&apos;s like peeking behind the <span className=" text-blue-600">curtains 
            </span> of a magical show, except the   <span className='text-purple-600'> magician</span> is still practicing their <span className='text-pink-600'>tricks</span> 🌟.

          
          </h1>
          </ScrollAnimation>
          
         
        </div>
      
      </section>
      <section id="home" className=" dark grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 mb-4 font-poppins dark:text-white ">
    
        <div className="bg-zinc-00 h-[19rem] rounded-3xl p-10 flex flex-col gap-16">
        <iframe src="https://embed.lottiefiles.com/animation/134469"></iframe>
            </div>
        <div className="bg-zinc-00 h-[19rem] rounded-3xl p-10 hidden flex-col gap-16 md:flex ">
        <iframe src="https://embed.lottiefiles.com/animation/19934"></iframe>
        </div>

      </section>
      <Contact />
    </div>
  )
}

export default projects
