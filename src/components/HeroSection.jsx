import { ArrowDown } from 'lucide-react'
import React from 'react'
import { ReactTyped } from 'react-typed'
import Tilt from 'react-parallax-tilt'
import profileImage from "../assets/profile2.png"
export const HeroSection = () => {
    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-6xl mx-auto text-center z-10 flex flex-col-reverse md:flex-row lg:flex-row gap-2'>
                <div className="space-y-4 md:space-y-5 w-full">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in text-xl md:text-3xl'> Hi, I'm <br /></span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> Ashutosh</span>
                        <span className='text-gradient opacity-0  animate-fade-in-delay-2'> Maurya</span>
                    </h1>
                    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4'>
                        <span className='font-bold text-xl md:text-3xl'>
                            I'm a <ReactTyped strings={["Web Developer ","Coder","Frontend Developer"]} typeSpeed={70} backSpeed={60} loop={true} className='text-primary ' /> 
                            </span> <br /> I have experience in building websites using the MERN stack. I enjoy learning new things and love solving problems through coding and development.
                    </p>
                    <div className='opacity-0 animate-fade-in-delay-4 pt-4'>
                        <a href='#projects' className='cosmic-button'>View My Work</a>
                    </div>
                </div>
                {/* right side image  */}
                <div className='w-full lg:w-1/2 flex justify-center items-center '>
                   <Tilt className='hover:border-4 transition-all delay-300 border-primary-foreground rounded-full' tiltMaxAngleX={45}
                   tiltMaxAngleY={45}
                   perspective={1000}
                   scale={1.1}
                   transitionSpeed={1000}
                   gyroscope={true}> <img src={profileImage} alt="Ashutosh Maurya" className='h-[200px] md:h-[300px] rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/></Tilt>
                </div>
            </div>
            
            {/* scroll down  */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
            <ArrowDown className='h-5 w-5 text-primary'/>
            </div>
        </section>
    )
}
