import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)
    useGSAP(() => {
        const animateProject = gsap.utils.toArray('.animate-project');

        gsap.timeline({
            scrollTrigger: {
                trigger: animateProject,
                start: 'top bottom-=200', 
                end: 'bottom center',
            }
        }).from(animateProject, {
            y: 100,
            opacity: 0, 
            duration: 1.5, 
            stagger: 0.05, 
            ease: 'expo.inOut'
        })

    }, {scope: sectionRef.current})
  return (
    <div ref={sectionRef} id='work' className='app-showcase'>
      <div className="w-full">
        <div className="showcaselayout">
            {/* LEFT */}
            <div className="first-project-wrapper animate-project" ref={project1Ref}>
                <div className="image-wrapper">
                    <img src='/images/project1.png' alt='Ryde' />
                </div>
                <div className="text-content">
                    <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                    <p className='text-white-50 md:text-xl'>
                        An App built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
                    </p>
                </div>
            </div>
            <div className="project-list-wrapper overflow-hidden">
                <div className="project animate-project" ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src='/images/project2.png' alt='Library Management Platform' />
                    </div>
                    <h2>Library Management Platform</h2>
                </div>
                <div className="project animate-project" ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src='/images/project3.png' alt='YC Directory' />
                    </div>
                    <h2>YC Directory - A Startup Showcase App</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection
