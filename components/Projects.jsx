import React from 'react'
import { useEffect,useState } from 'react';
import AnimatedList from './AnimationList';
import Link from 'next/link';

const Projects = () => {
 
  const [isHovered, setIsHovered] = useState(false);
  const [textScale, setTextScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;
      const halfWindowHeight = windowHeight / 2;
      const scrollThreshold = contentHeight / 2 - halfWindowHeight - 10;
      
      if (scrollPosition >= scrollThreshold) {
        const scrollDifference = scrollPosition - scrollThreshold;
        const newScale = Math.max(1 - scrollDifference * 0.001, 0.5);
        setTextScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
          try { 

          if(isHovered){
          document.querySelector("#slidephoto").style.top = `${event.clientY}px`;
          document.querySelector("#slidephoto").style.left = `${event.clientX}px`;
          document.querySelector("#slidephoto").style.transform = `translate(${-event.clientX * 0.5}px, ${-event.clientY * 0.1}px)`;
          }
        }catch(err){
          console.log(err);

        }
        };
    
        const handleChainnMouseMove = () => {
          document.querySelector("#slidephotos").style.marginTop = "10%";
          document.querySelector("#chainn").style.color = "rgb(177, 177, 177)";
        };
    
        const handleChainnMouseLeave = () => {
          document.querySelector("#chainn").style.color = "initial";
        };
    
        const handleAtyMouseMove = () => {
          document.querySelector("#slidephotos").style.marginTop = "-120%";
          document.querySelector("#aty").style.color = "rgb(177, 177, 177)";
        };
    
        const handleAtyMouseLeave = () => {
          document.querySelector("#aty").style.color = "initial";
        };
    
        const handleMicMouseMove = () => {
          document.querySelector("#slidephotos").style.marginTop = "-240%";
          document.querySelector("#mic").style.color = "rgb(177, 177, 177)";
        };
    
        const handleMicMouseLeave = () => {
          document.querySelector("#mic").style.color = "initial";
        };
    
        const handleTapsoMouseMove = () => {
          document.querySelector("#slidephotos").style.marginTop = "-360%";
          document.querySelector("#tapso").style.color = "rgb(177, 177, 177)";
        };
    
        const handleTapsoMouseLeave = () => {
          document.querySelector("#tapso").style.color = "initial";
        };
    
        const handleEffMouseMove = () => {
          document.querySelector("#slidephoto").style.display = "initial";
          document.querySelector("#slidephoto").style.opacity = 1;
        };
    
        const handleEffMouseLeave = () => {
          document.querySelector("#slidephoto").style.display = "none";
          document.querySelector("#slidephoto").style.opacity = 0;
        };
    
        const handleBtnsmMouseMove = () => {
          document.querySelector("#btnsm").style.backgroundColor = "blue";
          document.querySelector("#btnsm").style.cursor = "pointer";
          document.querySelector("#btnsm h1").style.color = "white";
        };
    
        const handleBtnsmMouseLeave = () => {
          document.querySelector("#btnsm").style.backgroundColor = "initial";
          document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)";
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        // document.querySelector("#chainn").addEventListener("mousemove", handleChainnMouseMove);
        // document.querySelector("#chainn").addEventListener("mouseleave", handleChainnMouseLeave);
        document.querySelector("#aty").addEventListener("mousemove", handleAtyMouseMove);
        document.querySelector("#aty").addEventListener("mouseleave", handleAtyMouseLeave);
        document.querySelector("#mic").addEventListener("mousemove", handleMicMouseMove);
        document.querySelector("#mic").addEventListener("mouseleave", handleMicMouseLeave);
        document.querySelector("#tapso").addEventListener("mousemove", handleTapsoMouseMove);
        document.querySelector("#tapso").addEventListener("mouseleave", handleTapsoMouseLeave);
        document.querySelector("#eff").addEventListener("mousemove", handleEffMouseMove);
        document.querySelector("#eff").addEventListener("mouseleave", handleEffMouseLeave);
        document.querySelector("#btnsm").addEventListener("mousemove", handleBtnsmMouseMove);
        document.querySelector("#btnsm").addEventListener("mouseleave", handleBtnsmMouseLeave);

    }, [isHovered]);

  return (
    <>
    <div id="project" className='bg-slate-00 m-6 mt-10  text-center font-poppins font-extrabold '
    style={{ transform: `scale(${textScale})` }}>

        <div id="projecttext" className='md:text-7xl text-4xl'>

           
            <p>Here are <span className='text-yellow-400'>some</span> of my <span className='text-purple-600'>projects</span> that I have <span className='text-blue-600'>worked</span> <span>On</span></p>
        </div>
    </div>
    <div id="slidephoto">
     
        <div id="slidephotos">
            <div className="photu"></div>
            <div className="photu"></div>
            <div className="photu"></div>
            <div className="photu"></div>
        </div>
        <div id="view">
            <h1>View</h1>
        </div>
    </div>
    <div id="one" onMouseEnter={()=>{setIsHovered(true)}}>
    {console.log(isHovered)}
        <AnimatedList>
        <div id="eff">
        <div className="stext" id="tapso">
                <h1>NextStore</h1>
                <p> Next.js & Web App</p>
            </div>
            
           
            <div className="line">
                <div className="hrline"></div>
            </div>
            <div className="stext" id="aty">
                <h1>Covid Statistics</h1>
                <p>Android & Development</p>
            </div>
            <div className="line">
                <div className="hrline"></div>
            </div>
            <div className="stext" id="mic">
                <h1>Fyp System</h1>
                <p>Mern & Development</p>
            </div>
            <div className="line">
                <div className="hrline"></div>
            </div>
           
           
            
        </div>
        <Link href="/ProjectsDetails">
        <div id="showm">
          
            <div id="btnsm" >
                <h1>More Work</h1>
            </div>
         
        </div>
        </Link>
        </AnimatedList>
    </div>
    </>
  )
}

export default Projects
