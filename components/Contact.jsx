import React from 'react'
import { motion } from 'framer-motion'
import Dribbble from "../public/dribbble.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Linkedin from "../public/linkedin.svg";
import SocialButton from "./SocialButton";
import ScrollAnimation from './ScrollAnimation';

const contact = () => {
    const handleSendEmail = () => {
        const recipient = 'qazimaazsajjad1@gmail.com';
        const subject = '"Portfolio-side';
        const body = 'Your email message here';
    
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.open(mailtoLink);
        };
  return (

    <div  >
        <ScrollAnimation >
       <section id='contact' className=" grid grid-cols-1 lg:grid-cols-[] gap-4 mb-4 mt-11 font-poppins dark:text-white">
        <div className=" h-[18rem] rounded-3xl p-10 flex flex-col gap-3 bg-[url('/gradient-bg.jpg')] bg-cover md:gap-6">
          <h1 className="md:text-4xl text-3xl font-semibold font-poppins ">
           
            <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2,
       }}
          
        >
           Want to work together.?
        </motion.span>
          </h1>
          <p className=" font-poppins md:text-lg text-sm">
          Feel free to reach out for collaborations or just a friendly hello🌟
          </p>
          <p className="font-poppins md:text-lg text-sm">
         qazimaazsajjad1@gmail.com
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end ">
            <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-30s md:w-60 lg:w-auto" onClick={handleSendEmail}>
              Contact me
            </button>
            {/* <div className="flex items-center gap-4">
              <SocialButton bgColor="dribbble">
                <Dribbble className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="instagram">
                <Instagram className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="twitter">
                <Twitter className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="linkedin">
                <Linkedin className="w-5 h-5" />
              </SocialButton>
            </div> */}
          </div>
        </div>
      
      </section>
      </ScrollAnimation>
    </div>
  )
}

export default contact
