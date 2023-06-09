import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';

const Bio = () => {
  
  
  return (
    <>

    <div>
      
       <section className="grid grid-cols-1 lg:grid-cols-[] gap-4 mb-4 font-poppins py-8">
        <div className="bg-zinc-00 h-[15rem] rounded-3xl p-10 flex flex-col gap-16">
        <ScrollAnimation>
          <h1 className="text-lg font-extrabold md:text-4xl	font-poppins text-center"
         
          >
            
        
          〰 As a developer, I <span className=" text-yellow-400">thrive
            </span> on tackling complex  <span className=" text-blue-600">design
            </span> challenges, utilizing my skills to create innovative <span className='text-purple-600'>solutions</span> that push the boundaries of possibility 〰

          
          </h1>
          </ScrollAnimation>
          <p className="flex-1 font-poppins ">
          



          </p>
         
        </div>
      
      </section>
    </div>
    </>
  )
}

export default Bio
