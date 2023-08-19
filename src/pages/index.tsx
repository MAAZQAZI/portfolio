import Head from "next/head";
import Navbar from "../../components/Navbar";
import Bio from "../../components/Bio";
import Skills from "../../components/Skills";
import ProjectPreview from "../../components/ProjectPreview";
import Dribbble from "../../public/dribbble.svg";
import meta from "../../public/meta.png";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";

import Linkedin from "../../public/linkedin.svg";
import SocialButton from "../../components/SocialButton";
import { useEffect } from 'react';
import {  motion, useAnimation } from 'framer-motion';

import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
export default function Home() {
 
  const openInNewTab = (url: string | URL | undefined) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const text = "";
    useEffect(() => {
      const handleVisibilityChange = () => {
        const title = document.title;
        if (document.hidden) {
          document.title = 'Hey there!';
        } else {
          document.title = 'Maaz Sajjad';
        }
      };
  
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      // Cleanup the event listener when the component is unmounted
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);
  
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const animationVariants2 = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };
  const handleSendEmail = () => {
    const recipient = 'qazimaazsajjad1@gmail.com';
    const subject = '"Portfolio-side';
    const body = 'Your email message here';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
    };
  return (
    <>
      <Head>
        <title>MAAZ</title>
        <meta name="description" content="Personal Portfolio ❤" />
        <meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="800"/>
        <meta property="og:title" content="Maaz Sajjad" />
       
        <meta property="og:image" content="/meta1.png" />
        <meta property="og:url" content="https://maazsajjad.codes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />


      
    
      <section id="home" className=" dark grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4 font-poppins dark:text-white ">
      <motion.div
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
        <div className="bg-zinc-200 h-[30rem] text-xl md:text-xl rounded-3xl p-10 flex flex-col gap-6 md:gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-2xl md:text-4xl font-semibold font-poppins letter-spacing: -0.025em">
           
            <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4,
       }}
          
        >
           Hello, I&apos;m a Junior Software Engineer with A year of experience.
        </motion.span>
          </h1>
          <p className="flex-1 font-poppins text-sm md:text-xl">
          From <span className="font-semibold">Pakistan 🇵🇰

            </span>, Loves to build things for the web. I&apos;m currently working on a few projects and looking for new opportunities.
           Final year <span className="font-bold">CS</span> student at <span className="font-semibold">UET Lahore</span>.





          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end ">
            <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto" onClick={handleSendEmail
            }>
              Contact me
            </button>
            <div className="flex items-center gap-4">
              <SocialButton bgColor="dribbble" >
             
      <Dribbble className="w-5 h-5" onClick={() => openInNewTab('https://github.com/MAAZQAZI')} />
   
              </SocialButton>
              <SocialButton bgColor="instagram" >

                <Instagram className="w-5 h-5" onClick={() => openInNewTab('https://www.instagram.com/maaz_qzi/')}  />
               
              </SocialButton>

              <SocialButton bgColor="twitter">
               

                <Twitter className="w-5 h-5" onClick={() => openInNewTab('https://twitter.com/QaziMaaz13')} />
                
              </SocialButton>
                
              <SocialButton bgColor="linkedin">
              
                <Linkedin className="w-5 h-5" onClick={() => openInNewTab('https://www.linkedin.com/in/maaz-sajjad-75a70b219/')} />
              
              </SocialButton>
            </div>
          </div>
        </div>
        </motion.div>
        <motion.div
      initial="hidden"
      animate={controls}
      variants={animationVariants2}
    >
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile.jpeg')] bg-cover bg-center" />
        </motion.div>
      </section>
      
      {/* <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Flip App"
          description="Next-gen social media"
          imageUrl="/project-1.png"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Moneyscape"
          description="Lend and borrow dashboard"
          imageUrl="/project-2.png"
          bgColor="#313442"
          dark
        />
        <ProjectPreview
          name="Admin Onboarding"
          description="Increase user engagement"
          imageUrl="/project-3.png"
        />
        <ProjectPreview
          name="Project Dashboard"
          description="Project management app"
          bgColor="#4e4e56"
          dark
        />
        <ProjectPreview
          name="Newsy App"
          description="News aggregator app"
          imageUrl="/project-2.png"
          bgColor="#171717"
          dark
        />
        <ProjectPreview
          name="Krypto"
          description="Analyze crypto currency"
          imageUrl="/project-3.png"
        />
      </section> */}
      
      <Bio />
      <Skills />
      <Projects />
      <Contact />

    </>
  );
}
