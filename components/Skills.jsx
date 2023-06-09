import React from 'react'
import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import AnimatedList from './AnimationList';
import ScrollAnimation from './ScrollAnimation';

const Skills = () => {

    
        const words = ['Next.js', 'Node.js', 'PostgreSQL', 'NoSQL', 'React', 'JavaScript'];
        const [currentWord, setCurrentWord] = useState('Next.js');
       
      
        function getRandomWord() {
          const randomIndex = Math.floor(Math.random() * words.length);
          return words[randomIndex];
        }
      
        
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentWord(getRandomWord());
            
          }, 2010);
      
          return () => clearInterval(interval);
        }, []);
    
  return (
    <div className='rounded-xl border-2 bg-black h-40	md:h-60	'>
      
       <section className="grid grid-cols-2 md:grid-cols-[1fr_1fr] gap-2  font-poppins]">
        <div className="bg-zinc-00 h-[1rem] md:h-[15rem] rounded-3xl p-10 flex flex-col gap-16">
       
          <h1 className="text-lg font-semibold md:text-7xl font-serif text-left md:text-right text-white"
       
          >
            
        
         Hands on. Experience.

          
          </h1>
        
        
        </div>
        <div className="bg-zinc-00 h-[15rem]  rounded-3xl py-10 flex flex-col gap-16 leading-5	">
        <motion.div
      
      key={currentWord}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    
    >
       <h1 className="text-lg leading-5 font-extrabold md:text-7xl  	mt-8 font-serif text-left bg-clip-text text-transparent   bg-gradient-to-r from-blue-400 to-pink-600"
           
           >
             
            
       {currentWord}
     
 
           
           </h1>
    </motion.div>
         
          
        
        </div>
      
      </section>
    </div>


//     <div style={{ height: '100vh', display: 'flex' }}>
//     <div style={{ width: '50%' }}>
//       {/* Left div content */}
//     </div>
//     <motion.div style={{ width: '50%' }}>
//       {/* Right div content */}
//       {rightDivElements.map((element, index) => (
//         <div key={index}>{element}</div>
//       ))}
//     </motion.div>
//   </div>
  )
}

export default Skills
