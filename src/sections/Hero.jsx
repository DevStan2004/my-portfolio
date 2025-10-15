import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import AnimatedCounter from '../components/AnimatedCounter'

gsap.registerPlugin(SplitText)

const Hero = () => {

    useGSAP(() => {
        const animatedText = new SplitText('.animate-text');
        gsap.from(animatedText.lines, {
            y: 100,
            opacity: 0,
            duration: 2, 
            stagger: 0.2, 
            ease: 'power3.inOut'
        })
    })
    
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className="absolute top-0 left-0 z-10">
            <img src='/images/bg.png' alt='background' />
        </div>

        <div className='hero-layout'>
            {/* Left: Hero content */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1 className='animate-text'>
                            Shaping 
                            <span className='slide'>
                                <span className="wrapper">
                                    {words.map((word, index) => (
                                        <span key={index} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <img 
                                                src={word.imgPath}
                                                alt={word.text}
                                                className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1 className='animate-text'>into Real Projects</h1>
                        <h1 className='animate-text'>that Deliver Results</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I'm Stanley, a developer with a mindset of create sleek, animated, user-friendly website.
                    </p>
                    <Button 
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my Work"
                    />
                </div>
            </header>
            {/* Right: 3D Model */}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience />
                </div>
            </figure>
        </div>
            <AnimatedCounter /> 
    </section>
  )
}

export default Hero
